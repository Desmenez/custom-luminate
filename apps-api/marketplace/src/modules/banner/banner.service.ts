import { container } from '@app/container'

import { PrismaClient } from '@luminate/database'
import { GetBannerQueryParams } from '@luminate/rest'

import { BannerAdapter } from './banner.adapter'

export class BannerService {
  constructor(
    private bannerAdapter: BannerAdapter,
    private prisma: PrismaClient
  ) {}

  async getBanners(query: GetBannerQueryParams) {
    return await this.prisma.banner.findMany(this.bannerAdapter.bannerFindManyArgs(query))
  }
}

container.registerSingleton<BannerService, BannerService>()
