import { z } from 'zod'

import { LiveSessionModel } from '@luminate/database'

export const LiveSessionCreateInput = LiveSessionModel.pick({
  name: true,
  description: true,
  startTime: true,
  endTime: true,
  liveCourseId: true,
  isTrialSession: true,
})
export type LiveSessionCreateInput = z.infer<typeof LiveSessionCreateInput>

export const LiveSessionWhere = z.object({
  id: z.string(),
})

export const LiveSessionUpdateInput = LiveSessionModel.pick({
  name: true,
  description: true,
  startTime: true,
  endTime: true,
}).partial()
export type LiveSessionUpdateInput = z.infer<typeof LiveSessionUpdateInput>

export const UpdateRecentLiveSessionTimestampQueryParams = z.object({
  liveSessionId: z.string(),
  seconds: z.number(),
  videoLengthSeconds: z.number(),
})
