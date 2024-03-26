import { LiveCoursePlaybackLimitType } from '@luminate/database'

export interface DurationLimit {
  limitType: LiveCoursePlaybackLimitType
  durationLimit?: number
}
