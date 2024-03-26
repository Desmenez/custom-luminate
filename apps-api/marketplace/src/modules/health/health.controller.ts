import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

export class HealthCheckController extends Controller {
  constructor() {
    super()

    this.register(mainContract.health, {
      health: async () => {
        return {
          status: 200,
          body: {
            message: 'API is up and running',
          },
        }
      },
    })
  }
}

container.registerTransient<HealthCheckController, HealthCheckController>()
