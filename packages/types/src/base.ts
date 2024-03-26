import { ValuesType } from '@luminate/types-utility'

export type BaseSize = 'lg' | 'md' | 'sm' | 'xl' | 'xs'

export const BasePlatform = {
  DESKTOP: 'desktop',
  LAPTOP: 'laptop',
  MOBILE: 'mobile',
  TABLET: 'tablet',
} as const
export type BasePlatform = ValuesType<typeof BasePlatform>
