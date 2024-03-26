import { z } from 'zod'

import { PaymentMethod } from '@luminate/database'
import { ValuesType } from '@luminate/types-utility'

export const MobileBankingType = {
  SCB: 'scb',
  KBANK: 'kbank',
  BAY: 'bay',
} as const
export type MobileBankingType = ValuesType<typeof MobileBankingType>

// Truemoney
export const TruemoneyMethodSchema = z.object({
  method: z.literal(PaymentMethod.TRUEMONEY),
  phoneNumber: z
    .string()
    .length(12)
    .transform((val) => val.replace(/\D/g, '')),
})
export type TruemoneyMethodSchema = z.infer<typeof TruemoneyMethodSchema>

// Promptpay
export const PromptpayMethodSchema = z.object({
  method: z.literal(PaymentMethod.PROMPTPAY),
})

// Credit Card
export const CreditCardMethodAddCardSchema = z
  .object({
    cardNumber: z
      .string()
      .nonempty()
      .transform((val) => val.replace(/\D/g, '')),
    cardHolderName: z.string().nonempty(),
    expirationDate: z.string().nonempty(),
    cvv: z.string().nonempty(),
    isDefault: z.boolean(),
  })
  .transform((val) => {
    const expirationMonth = parseInt(val.expirationDate.slice(0, 2))
    const expirationYear = parseInt('20' + val.expirationDate.slice(3, 5))
    return {
      ...val,
      expirationMonth,
      expirationYear,
    }
  })
export type CreditCardMethodAddCardSchema = z.infer<typeof CreditCardMethodAddCardSchema>

export const CreditCardMethodSchema = z.object({
  method: z.literal(PaymentMethod.CREDIT_CARD),
  cardId: z.string(),
})
export type CreditCardMethodSchema = z.infer<typeof CreditCardMethodSchema>

export const MobileBankingMethodSchema = z.object({
  method: z.literal(PaymentMethod.MOBILE_BANKING),
  selectedBank: z.nativeEnum(MobileBankingType),
})
export type MobileBankingMethodSchema = z.infer<typeof MobileBankingMethodSchema>

// Union
export const PaymentMethodSchema = z.discriminatedUnion('method', [
  TruemoneyMethodSchema,
  CreditCardMethodSchema,
  PromptpayMethodSchema,
  MobileBankingMethodSchema,
])
export type PaymentMethodSchema = z.infer<typeof PaymentMethodSchema>
