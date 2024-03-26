import { ValuesType } from '@luminate/types-utility'

export const CheckoutModeType = {
  SUMMARY: 'summary',
  CHECKOUT: 'checkout',
  PROMPTPAY: 'promptpay',
} as const
export type CheckoutModeType = ValuesType<typeof CheckoutModeType>
