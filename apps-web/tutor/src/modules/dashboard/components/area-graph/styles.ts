import { CSSProperties } from 'react'

import { defaultStyles } from '@visx/tooltip'

export const background = '#171717' // gray-900
export const background2 = '#171717' // gray-900
export const curveColor = '#FBBF24' // yellow-400
export const guideLineColor = '#2563EB' // blue-600

export const gridStorkeColor = '#404040' // gray-700

export const tooltipStyles: CSSProperties = {
  ...defaultStyles,
  background,
  border: '1px solid white',
  color: 'white',
}

export const tickLabelProps = {
  fill: 'white',
  color: 'white',
  textAnchor: 'middle',
  fontSize: 12,
} as const
