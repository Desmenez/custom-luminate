import { container } from '@app/container'

import { Prisma } from '@luminate/database'
import { LiveSessionFindManyArgs } from '@luminate/rest'

export class LiveSessionAdapter {
  findManyArgs(args: LiveSessionFindManyArgs) {
    return {
      ...args,
      where: args.where
        ? {
            name: args.where.name ? { contains: args.where.name, mode: 'insensitive' } : undefined,
          }
        : undefined,
      orderBy: args.orderBy
        ? {
            startTime: args.orderBy.startTime ? args.orderBy.startTime : undefined,
            name: args.orderBy.name ? args.orderBy.name : undefined,
            liveCourse:
              args.orderBy.liveCourseName || args.orderBy.tutorName
                ? {
                    name: args.orderBy.liveCourseName ? args.orderBy.liveCourseName : undefined,
                  }
                : undefined,
          }
        : undefined,
    } satisfies Prisma.LiveSessionFindManyArgs
  }
}

container.registerSingleton<LiveSessionAdapter, LiveSessionAdapter>()
