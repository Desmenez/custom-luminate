import { z } from 'zod'

import { LiveSessionQuizModel } from '@luminate/database'

import { contract } from '../../contracts'
import {
  CreateQuizInput,
  LiveSessionQuizForStudent,
  RespondQuizInput,
  UpdateQuizInput,
} from './dto'

export * from './dto'

export const quizContract = contract.router({
  getQuizzes: {
    method: 'GET',
    path: '',
    query: z.object({
      liveSessionId: z.string(),
    }),
    responses: {
      200: z.array(LiveSessionQuizModel),
    },
    summary: 'Get quizzes by live session id',
  },
  getQuizzesForStudent: {
    method: 'GET',
    path: '/for-student',
    query: z.object({
      liveSessionId: z.string(),
    }),
    responses: {
      200: z.array(LiveSessionQuizForStudent),
    },
    summary: 'Get quizzes for student',
  },
  createQuiz: {
    method: 'POST',
    path: '',
    body: CreateQuizInput,
    responses: {
      200: LiveSessionQuizModel,
    },
    summary: 'Create live session quiz',
  },
  updateQuiz: {
    method: 'PATCH',
    path: '/:quizId',
    body: UpdateQuizInput,
    responses: {
      200: LiveSessionQuizModel,
      404: null,
    },
    summary: 'Update quiz',
  },
  deleteQuiz: {
    method: 'DELETE',
    path: '/:quizId',
    body: null,
    responses: {
      200: null,
    },
    summary: 'Delete quiz',
  },
  respondQuiz: {
    method: 'POST',
    path: '/:quizId/respond',
    body: RespondQuizInput,
    responses: {
      200: LiveSessionQuizForStudent,
    },
    summary: 'Respond to quiz',
  },
  subscribeStudentEvents: {
    method: 'GET',
    path: '/subscribe-student-events',
    query: z.object({
      liveSessionId: z.string(),
    }),
    responses: {
      200: z.never(),
    },
  },
  subscribeTutorEvents: {
    method: 'GET',
    path: '/subscribe-tutor-events',
    query: z.object({
      liveSessionId: z.string(),
    }),
    responses: {
      200: z.never(),
    },
  },
  showStudentRank: {
    method: 'POST',
    path: '/show-student-rank',
    query: z.object({
      liveSessionId: z.string(),
    }),
    body: null,
    responses: {
      200: null,
    },
  },
  endAllQuiz: {
    method: 'POST',
    path: '/end-all-quiz',
    query: z.object({
      liveSessionId: z.string(),
    }),
    body: null,
    responses: {
      200: null,
    },
  },
})
