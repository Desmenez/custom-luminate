import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { PaymentService } from './payment.service'

export class PaymentController extends Controller {
  constructor(private readonly paymentService: PaymentService) {
    super()

    this.register(mainContract.payment, {
      getPackageInfo: async ({ query, request }) => {
        const userContext = await request.auth.requireUserContext()
        const info = await this.paymentService.getPackageInfo(userContext.id, query.liveCourseId)
        return {
          status: 200,
          body: info,
        }
      },
      createBooking: async ({ body, request }) => {
        const userContext = await request.auth.requireUserContext()
        const booking = await this.paymentService.createBooking(userContext.id, body)
        return {
          status: 200,
          body: {
            bookingId: booking.id,
          },
        }
      },
      getBooking: async ({ params: { bookingId }, request }) => {
        const userContext = await request.auth.requireUserContext()
        const booking = await this.paymentService.getBooking(userContext.id, bookingId)
        return {
          status: 200,
          body: booking,
        }
      },
      checkDiscountCode: async ({ params: { bookingId }, body, request }) => {
        const userContext = await request.auth.requireUserContext()
        const discountCode = await this.paymentService.checkDiscountCode(
          userContext.id,
          bookingId,
          body.code
        )
        return {
          status: 200,
          body: discountCode,
        }
      },
      createCharge: async ({ body, request }) => {
        const userContext = await request.auth.requireUserContext()
        const { id: chargeId } = await this.paymentService.createCharge(userContext.id, body)
        const charge = await this.paymentService.getCharge(userContext.id, chargeId)
        return {
          status: 200,
          body: charge,
        }
      },
      getCharge: async ({ params: { chargeId }, request }) => {
        const userContext = await request.auth.requireUserContext()
        const charge = await this.paymentService.getCharge(userContext.id, chargeId)
        return {
          status: 200,
          body: charge,
        }
      },
      getCreditCards: async ({ request }) => {
        const userContext = await request.auth.requireUserContext()
        const cards = await this.paymentService.getCreditCards(userContext.id)
        return {
          status: 200,
          body: cards,
        }
      },
      addCreditCard: async ({ body, request }) => {
        const userContext = await request.auth.requireUserContext()
        const cards = await this.paymentService.addCreditCard(userContext.id, body)
        return {
          status: 200,
          body: cards,
        }
      },
    })
  }
}

container.registerSingleton<PaymentController, PaymentController>()
