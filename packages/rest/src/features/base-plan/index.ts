import { contract } from '../../contracts'
import { GetBasePlansQueryParams, GetBasePlansResponse } from './dto'

export * from './dto'

export const basePlanContract = contract.router({
  getBasePlans: {
    method: 'GET',
    path: '',
    query: GetBasePlansQueryParams,
    responses: {
      200: GetBasePlansResponse,
    },
  },
})
