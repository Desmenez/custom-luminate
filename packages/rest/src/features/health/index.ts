import { contract } from '../../contracts'
import { HealthCheck } from './dto'

export const healthContract = contract.router({
  health: {
    method: 'GET',
    path: '',
    responses: {
      200: HealthCheck,
    },
    summary: 'Health check',
    description:
      'This is a health check endpoint. It returns a message to indicate that the API is up and running.',
  },
})
