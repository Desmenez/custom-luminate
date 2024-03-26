import React from 'react'

import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Toaster } from '@luminate/ui'

import { ibmPlexSans, ibmPlexSansThai } from '../src/fonts'
import '../src/pages/style.css'
import { LoadingProvider } from '../src/utils/loading'
import './luminate-ui-style.css'
import { viewports } from './viewport'

const queryClient = new QueryClient()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    viewport: {
      viewports: viewports,
      defaultViewport: 'someDefault',
    },
  },
  decorators: [
    (Story) => (
      <>
        <style>{`
          html {
            font-family: ${ibmPlexSans.style.fontFamily}, ${ibmPlexSansThai.style.fontFamily};
          }
        `}</style>
        <Story />
      </>
    ),
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
    (Story) => (
      <LoadingProvider>
        <Story />
      </LoadingProvider>
    ),
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
}

export default preview
