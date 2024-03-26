import 'dotenv/config'

import { ZodError, z } from 'zod'

import { validateEnv } from '@luminate/env'

function zodJsonString(name: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return z.preprocess((val: any) => {
    try {
      JSON.stringify(JSON.parse(val))
      return val
    } catch (err: unknown) {
      throw new ZodError([
        {
          code: 'invalid_type',
          expected: 'string',
          received: typeof val,
          path: [name],
          message: 'Invalid JSON string',
        },
      ])
    }
  }, z.string())
}

const EnvSchema = z.object({
  // Common
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(4000),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  LOGGER_ENABLED: z
    .enum(['true', 'false'])
    .default('true')
    .transform((val) => val === 'true'),
  SWAGGER_ENABLED: z
    .enum(['true', 'false'])
    .default('true')
    .transform((val) => val === 'true'),

  // Database
  DATABASE_HOST: z.string().default('localhost'),
  DATABASE_PORT: z.coerce.number().default(5432),
  DATABASE_USERNAME: z.string().default('user'),
  DATABASE_PASSWORD: z.string().default('password'),
  DATABASE_NAME: z.string().default('luminate'),

  // Redis
  REDIS_HOST: z.string().default('localhost'),
  REDIS_PORT: z.coerce.number().default(6379),

  // Cloudflare
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_API_TOKEN: z.string(),
  CLOUDFLARE_STREAM_ID: z.string(),
  CLOUDFLARE_STREAM_PEM: z.string(),
  CLOUDFLARE_STREAM_JWK: z.string(),
  CLOUDFLARE_CUSTOMER_URL: z.string(),

  // Google Cloud Storage
  GCS_BUCKET_PRIVATE_NAME: z.string(),
  GCS_BUCKET_PRIVATE_CREDENTIALS: zodJsonString('GCS_BUCKET_PRIVATE_CREDENTIALS'),
  GCS_BUCKET_PUBLIC_NAME: z.string(),
  GCS_BUCKET_PUBLIC_CREDENTIALS: zodJsonString('GCS_BUCKET_PUBLIC_CREDENTIALS'),
  CDN_BASE_URL: z.string(),

  // JWT Secrets
  JWT_SECRET: z.string().default('secret'),

  // Everyday
  EVERYDAY_HOST: z.string(),
  EVERYDAY_GRPC_PORT: z.coerce.number().default(50051),

  // Omise
  OMISE_PUBLIC_KEY: z.string(),
  OMISE_SECRET_KEY: z.string(),

  // Development
  DEVELOPMENT_ENABLE_AUTH_IMPERSONATION: z
    .enum(['true', 'false'])
    .default('false')
    .transform((val) => val === 'true'),
})

export const environments = validateEnv(EnvSchema, process.env)
