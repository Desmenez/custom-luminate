import { z } from 'zod'

export const MeResponse = z
  .object({
    id: z.string(),
    identity: z.string(),
    profileUrl: z.string().nullable(),
  })
  .nullable()
