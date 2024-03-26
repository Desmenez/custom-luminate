import { z } from 'zod'

export const PaginationArgs = z.object({
  take: z.coerce.number().default(30),
  skip: z.coerce.number().default(0),
})
