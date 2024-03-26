import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { screens } from '@luminate/tailwindcss'
import '@luminate/tailwindcss/src/'

type ViewportMap = typeof INITIAL_VIEWPORTS

export const viewports: ViewportMap = {}

for (const [key, value] of Object.entries(screens.data)) {
  viewports[key] = {
    name: `${key} - ${value}`,
    type: 'other',
    styles: {
      width: value,
      height: '100%',
    },
  }
}
