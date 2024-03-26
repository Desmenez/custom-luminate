import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { BannerService } from './banner.service'

export class BannerController extends Controller {
  constructor(private readonly bannerService: BannerService) {
    super()

    this.register(mainContract.banner, {
      getBanners: async ({ query }) => {
        const banners = await this.bannerService.getBanners(query)
        return {
          status: 200,
          body: banners,
        }
      },
    })
  }
}

container.registerSingleton<BannerController, BannerController>()
