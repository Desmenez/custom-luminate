import { useMemo } from 'react'

import { CourseDetailAccordion } from '@app/modules/course-detail/components/course-detail-accordion'
import { faCalendarDays, faSignalStream } from '@fortawesome/pro-regular-svg-icons'
import { faLock } from '@fortawesome/pro-solid-svg-icons'

import { LiveCourseType } from '@luminate/database'
import { FontAwesomeIcon } from '@luminate/ui'

import { LiveButtonState, TimetableSubsectionProps } from '../types'
import { formatSessionDuration } from '../utils/format-session-duration'
import { getLiveData } from '../utils/get-live-data'
import { LiveScheduleAction, TapeScheduleAction } from './action'
import { Badge } from './badge'
import { LessonDescription } from './lesson-description'
import { ResourceButtons } from './resource-buttons'

export const TimetableSubsection = (props: TimetableSubsectionProps) => {
  const lessonIdToOpenAccordion = useMemo(() => {
    switch (props.type) {
      case LiveCourseType.FUSION:
      case LiveCourseType.LIVE: {
        for (const item of props.items) {
          const liveData = getLiveData(item.startTime, item.endTime)
          // If the lesson is upcoming, open it
          if (
            liveData.buttonState === LiveButtonState.NOT_STARTED ||
            liveData.buttonState === LiveButtonState.STARTING
          ) {
            return item.id
          }
        }
        // If there is a recent live session, open it
        if (props.recentLiveSessionId) return props.recentLiveSessionId
        // Otherwise, don't open any accordion
        return null
      }
      case LiveCourseType.TAPE: {
        // If there is a recent live session, open it
        if (props.recentLiveSessionId) return props.recentLiveSessionId
        // Otherwise, don't open any accordion
        return null
      }
    }
  }, [props])

  return (
    <div className="flex items-center gap-y-4 flex-col">
      {props.items.map((item, index) => {
        const shouldLockPlayback = (() => {
          if (!(props.type === LiveCourseType.LIVE || props.type === LiveCourseType.FUSION))
            return false

          const liveData = getLiveData(props.items[index].startTime, props.items[index].endTime)

          // If the lesson is currently be playback record, check if it requires subscription
          // If yes, check if the user is subscribed, if not, lock the playback
          // otherwise, check if CMS enable playback
          if (liveData?.buttonState === LiveButtonState.ENDED) {
            if (props.lock.recordingRequiresSubscription && !props.isSubscribed) {
              return true
            }
          }

          return !props.lock.enableRecordingPlayback
        })()

        const shouldLockExercise = (() => {
          if (props.lock.exerciseRequiresSubscription && !props.isSubscribed) {
            return true
          }
          return false
        })()

        const badge = (() => {
          if (props.type === LiveCourseType.LIVE || props.type === LiveCourseType.FUSION) {
            const liveData = getLiveData(props.items[index].startTime, props.items[index].endTime)
            if (liveData?.buttonState === LiveButtonState.STARTING) {
              return <Badge color="red" label="LIVE NOW" icon={faSignalStream} />
            }
            if (liveData?.buttonState === LiveButtonState.ENDED) {
              if (props.lock.recordingRequiresSubscription && shouldLockPlayback) {
                return <Badge color="yellow" label="สำหรับสมาชิกเท่านั้น" icon={faLock} />
              }
              return null
            }
            return (
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon icon={faCalendarDays} className="w-4 h-4" />
                <span className="text-sm md:text-base">
                  {formatSessionDuration(props.items[index].startTime, props.items[index].endTime)}
                </span>
              </div>
            )
          }
        })()

        return (
          <CourseDetailAccordion
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            right={badge}
            className="w-full"
            openByDefault={lessonIdToOpenAccordion === item.id}
          >
            <div className="flex flex-col gap-4 p-4">
              {/* First row - include lession name and free trial badge if have */}
              <LessonDescription description={item.name} isFreeTrial={item.isTrialSession} />

              {/* Second row - include sheet and homework button and action area */}
              <div className="flex items-center justify-between gap-4 flex-col-reverse md:flex-row">
                {/* Left-hand side */}
                <ResourceButtons
                  disabled={props.disabled}
                  disabledExerciseLink={shouldLockExercise}
                  sheetLink={item.sheetUrl}
                  exerciseLink={item.exerciseUrl}
                />

                {/* Right-hand side */}
                {(props.type === LiveCourseType.FUSION || props.type === LiveCourseType.LIVE) && (
                  <LiveScheduleAction
                    id={props.items[index].id}
                    disabled={props.disabled || shouldLockPlayback}
                    startTime={props.items[index].startTime}
                    endTime={props.items[index].endTime}
                    timestampSeconds={item.timestampSeconds}
                    videoLengthSeconds={item.videoLengthSeconds}
                  />
                )}
                {props.type === LiveCourseType.TAPE && (
                  <TapeScheduleAction
                    timestampSeconds={props.items[index].timestampSeconds}
                    videoLengthSeconds={props.items[index].videoLengthSeconds}
                    id={props.items[index].id}
                    disabled={props.disabled}
                  />
                )}
              </div>
            </div>
          </CourseDetailAccordion>
        )
      })}
    </div>
  )
}
