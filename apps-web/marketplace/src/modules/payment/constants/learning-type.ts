import { ValuesType } from '@luminate/types-utility'

export const LearningType = {
  ONLINE: 'ONLINE',
  ONSITE: 'ONSITE',
} as const
export type LearningType = ValuesType<keyof typeof LearningType>
