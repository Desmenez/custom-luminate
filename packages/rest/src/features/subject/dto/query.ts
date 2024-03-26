import { z } from 'zod'

export const GetSubjectsResponse = z.array(
  z
    .object({
      id: z.string(),
      name: z.string(),
      code: z.string(),
    })
    .nullable()
)
