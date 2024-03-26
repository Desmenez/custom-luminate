import { useMediaQuery as useOriginalMediaQuery } from 'usehooks-ts'

import { screens } from '@luminate/tailwindcss'

const QueryType = {
  'xs-up': `(min-width: ${screens.data.xs})`,
  'sm-up': `(min-width: ${screens.data.sm})`,
  'md-up': `(min-width: ${screens.data.md})`,
  'lg-up': `(min-width: ${screens.data.lg})`,
  'xl-up': `(min-width: ${screens.data.xl})`,
  'xs-down': `(max-width: ${screens.data.xs})`,
  'sm-down': `(max-width: ${screens.data.sm})`,
  'md-down': `(max-width: ${screens.data.md})`,
  'lg-down': `(max-width: ${screens.data.lg})`,
  'xl-down': `(max-width: ${screens.data.xl})`,
} as const

type QueryType = keyof typeof QueryType

export function useMediaQuery(query: QueryType) {
  return useOriginalMediaQuery(QueryType[query])
}
