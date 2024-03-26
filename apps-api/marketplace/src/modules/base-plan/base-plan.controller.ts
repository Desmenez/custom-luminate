import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { BasePlanService } from './base-plan.service'

export class BasePlanController extends Controller {
  constructor(private basePlanService: BasePlanService) {
    super()

    this.register(mainContract.basePlan, {
      getBasePlans: async ({ query }) => {
        const basePlans = await this.basePlanService.getBasePlans(query)
        return {
          status: 200,
          body: basePlans,
        }
      },
    })
  }
}

container.registerSingleton<BasePlanController>()
