import { isPast, subMinutes } from 'date-fns'

import { MyLiveCourseForPreview } from '@luminate/rest'

const EARLY_ENTER_MINUTES = 15

export function isLiving(courseData: MyLiveCourseForPreview) {
  return (
    !!courseData.upcomingSession &&
    isPast(subMinutes(new Date(courseData.upcomingSession.startTime), EARLY_ENTER_MINUTES))
  )
}

export function canContinue(courseData: MyLiveCourseForPreview) {
  return !!courseData.recentLiveSessionId
}
