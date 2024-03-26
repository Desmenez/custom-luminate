import { contract } from '../../contracts'
import {
  GetStudentGraphQuery,
  GetStudentGraphResponse,
  GetTutorCardsResponse,
  GetTutorInfoPathParams,
  GetTutorInfoResponse,
  GetTutorsResponse,
  GetUpcomingSessionsResponse,
} from './dto'

export * from './dto'

export const tutorContract = contract.router({
  getTutors: {
    method: 'GET',
    path: '',
    responses: {
      200: GetTutorsResponse,
    },
  },
  getTutorInfo: {
    method: 'GET',
    path: '/:tutorId',
    pathParams: GetTutorInfoPathParams,
    responses: {
      200: GetTutorInfoResponse,
    },
  },
  getTutorCards: {
    method: 'GET',
    path: '/card',
    responses: {
      200: GetTutorCardsResponse,
    },
  },
  getStudentGraph: {
    method: 'GET',
    path: '/student-graph',
    query: GetStudentGraphQuery,
    responses: {
      200: GetStudentGraphResponse,
    },
  },
  getUpcomingSessions: {
    method: 'GET',
    path: '/upcoming-sessions',
    responses: {
      200: GetUpcomingSessionsResponse,
    },
  },
})
