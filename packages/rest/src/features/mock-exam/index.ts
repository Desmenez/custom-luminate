import { contract } from '../../contracts'
import { GetMockExamsResponse } from './dto'

export const mockExamContract = contract.router({
  getMockExams: {
    method: 'GET',
    path: '',
    responses: {
      200: GetMockExamsResponse,
    },
  },
})
