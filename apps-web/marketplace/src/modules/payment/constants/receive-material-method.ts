import { ValuesType } from '@luminate/types-utility'

export const ReceiveMaterialMethodType = {
  SHIPPING: 'SHIPPING',
  PICKUP: 'PICKUP',
  NONE: 'NONE',
} as const
export type ReceiveMaterialMethodType = ValuesType<typeof ReceiveMaterialMethodType>
