import { filter, map, pipe } from 'rxjs'

import {
  QuizClientStudentEvent,
  QuizClientStudentEventType,
  QuizClientStudentQuizUpdate,
  QuizClientStudentShowRank,
  QuizServerStudentEvent,
  QuizServerStudentEventType,
  QuizServerStudentQuizUpdate,
  QuizServerStudentShowRank,
} from '@luminate/rest'

import { QuizService } from './quiz.service'

export class QuizStudentEventMapper {
  constructor(
    private readonly quizService: QuizService,
    private readonly userId: string
  ) {}

  operator() {
    return pipe(
      map<QuizServerStudentEvent, QuizClientStudentEvent | null>((event) => {
        switch (event.type) {
          case QuizServerStudentEventType.QUIZ_UPDATE:
            return this.mapQuizUpdatedEvent(event)
          case QuizServerStudentEventType.SHOW_RANK:
            return this.mapShowRankEvent(event)
        }
      }),
      filter((event) => event !== null),
      map((event) => event!)
    )
  }

  private mapQuizUpdatedEvent(
    serverEvent: QuizServerStudentQuizUpdate
  ): QuizClientStudentQuizUpdate {
    const { liveSession: originalLiveSession, updates: originalUpdates } = serverEvent

    const liveSession = {
      endTime: new Date(originalLiveSession.endTime),
      isQuizClosed: originalLiveSession.isQuizClosed,
    }

    return {
      type: QuizClientStudentEventType.QUIZ_UPDATE,
      updates: originalUpdates.map(({ quiz, quizId }) => {
        if (!quiz) {
          return {
            quizId,
            quiz: null,
          }
        }
        return {
          quizId,
          quiz: this.quizService.mapQuizForStudent(
            liveSession,
            { ...quiz, config: quiz.config, solution: quiz.solution },
            this.userId
          ),
        }
      }),
    }
  }

  private mapShowRankEvent(
    serverEvent: QuizServerStudentShowRank
  ): QuizClientStudentShowRank | null {
    const myScore = serverEvent.scores.find((score) => score.studentId === this.userId)
    if (!myScore) return null
    return {
      type: QuizClientStudentEventType.SHOW_RANK,
      rank: myScore.rank,
      student: myScore.student,
    }
  }
}
