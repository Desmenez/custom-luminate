import { container } from '@app/container'
import { undefinedToNulls } from '@app/utils/undefinedToNulls'

import { LuminateGatewayServiceClient } from '@luminate/grpc'
import { LiveCourseResponse } from '@luminate/rest'

export interface IExamTutorialRepository {
  findByIds: (ids: string[]) => Promise<LiveCourseResponse['examTutorials']>
}

class ExamTutorialRepository implements IExamTutorialRepository {
  constructor(private luminateGatewayServiceClient: LuminateGatewayServiceClient) {}
  async findByIds(ids: string[]) {
    if (!ids.length) {
      return []
    }
    const response = await this.luminateGatewayServiceClient.getBasePlans({ basePlanIds: ids })
    return response.basePlans.map((optionalBasePlan) => {
      if (!optionalBasePlan?.basePlan) {
        throw new Error('Invalid base plan')
      }
      return undefinedToNulls({
        ...optionalBasePlan.basePlan,
      })
    })
  }
}

container.registerTransient<IExamTutorialRepository, ExamTutorialRepository>()
