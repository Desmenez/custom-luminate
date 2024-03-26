import { contract } from '../../contracts'
import { GetStudentsQueryParams, GetStudentsResponse } from './dto'

export * from './dto'

export const studentContract = contract.router({
  getStudentsByLiveCourseId: {
    method: 'GET',
    path: '',
    query: GetStudentsQueryParams,
    responses: {
      200: GetStudentsResponse,
    },
  },
})
