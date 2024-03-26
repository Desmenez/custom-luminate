import { z } from 'zod'

import { contract } from '../../contracts'

export * from './dto'

export const webhookContract = contract.router({
  omise: {
    method: 'POST',
    path: '/omise',
    body: z.unknown(),
    responses: {
      200: null,
    },
  },
})
