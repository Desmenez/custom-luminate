import { z } from 'zod'

import { contract } from '../../contracts'
import { MeResponse, loginTutorWithPasswordResponse } from './dto'

export const authContract = contract.router({
  me: {
    method: 'GET',
    path: '/me',
    responses: {
      200: MeResponse,
    },
    summary: 'Get current user',
  },
  loginAsStudent: {
    method: 'POST',
    path: '/login-as-student',
    body: z.object({
      userId: z.string(),
    }),
    responses: {
      200: contract.type<{ token: string; success: true }>(),
    },
  },
  loginAsTutor: {
    method: 'POST',
    path: '/login-as-tutor',
    body: z.object({
      userId: z.string(),
    }),
    responses: {
      200: contract.type<{ token: string; success: true }>(),
    },
  },
  loginTutorWithPassword: {
    method: 'POST',
    path: '/login-tutor-with-password',
    body: z.object({
      username: z.string(),
      password: z.string(),
    }),
    responses: {
      200: loginTutorWithPasswordResponse,
    },
  },
})
