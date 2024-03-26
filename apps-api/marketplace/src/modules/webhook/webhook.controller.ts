import { Controller } from '@app/common/controller'
import { container } from '@app/container'
import Omise from 'omise'

import { mainContract } from '@luminate/rest'

import { OmiseService } from '../omise'

export class WebhookController extends Controller {
  constructor(private readonly omiseService: OmiseService) {
    super()

    this.register(mainContract.webhook, {
      omise: async ({ body }) => {
        await this.omiseService.handleWebhookEvent(body as Omise.Events.IEvent)
        return {
          status: 200,
          body: null,
        }
      },
    })
  }
}

container.registerSingleton<WebhookController, WebhookController>()
