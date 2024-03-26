'use client'

import { z } from 'zod'

import { validateEnv } from '@luminate/env'

export const EnvClientSchema = z.object({
  // Common
  NEXT_PUBLIC_WEB_URL: z.string(),
  NEXT_PUBLIC_API_BASE_URL: z.string().default('http://127.0.0.1:4000'),
  NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_URL: z
    .string()
    .default('https://customer-14ed3ux0xrgg4z1a.cloudflarestream.com'),
  NEXT_PUBLIC_OMISE_PUBLIC_KEY: z.string(),
  NEXT_PUBLIC_LOGIN_PAGE_PATH: z.string().default('/sign-in'),
  NEXT_PUBLIC_BASE_PATH: z.string(),
  NEXT_PUBLIC_ENVIRONMENT: z.enum(['development', 'staging', 'production']).default('development'),
})

export const envClient = validateEnv(EnvClientSchema, {
  NEXT_PUBLIC_WEB_URL: getWebUrl(),
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_URL: process.env.NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_URL,
  NEXT_PUBLIC_OMISE_PUBLIC_KEY: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
  NEXT_PUBLIC_LOGIN_PAGE_PATH: process.env.NEXT_PUBLIC_LOGIN_PAGE_PATH,
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
  NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
})

function getWebUrl() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}${process.env.NEXT_PUBLIC_BASE_PATH}`
  }
  if (process.env.NEXT_PUBLIC_WEB_URL) {
    return `${process.env.NEXT_PUBLIC_WEB_URL}${process.env.NEXT_PUBLIC_BASE_PATH}`
  }
  return null
}
