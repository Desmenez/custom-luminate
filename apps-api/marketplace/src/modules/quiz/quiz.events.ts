import { RedisService } from '@softnetics/redis'
import { Observable, concat, defer } from 'rxjs'

import { LiveSession, LiveSessionQuiz, StudentOnLiveSessionQuiz } from '@luminate/database'
import {
  QuizClientStudentEvent,
  QuizServerStudentEvent,
  QuizServerStudentEventType,
  QuizTutorEvent,
  QuizTutorEventType,
  parseQuizAnswer,
} from '@luminate/rest'

import { QuizService } from '.'
import { QuizStudentEventMapper } from './quiz.mapper'

export class QuizEvents {
  constructor(
    private readonly quizService: QuizService,
    private readonly redisService: RedisService
  ) {}

  async onTutorCreateQuiz(quiz: LiveSessionQuiz & { liveSession: LiveSession }) {
    await Promise.all([
      this.publishStudentEvent(quiz.liveSessionId, {
        type: QuizServerStudentEventType.QUIZ_UPDATE,
        liveSession: {
          endTime: quiz.liveSession.endTime.toISOString(),
          isQuizClosed: quiz.liveSession.isQuizClosed,
        },
        updates: [
          {
            quizId: quiz.id,
            quiz: { ...quiz, studentAnswers: [] },
          },
        ],
      }),
      this.publishTutorEvent(quiz.liveSessionId, {
        type: QuizTutorEventType.QUIZ_UPDATE,
        updates: [
          {
            quizId: quiz.id,
            quiz: { ...quiz, studentAnswers: [] },
          },
        ],
      }),
    ])
  }

  async onTutorUpdateQuiz(
    quiz: LiveSessionQuiz & { liveSession: LiveSession; studentAnswers: StudentOnLiveSessionQuiz[] }
  ) {
    const studentAnswers = quiz.studentAnswers.map((studentAnswer) => ({
      ...studentAnswer,
      answer: parseQuizAnswer(quiz.type, studentAnswer.answer),
    }))
    await Promise.all([
      this.publishStudentEvent(quiz.liveSessionId, {
        type: QuizServerStudentEventType.QUIZ_UPDATE,
        liveSession: {
          endTime: quiz.liveSession.endTime.toISOString(),
          isQuizClosed: quiz.liveSession.isQuizClosed,
        },
        updates: [
          {
            quizId: quiz.id,
            quiz: { ...quiz, studentAnswers },
          },
        ],
      }),
      this.publishTutorEvent(quiz.liveSessionId, {
        type: QuizTutorEventType.QUIZ_UPDATE,
        updates: [
          {
            quizId: quiz.id,
            quiz: { ...quiz, studentAnswers },
          },
        ],
      }),
    ])
  }

  async onTutorDeleteQuiz(deletedQuiz: LiveSessionQuiz & { liveSession: LiveSession }) {
    await Promise.all([
      this.publishStudentEvent(deletedQuiz.liveSessionId, {
        type: QuizServerStudentEventType.QUIZ_UPDATE,
        liveSession: {
          endTime: deletedQuiz.liveSession.endTime.toISOString(),
          isQuizClosed: deletedQuiz.liveSession.isQuizClosed,
        },
        updates: [
          {
            quizId: deletedQuiz.id,
            quiz: null,
          },
        ],
      }),
      this.publishTutorEvent(deletedQuiz.liveSessionId, {
        type: QuizTutorEventType.QUIZ_UPDATE,
        updates: [
          {
            quizId: deletedQuiz.id,
            quiz: null,
          },
        ],
      }),
      this.emitLeaderboardToTutor(deletedQuiz.liveSessionId),
    ])
  }

  async onStudentResponse(
    quiz: LiveSessionQuiz & { studentAnswers: StudentOnLiveSessionQuiz[] },
    updateScores: boolean
  ) {
    const studentAnswers = quiz.studentAnswers.map((studentAnswer) => ({
      ...studentAnswer,
      answer: parseQuizAnswer(quiz.type, studentAnswer.answer),
    }))
    const promises: Promise<void>[] = [
      this.publishTutorEvent(quiz.liveSessionId, {
        type: QuizTutorEventType.QUIZ_UPDATE,
        updates: [
          {
            quizId: quiz.id,
            quiz: { ...quiz, studentAnswers },
          },
        ],
      }),
    ]
    if (updateScores) {
      promises.push(this.emitLeaderboardToTutor(quiz.liveSessionId))
    }
    await Promise.all(promises)
  }

