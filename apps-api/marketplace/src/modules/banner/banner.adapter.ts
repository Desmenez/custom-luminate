import { container } from '@app/container'

import { Prisma } from '@luminate/database'
import { GetBannerQueryParams } from '@luminate/rest'

export class BannerAdapter {
  bannerFindManyArgs(args: GetBannerQueryParams): Prisma.BannerFindManyArgs {
    return {
      ...args,
      where: args?.where
        ? {
            name: args?.where.name
              ? {
                  contains: args.where.name,
                  mode: 'insensitive',
                }
              : undefined,
          }
        : undefined,
      orderBy: {
        createdAt: args?.orderBy?.createdAt ? args.orderBy.createdAt : undefined,
        order: args?.orderBy?.order ? args.orderBy.order : undefined,
        isActive: args?.orderBy?.isActive,
        updatedAt: args?.orderBy?.updatedAt ? args.orderBy.updatedAt : undefined,
      },
    }
  }
}

container.registerSingleton<BannerAdapter>()
