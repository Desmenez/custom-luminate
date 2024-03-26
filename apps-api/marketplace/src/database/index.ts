import { environments } from '@app/common/env'

import { PrismaClient } from '@luminate/database'

import { container } from '../container'

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `postgresql://${environments.DATABASE_USERNAME}:${environments.DATABASE_PASSWORD}@${environments.DATABASE_HOST}:${environments.DATABASE_PORT}/${environments.DATABASE_NAME}`,
    },
  },
})

container.registerSingleton<PrismaClient>(() => prisma)
