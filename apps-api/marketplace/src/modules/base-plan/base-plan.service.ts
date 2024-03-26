import { container } from '@app/container'

import { GetBasePlansQueryParams, GetBasePlansResponse } from '@luminate/rest'

import { BasePlanRepository } from './base-plan.repository'

export class BasePlanService {
  constructor(private readonly basePlanRepository: BasePlanRepository) {}
  getBasePlans(args: GetBasePlansQueryParams): GetBasePlansResponse {
    return this.basePlanRepository.getBasePlans(args)
  }
}

container.registerSingleton<BasePlanService>()
