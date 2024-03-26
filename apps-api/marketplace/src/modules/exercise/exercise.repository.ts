import { container } from '@app/container'
import { undefinedToNulls } from '@app/utils/undefinedToNulls'

import { LuminateGatewayServiceClient } from '@luminate/grpc'

type Exercise = {
  id: string
  name: string
  subject: {
    code: string
  } | null
}

export class ExerciseRepository {
  constructor(private luminateGatewayServiceClient: LuminateGatewayServiceClient) {}
  async findByIds(ids: string[]): Promise<Exercise[]> {
    const response = await this.luminateGatewayServiceClient.getBasePlans({ basePlanIds: ids })
    if (!response.basePlans) {
      return []
    }
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

container.registerSingleton<ExerciseRepository>()
