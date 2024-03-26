import { Controller } from '@app/common/controller'
import { container } from '@app/container'
import { startSseFromObservable } from '@app/utils'

import { mainContract } from '@luminate/rest'

import { QuizService } from './quiz.service'

export class QuizController extends Controller {
  constructor(private readonly quizService: QuizService) {
    super()

    this.register(mainContract.quiz, {
      getQuizzes: async ({ query: { liveSessionId } }) => {
        // TODO: access control
        const quizzes = await this.quizService.getQuizzesByLiveSessionId(liveSessionId)
        return {
          status: 200,
          body: quizzes,
        }
      },
      getQuizzesForStudent: async ({ query: { liveSessionId }, request }) => {
        const userContext = await request.auth.requireUserContext()
        const quizzes = await this.quizService.getQuizzesForStudentByLiveSessionId(
          liveSessionId,
          userContext.id
        )
        return {
          status: 200,
          body: quizzes,
        }
      },
      createQuiz: async ({ body }) => {
        // TODO: access control
        const quiz = await this.quizService.createQuiz(body)
        return {
          status: 200,
          body: quiz,
        }
      },
      updateQuiz: async ({ params: { quizId }, body }) => {
        // TODO: access control
        const quiz = await this.quizService.updateQuiz(quizId, body)
        return {
          status: 200,
          body: quiz,
        }
      },
      deleteQuiz: async ({ params: { quizId } }) => {
        // TODO: access control
        await this.quizService.deleteQuiz(quizId)
        return {
          status: 200,
          body: null,
        }
      },
      respondQuiz: async ({ params: { quizId }, body, request }) => {
        const userContext = await request.auth.requireUserContext()
        const result = await this.quizService.respondQuiz(quizId, body, userContext.id)
        return {
          status: 200,
          body: result,
        }
      },
      subscribeStudentEvents: async ({ query: { liveSessionId }, request, reply }) => {
        const userContext = await request.auth.requireUserContext()
        const observable = await this.quizService.getStudentObserver(liveSessionId, userContext.id)
        startSseFromObservable(request, reply, observable)
      },
      subscribeTutorEvents: async ({ query: { liveSessionId }, request, reply }) => {
        const tutorContext = await request.auth.requireTutorContext()
        const observable = await this.quizService.getTutorObserver(liveSessionId, tutorContext.id)
        startSseFromObservable(request, reply, observable)
      },
      showStudentRank: async ({ query: { liveSessionId }, request }) => {
        const tutorContext = await request.auth.requireTutorContext()
        await this.quizService.showStudentRank(liveSessionId, tutorContext.id)
        return {
          status: 200,
          body: null,
        }
      },
      endAllQuiz: async ({ query: { liveSessionId }, request }) => {
        const tutorContext = await request.auth.requireTutorContext()
        await this.quizService.endAllQuiz(liveSessionId, tutorContext.id)
        return {
          status: 200,
          body: null,
        }
      },
    })
  }
}

container.registerSingleton<QuizController, QuizController>()
