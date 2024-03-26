import { z } from 'zod'

import { validateEnv } from '@luminate/env'

import { EnvClientSchema } from './client'

export const EnvServerSchema = z
  .object({
    ENABLE_PLAYGROUND: z
      .string()
      .default('false')
      .transform((val) => val === 'true'),
  })
  .merge(EnvClientSchema)

export const envServer = validateEnv(EnvServerSchema, process.env)
