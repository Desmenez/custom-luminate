import type { Meta, StoryObj } from '@storybook/react'

import { CreateQuizSection } from '.'

const meta = {
  title: 'Quiz Management/Create Quiz Box',
  component: CreateQuizSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CreateQuizSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    liveSessionId: 'liveSession1',
    numberOfQuestions: 20,
  },
}
