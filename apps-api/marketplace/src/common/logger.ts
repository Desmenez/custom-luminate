import { container } from '@app/container'
import { FastifyBaseLogger } from 'fastify'
import pino from 'pino'

import { environments } from './env'

const isDevelopment = environments.NODE_ENV === 'development'

export type ApplicationLogger = FastifyBaseLogger

export const logger: ApplicationLogger = pino({
  level: environments.LOG_LEVEL,
  enabled: environments.LOGGER_ENABLED,
  transport: isDevelopment
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      }
    : undefined,
})

container.registerSingleton<ApplicationLogger>(() => logger)
