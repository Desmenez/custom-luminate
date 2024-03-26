import { z } from 'zod'

export const LoginTutorWithPasswordRequest = z.object({
  username: z.string(),
  password: z.string(),
})

export const loginTutorWithPasswordResponse = z.object({
  token: z.string(),
  refreshToken: z.string(),
})
