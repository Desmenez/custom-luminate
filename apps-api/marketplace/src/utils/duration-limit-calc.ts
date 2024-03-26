import { DurationLimit } from '@app/modules/live-session/types/limit.type'

import { LiveCoursePlaybackLimitType } from '@luminate/database'

export function durationLimitCalc(videoDuration: number, limit: DurationLimit): number {
  if (!limit.durationLimit) return videoDuration
  switch (limit.limitType) {
    case LiveCoursePlaybackLimitType.MINUTE:
      return videoDuration + limit.durationLimit
    case LiveCoursePlaybackLimitType.PERCENT:
      return (videoDuration * (100 + limit.durationLimit)) / 100
    default:
      return videoDuration
  }
}
