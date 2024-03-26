import { z } from 'zod'

import { contract } from '../../contracts'
import {
  AddCreditCardInput,
  BookingCreateInput,
  ChargeCreateInput,
  CheckDiscountCodeResponse,
  GetCreditCardsResponse,
  PaymentBooking,
  PaymentCharge,
  PaymentPackageInfo,
} from './dto'

export * from './dto'

export const paymentContract = contract.router({
  getPackageInfo: {
    method: 'GET',
    path: '/package-info',
    query: z.object({
      liveCourseId: z.string(),
    }),
    responses: {
      200: PaymentPackageInfo,
    },
  },
  createBooking: {
    method: 'POST',
    path: '/booking',
    body: BookingCreateInput,
    responses: {
      200: z.object({
        bookingId: z.string(),
      }),
    },
  },
  getBooking: {
    method: 'GET',
    path: '/booking/:bookingId',
    responses: {
      200: PaymentBooking.nullable(),
    },
  },
  checkDiscountCode: {
    method: 'POST',
    path: '/booking/:bookingId/check-discount-code',
    body: z.object({
      code: z.string(),
    }),
    responses: {
      200: CheckDiscountCodeResponse,
    },
  },
  createCharge: {
    method: 'POST',
    path: '/charge',
    body: ChargeCreateInput,
    responses: {
      200: PaymentCharge,
    },
  },
  getCharge: {
    method: 'GET',
    path: '/charge/:chargeId',
    responses: {
      200: PaymentCharge,
    },
  },
  getCreditCards: {
    method: 'GET',
    path: '/credit-cards',
    responses: {
      200: GetCreditCardsResponse,
    },
  },
  addCreditCard: {
    method: 'POST',
    path: '/credit-cards',
    body: AddCreditCardInput,
    responses: {
      200: GetCreditCardsResponse,
    },
  },
})
