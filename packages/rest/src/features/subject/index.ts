import { contract } from '../../contracts'
import { GetSubjectsResponse } from './dto'

export const subjectContract = contract.router({
  getSubjects: {
    method: 'GET',
    path: '',
    responses: {
      200: GetSubjectsResponse,
    },
  },
})
