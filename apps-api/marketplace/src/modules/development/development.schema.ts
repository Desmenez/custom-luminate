import { z } from 'zod'

export const DevelopmentAuthQuery = z.object({
  response_type: z.literal('code'),
  client_id: z.literal(''),
  redirect_uri: z.string(),
  state: z.string(),
})
