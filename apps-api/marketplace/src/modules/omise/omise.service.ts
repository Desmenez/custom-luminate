import { environments } from '@app/common/env'
import { container } from '@app/container'
import Omise from 'omise'

import { PaymentService } from '../payment'

const omiseMetadataCreatedBy = 'LUMINATE'

export class OmiseService {
  private omiseClient = Omise({
    publicKey: environments.OMISE_PUBLIC_KEY,
    secretKey: environments.OMISE_SECRET_KEY,
  })

  constructor(private readonly paymentService: PaymentService) {}

  async handleWebhookEvent(event: Omise.Events.IEvent) {
    if (event.object !== 'event') {
      return
    }
    const data: Omise.IBaseResponse = event.data
    if (data.object === 'charge') {
      const chargePayload = data as Omise.Charges.ICharge
      if (chargePayload.metadata?.createdBy !== omiseMetadataCreatedBy) {
        return
      }
      const charge = await this.retrieveCharge(chargePayload.id)
      await this.paymentService.handleChargeStatusChanged(charge)
    }
  }

  async createCharge(req: Omise.Charges.IRequest) {
    const charge = await this.omiseClient.charges.create(req)
    if (charge.failure_code) {
      throw new Error(`Omise Error: ${charge.failure_code}: ${charge.failure_message}}`)
    }
    return charge
  }

  async retrieveCharge(chargeId: string) {
    return await this.omiseClient.charges.retrieve(chargeId)
  }

  async retrieveSource(sourceId: string) {
    return await this.omiseClient.sources.retrieve(sourceId)
  }

  async retrieveCustomer(customerId: string) {
    return await this.omiseClient.customers.retrieve(customerId)
  }

  async addCard(customerId: string, cardId: string) {
    return await this.omiseClient.customers.update(customerId, {
      card: cardId,
    })
  }

  async updateDefaultCard(customerId: string, cardId: string) {
    return await this.omiseClient.customers.update(customerId, {
      default_card: cardId,
    } as Omise.Customers.IRequest)
  }

  async retrieveToken(tokenId: string) {
    return await this.omiseClient.tokens.retrieve(tokenId)
  }
}

container.registerSingleton<OmiseService, OmiseService>()
