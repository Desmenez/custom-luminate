import type { Meta, StoryObj } from '@storybook/react'

import { UpcomingSessionSection } from '.'

const meta = {
  title: 'Course Detail/Upcoming Session Section',
  component: UpcomingSessionSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UpcomingSessionSection>

export default meta
type Story = StoryObj<typeof meta>

const session1 = {
  courseId: 'liveCourse1',
  id: 'liveSession1',
  name: 'ครั้งที่ 1 คอร์สสดพิชิต เคมี สอวน.',
  startTime: new Date().toISOString(),
  endTime: new Date().toISOString(),
}

const session2 = {
  courseId: 'liveCourse2',
  id: 'liveSession1',
  name: 'ครั้งที่ 2 คอร์สสดพิชิต เคมี สอวน.',
  startTime: new Date().toISOString(),
  endTime: new Date().toISOString(),
}

export const OneUpcoming: Story = {
  args: {
    upcomingSessions: [session1],
  },
}

export const TwoUpcoming: Story = {
  args: {
    upcomingSessions: [session1, session2],
  },
}

export const NoUpcoming: Story = {
  args: {
    upcomingSessions: [],
  },
}
