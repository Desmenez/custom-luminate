import { contract } from '../../contracts'
import { GetExamsQueryParams, GetExamsResponse } from './dto'

export * from './dto'

export const examContract = contract.router({
  getExams: {
    method: 'GET',
    path: '',
    query: GetExamsQueryParams,
    responses: {
      200: GetExamsResponse,
    },
  },
})
