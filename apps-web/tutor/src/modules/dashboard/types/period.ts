import { type ValuesType } from '@luminate/types-utility'

export const PeriodType = {
  DAY: '1',
  WEEK: '7',
  MONTH: '30',
} as const
export type PeriodType = ValuesType<typeof PeriodType>
