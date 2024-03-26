import { z } from 'zod'

export const HealthCheck = z.object({
  message: z.string(),
})
