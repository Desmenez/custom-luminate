import { z } from 'zod'

import { LearningType, PaymentMethod, ReceiveMethod } from '@luminate/database'

export const BookingCreateInput = z.object({
  liveCourseId: z.string(),
  learningType: z.nativeEnum(LearningType),
  addonId: z.string().nullable(),
  receiveMethod: z.nativeEnum(ReceiveMethod).nullable(),
  shippingAddress: z
    .object({
      name: z.string(),
      telephone: z.string(),
      address: z.string(),
      province: z.string(),
      district: z.string(),
      subDistrict: z.string(),
      postalCode: z.string(),
    })
    .nullable(),
})
export type BookingCreateInput = z.infer<typeof BookingCreateInput>

const ChargeSource = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(PaymentMethod.CREDIT_CARD),
    cardId: z.string(),
  }),
  z.object({
    type: z.literal(PaymentMethod.PROMPTPAY),
    sourceId: z.string(),
  }),
  z.object({
    type: z.literal(PaymentMethod.TRUEMONEY),
    sourceId: z.string(),
    returnUrl: z.string(),
  }),
  z.object({
    type: z.literal(PaymentMethod.MOBILE_BANKING),
    sourceId: z.string(),
    returnUrl: z.string(),
  }),
])
export type ChargeSource = z.infer<typeof ChargeSource>

export const ChargeCreateInput = z.object({
  bookingId: z.string(),
  discountCode: z.string().nullable(),
  source: ChargeSource,
})
export type ChargeCreateInput = z.infer<typeof ChargeCreateInput>

export const AddCreditCardInput = z.object({
  cardToken: z.string(),
  useAsDefault: z.boolean(),
})
export type AddCardInput = z.infer<typeof AddCreditCardInput>

export const CheckDiscountCodeResponse = z
  .object({
    code: z.string(),
    discount: z.number(),
  })
  .nullable()
export type CheckDiscountCodeResponse = z.infer<typeof CheckDiscountCodeResponse>
