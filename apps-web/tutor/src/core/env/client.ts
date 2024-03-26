'use client'

import { z } from 'zod'

import { validateEnv } from '@luminate/env'

export const EnvClientSchema = z.object({
  // Common
  NEXT_PUBLIC_WEB_URL: z.string(),
  NEXT_PUBLIC_API_BASE_URL: z.string().default('http://127.0.0.1:4000'),
  NEXT_PUBLIC_LOGIN_PAGE_PATH: z.string().default('/sign-in'),
})

export const envClient = validateEnv(EnvClientSchema, {
  NEXT_PUBLIC_WEB_URL: getWebUrl(),
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_LOGIN_PAGE_PATH: process.env.NEXT_PUBLIC_LOGIN_PAGE_PATH,
})

function getWebUrl() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
  }
  if (process.env.NEXT_PUBLIC_WEB_URL) {
    return process.env.NEXT_PUBLIC_WEB_URL
  }
  return null
}
