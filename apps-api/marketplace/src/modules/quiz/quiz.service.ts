import { container } from '@app/container'
import { prisma } from '@app/database'
import { extendFields } from '@app/utils'
import { RedisService } from '@softnetics/redis'
import DataLoader from 'dataloader'
import { addHours, isPast } from 'date-fns'

import {
  LiveSession,
  LiveSessionQuiz,
  LiveSessionQuizType,
  StudentOnLiveSessionQuiz,
} from '@luminate/database'
import { BadInputError } from '@luminate/error'
import {
  CreateQuizInput,
  LiveSessionQuizForStudent,
  RespondQuizInput,
  UpdateQuizInput,
  parseQuizAnswer,
  parseQuizConfig,
  parseQuizSolution,
} from '@luminate/rest'

import { UserForComment, UserRepository } from '../user'
import { QuizEvents } from './quiz.events'

export class QuizService {
  private readonly quizEvents: QuizEvents
  private readonly userLoader: DataLoader<string, UserForComment | null>

  constructor(redisService: RedisService, userRepository: UserRepository) {
    this.quizEvents = new QuizEvents(this, redisService)
    this.userLoader = new DataLoader((userIds: readonly string[]) =>
      userRepository.findByIds([...userIds])
    )
  }

  async getQuizzesByLiveSessionId(liveSessionId: string) {
    return await prisma.liveSessionQuiz.findMany({
      where: {
        liveSessionId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  }

  async getQuizzesForStudentByLiveSessionId(liveSessionId: string, userId: string) {
    const liveSession = await prisma.liveSession.findUnique({
      where: {
        id: liveSessionId,
      },
      include: {
        quizzes: {
          include: {
            studentAnswers: {
              where: {
                studentId: userId,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    })
    if (!liveSession) {
      throw new BadInputError('marketplace', 'LIVE_SESSION_NOT_FOUND')
    }
    const quizzes = liveSession.quizzes
    return quizzes.map((quiz) => {
      return this.mapQuizForStudent(liveSession, quiz, userId)
    })
  }

  /**
   * Create a quiz, and notify subscribing students
   * @param data Quiz data
   * @returns The creted quiz
   */
  async createQuiz(data: CreateQuizInput): Promise<LiveSessionQuiz> {
    const { config: rawConfig, solution: rawSolution, ...quizData } = data
    const config = parseQuizConfig(data.type, rawConfig)
    const solution = parseQuizSolution(data.type, rawSolution)
    const quiz = await prisma.liveSessionQuiz.create({
      data: {
        ...quizData,
        config,
        solution,
      },
      include: {
        liveSession: true,
      },
    })
    await this.quizEvents.onTutorCreateQuiz(quiz)
    return quiz
  }

  /**
   * Update a quiz, and notify subscribing students
   * @param quizId The quiz id
   * @param data Updated fields
   * @returns The updated quiz
   */
  async updateQuiz(quizId: string, data: UpdateQuizInput): Promise<LiveSessionQuiz> {
    const quiz = await prisma.liveSessionQuiz.update({
      where: {
        id: quizId,
      },
      data,
      include: {
        studentAnswers: true,
        liveSession: true,
      },
    })
    await this.quizEvents.onTutorUpdateQuiz(quiz)
    return quiz
  }

  /**
   * Delete a quiz, and notify subscribing students
   * @param quizId The quiz id
   */
  async deleteQuiz(quizId: string) {
    const deletedQuiz = await prisma.liveSessionQuiz.delete({
      where: {
        id: quizId,
      },
      include: {
        liveSession: true,
      },
    })
    await this.quizEvents.onTutorDeleteQuiz(deletedQuiz)
  }

  /**
   * Respond to a quiz.
   *
   * First, check if the quiz is accepting answers, and that the user hasn't answered.
   * Then the answer payload is parsed, and checked for correctness before inserting it.
   *
   * @param quizId The quiz id
   * @param data The answer payload
   * @param userId The answering user's id
   * @returns The quiz with the student's answer
   */
  async respondQuiz(
    quizId: string,
    data: RespondQuizInput,
    userId: string
  ): Promise<LiveSessionQuizForStudent> {
    const quiz = await prisma.liveSessionQuiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        studentAnswers: {
          where: {
            studentId: userId,
          },
        },
        liveSession: true,
      },
    })
    if (!quiz) {
      throw new BadInputError('marketplace', 'QUIZ_NOT_FOUND')
    }
    if (!this.canAnswerQuiz(quiz.liveSession, quiz)) {
      throw new BadInputError('marketplace', 'NOT_ACCEPTING_ANSWERS')
    }
    if (quiz.studentAnswers.length > 0) {
      throw new BadInputError('marketplace', 'ALREADY_RESPONSED')
    }
    const answer = parseQuizAnswer(quiz.type, data.answer)
    const correct = await this.isQuizAnswerCorrect(quiz.type, quiz.solution, answer)

    await prisma.studentOnLiveSessionQuiz.create({
      data: {
        liveSessionQuizId: quiz.id,
        studentId: userId,
        liveSessionId: quiz.liveSessionId,
        answer,
        correct,
      },
    })
    const updatedQuiz = await prisma.liveSessionQuiz.findUniqueOrThrow({
      where: { id: quiz.id },
      include: { studentAnswers: true },
    })
    await this.quizEvents.onStudentResponse(updatedQuiz, correct)
    return this.mapQuizForStudent(quiz.liveSession, updatedQuiz, userId)
  }

  /**
   * Map a quiz object for a specific student.
   * Returns the quiz info, and the student's answer.
   * Additionally, the solution will be included if these conditions are met:
   *  1. The quiz is not accepting answers, or the live session is over
   *  2. The student has answered the quiz
   *
   * @param quiz The quiz, with students' answers
   * @param userId The target student's ID
   */
  mapQuizForStudent(
    liveSession: Pick<LiveSession, 'endTime' | 'isQuizClosed'>,
    quiz: Omit<LiveSessionQuiz, 'config' | 'solution'> & {
      config: unknown
      solution: unknown
      studentAnswers: StudentOnLiveSessionQuiz[]
    },
    userId: string
  ): LiveSessionQuizForStudent {
    const { id, liveSessionId, type, createdAt } = quiz
    const myAnswer = quiz.studentAnswers.find((answer) => answer.studentId === userId)
    const showSolution = this.shouldShowSolution(liveSession, quiz) && myAnswer !== undefined
    const config = parseQuizConfig(type, quiz.config)
    const solution = showSolution ? parseQuizSolution(type, quiz.solution) : null
    let isMyAnswerCorrect = null
    if (showSolution) {
      isMyAnswerCorrect = myAnswer.correct
    }
    return {
      id,
      liveSessionId,
      type,
      config,
      solution,
      isAcceptingAnswers: this.canAnswerQuiz(liveSession, quiz),
      createdAt,
      myAnswer: myAnswer?.answer ?? null,
      isMyAnswerCorrect,
    }
  }

  /**
   * Whether a quiz can be answered.
   * @param quiz The quiz
   * @returns true if the quiz is accepting answers, or the live session is over
   */
  canAnswerQuiz(
    liveSession: Pick<LiveSession, 'endTime' | 'isQuizClosed'>,
    quiz: Pick<LiveSessionQuiz, 'isAcceptingAnswers'>
  ) {
    if (liveSession.isQuizClosed) return false
    if (quiz.isAcceptingAnswers) return true
    if (liveSession && this.isPastLiveSessionCutoff(liveSession)) return true
    return false
  }

  /**
   * Whether a quiz's solution should be shown.
   * @param quiz The quiz
   * @returns true if the quiz is not accepting answers, or the live session is over
   */
  shouldShowSolution(
    liveSession: Pick<LiveSession, 'endTime' | 'isQuizClosed'>,
    quiz: Pick<LiveSessionQuiz, 'isAcceptingAnswers'>
  ) {
    if (liveSession.isQuizClosed) return true
    if (!quiz.isAcceptingAnswers) return true
    if (liveSession && this.isPastLiveSessionCutoff(liveSession)) return true
    return false
  }

  isPastLiveSessionCutoff(liveSession: Pick<LiveSession, 'endTime'>) {
    return isPast(addHours(liveSession.endTime, 2))
  }

  async isQuizAnswerCorrect(
    type: LiveSessionQuizType,
    rawSolution: unknown,
    rawAnswer: unknown
  ): Promise<boolean> {
    switch (type) {
      case LiveSessionQuizType.TEXT: {
        const payload = parseQuizSolution(type, rawSolution)
        const answer = parseQuizAnswer(type, rawAnswer)
        return payload.correctAnswer.toLowerCase() === answer.answer.toLowerCase()
      }
      case LiveSessionQuizType.CHOICE: {
        const payload = parseQuizSolution(type, rawSolution)
        const answer = parseQuizAnswer(type, rawAnswer)
        return payload.correctChoice === answer.choice
      }
    }
  }

  async getLeaderboard(liveSessionId: string) {
    const { liveCourseId } = await prisma.liveSession.findUniqueOrThrow({
      where: { id: liveSessionId },
      select: { liveCourseId: true },
    })
    const result = await prisma.studentOnLiveSessionQuiz.groupBy({
      by: ['studentId'],
      where: {
        liveSessionId: liveSessionId,
        correct: true,
      },
      _count: {
        liveSessionQuizId: true,
      },
      orderBy: {
        _count: {
          liveSessionQuizId: 'desc',
        },
      },
    })
    const scores = result.map((score) => ({
      studentId: score.studentId,
      score: score._count.liveSessionQuizId,
    }))
    const studentScoreMap = new Map<string, number>()
    const rankMap = new Map<number, number>()
    scores.forEach((score, index) => {
      studentScoreMap.set(score.studentId, score.score)
      if (rankMap.has(score.score)) return
      rankMap.set(score.score, index + 1)
    })
    if (!rankMap.has(0)) rankMap.set(0, scores.length + 1)

    const [paidStudents, trialStudents] = await Promise.all([
      prisma.liveCoursesOnUsers.findMany({
        where: { liveCourseId: liveCourseId },
        select: { userId: true },
      }),
      prisma.liveCourseTrialOnUser.findMany({
        where: { liveCourseId: liveCourseId, trialSessionId: liveSessionId },
        select: { userId: true },
      }),
    ])
    const studentIds = [...paidStudents, ...trialStudents].map((student) => student.userId)
    const rankedStudents = studentIds
      .map((id) => {
        const score = studentScoreMap.get(id) ?? 0
        const rank = rankMap.get(score)!
        return {
          studentId: id,
          score,
          rank,
        }
      })
      .sort((a, b) => a.rank - b.rank)

    return await extendFields(
      rankedStudents,
      async (score) => ({
        rank: rankMap.get(score.score)!,
      }),
      async (score) => ({
        student: await this.userLoader.load(score.studentId),
      })
    )
  }

  async getLiveSessionWithQuizzesForTutor(liveSessionId: string) {
    return await prisma.liveSession.findUniqueOrThrow({
      where: { id: liveSessionId },
      include: {
        quizzes: {
          include: {
            studentAnswers: true,
          },
        },
      },
    })
  }

  async getQuizzesForTutor(liveSessionId: string) {
    return await prisma.liveSessionQuiz.findMany({
      where: {
        liveSessionId,
      },
      include: {
        studentAnswers: true,
      },
    })
  }

  async endAllQuiz(liveSessionId: string, tutorId: string) {
    const liveSession = await prisma.liveSession.findUnique({
      where: {
        id: liveSessionId,
      },
      select: {
        id: true,
        liveCourse: {
          select: {
            tutorId: true,
          },
        },
        isQuizClosed: true,
      },
    })
    if (!liveSession || liveSession.liveCourse.tutorId !== tutorId) {
      throw new BadInputError('marketplace', 'LIVE_SESSION_NOT_FOUND')
    }
    if (liveSession.isQuizClosed) {
      // already closed
      return
    }
    await prisma.liveSession.update({
      where: { id: liveSessionId },
      data: { isQuizClosed: true },
    })
    await this.quizEvents.onTutorEndAllQuiz(liveSessionId)
  }

  /**
   * Observe quiz events for a live session.
   *
   * This subscribes the live session's shared channel.
   * The channel will emit quiz updates with all the student's answers.
   * The updates will then be mapped to the student's view of the quiz.
   *
   * @param liveSessionId The live session id to observe
   * @param userId The observing user's id
   * @returns An observable of quiz events in the live session
   */
  async getStudentObserver(liveSessionId: string, userId: string) {
    const liveSession = await prisma.liveSession.findUnique({
      where: {
        id: liveSessionId,
      },
    })
    if (!liveSession) {
      throw new BadInputError('marketplace', 'LIVE_SESSION_NOT_FOUND')
    }
    if (this.isPastLiveSessionCutoff(liveSession)) {
      throw new BadInputError('marketplace', 'LIVE_SESSION_ENDED')
    }
    return this.quizEvents.getStudentObserver(liveSessionId, userId)
  }

  async getTutorObserver(liveSessionId: string, tutorId: string) {
    const liveSession = await prisma.liveSession.findUnique({
      where: {
        id: liveSessionId,
      },
      select: {
        liveCourse: {
          select: {
            tutorId: true,
          },
        },
      },
    })
    if (!liveSession || liveSession.liveCourse.tutorId !== tutorId) {
      throw new BadInputError('marketplace', 'LIVE_SESSION_NOT_FOUND')
    }
    return this.quizEvents.getTutorObserver(liveSessionId)
  }

  async showStudentRank(liveSessionId: string, tutorId: string) {
    const liveSession = await prisma.liveSession.findUnique({
      where: {
        id: liveSessionId,
      },
      select: {
        id: true,
        liveCourse: {
          select: {
            tutorId: true,
          },
        },
      },
    })
    if (!liveSession || liveSession.liveCourse.tutorId !== tutorId) {
      throw new BadInputError('marketplace', 'LIVE_SESSION_NOT_FOUND')
    }
    return await this.quizEvents.onShowStudentRank(liveSession.id)
  }
}

container.registerSingleton<QuizService, QuizService>()
