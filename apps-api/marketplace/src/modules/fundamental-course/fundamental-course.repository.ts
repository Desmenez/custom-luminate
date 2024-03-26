import { container } from '@app/container'
import { undefinedToNulls } from '@app/utils/undefinedToNulls'

import { FundamentalCourse } from '@luminate/database'
import { BadInputError } from '@luminate/error'
import { LuminateGatewayServiceClient } from '@luminate/grpc'

export class FundamentalCourseRepository {
  constructor(private luminateGatewayServiceClient: LuminateGatewayServiceClient) {}
  async extendFields(fundamentalCourses: FundamentalCourse[]) {
    if (!fundamentalCourses.length) {
      return []
    }
    const ids = fundamentalCourses.map((fundamentalCourse) => fundamentalCourse.id)
    const response = await this.luminateGatewayServiceClient.getBasePlans({
      basePlanIds: ids,
    })
    return response.basePlans.map((optionalBasePlan, index) => {
      if (!optionalBasePlan?.basePlan) {
        throw new BadInputError('marketplace', 'INVALID_FUNDAMENTAL_COURSE')
      }
      const basePlan = optionalBasePlan.basePlan
      return undefinedToNulls({
        ...fundamentalCourses[index],
        ...basePlan,
      })
    })
  }
}

container.registerSingleton<FundamentalCourseRepository>()