  private async emitLeaderboardToTutor(liveSessionId: string) {
    const scores = await this.quizService.getLeaderboard(liveSessionId)
    await this.publishTutorEvent(liveSessionId, {
      type: QuizTutorEventType.LEADERBOARD_UPDATE,
      scores: scores,
    })
  }

  async onShowStudentRank(liveSessionId: string) {
    const scores = await this.quizService.getLeaderboard(liveSessionId)
    await this.publishStudentEvent(liveSessionId, {
      type: QuizServerStudentEventType.SHOW_RANK,
      scores: scores,
    })
  }

  async onTutorEndAllQuiz(liveSessionId: string) {
    const liveSession = await this.quizService.getLiveSessionWithQuizzesForTutor(liveSessionId)
    await this.publishStudentEvent(liveSession.id, {
      type: QuizServerStudentEventType.QUIZ_UPDATE,
      liveSession: {
        endTime: liveSession.endTime.toISOString(),
        isQuizClosed: liveSession.isQuizClosed,
      },
      updates: liveSession.quizzes.map((quiz) => {
        const studentAnswers = quiz.studentAnswers.map((studentAnswer) => ({
          ...studentAnswer,
          answer: parseQuizAnswer(quiz.type, studentAnswer.answer),
        }))
        return {
          quizId: quiz.id,
          quiz: { ...quiz, studentAnswers },
        }
      }),
    })
  }

  private getStudentEventTopic(liveSessionId: string) {
    return `marketplace:liveSession:${liveSessionId}:quiz:student`
  }

  private async publishStudentEvent(liveSessionId: string, event: QuizServerStudentEvent) {
    const topic = this.getStudentEventTopic(liveSessionId)
    await this.redisService.publishObject(topic, event)
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
  async getStudentObserver(
    liveSessionId: string,
    userId: string
  ): Promise<Observable<QuizClientStudentEvent>> {
    const observable = this.subscribeChannel<QuizServerStudentEvent>(
      this.getStudentEventTopic(liveSessionId)
    )
    const mapper = new QuizStudentEventMapper(this.quizService, userId)
    return observable.pipe(mapper.operator())
  }

  private getTutorEventTopic(liveSessionId: string) {
    return `marketplace:liveSession:${liveSessionId}:quiz:tutor`
  }

  private async publishTutorEvent(liveSessionId: string, event: QuizTutorEvent) {
    const topic = this.getTutorEventTopic(liveSessionId)
    await this.redisService.publishObject(topic, event)
  }

  async getTutorObserver(liveSessionId: string) {
    const initialLeaderboard: Observable<QuizTutorEvent> = defer(async () => ({
      type: QuizTutorEventType.LEADERBOARD_UPDATE,
      scores: await this.quizService.getLeaderboard(liveSessionId),
    }))
    const initialQuizzes: Observable<QuizTutorEvent> = defer(async () => {
      const quizzes = await this.quizService.getQuizzesForTutor(liveSessionId)
      const quizzesWithMappedAnswers = quizzes.map((quiz) => {
        const studentAnswers = quiz.studentAnswers.map((studentAnswer) => ({
          ...studentAnswer,
          answer: parseQuizAnswer(quiz.type, studentAnswer.answer),
        }))
        return { ...quiz, studentAnswers }
      })
      return {
        type: QuizTutorEventType.QUIZ_UPDATE,
        updates: quizzesWithMappedAnswers.map((quiz) => ({
          quizId: quiz.id,
          quiz,
        })),
      }
    })
    const observable = this.subscribeChannel<QuizTutorEvent>(this.getTutorEventTopic(liveSessionId))
    return concat(initialLeaderboard, initialQuizzes, observable)
  }

  private subscribeChannel<T>(channel: string): Observable<T> {
    return this.redisService.subscribeObject<T>(channel)
  }
}
