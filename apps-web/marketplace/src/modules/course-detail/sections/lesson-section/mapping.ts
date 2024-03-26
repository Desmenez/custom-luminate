import { LiveCourseType } from '@luminate/database'
import { LiveCourseResponse, UserStatus } from '@luminate/rest'

import { LessonSectionProps, TimetableSubsectionProps } from './types'

type LessonData = Pick<
  LiveCourseResponse,
  | 'id'
  | 'type'
  | 'fundamentalCourses'
  | 'liveSessions'
  | 'liveTrialSessionId'
  | 'liveCourseOnUser'
  | 'fundamentalCourseRequiresSubscription'
  | 'exerciseRequiresSubscription'
  | 'enableRecordingPlayback'
  | 'recordingRequiresSubscription'
>

// TODO: remove filter
function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined
}

export function mapToLessonSectionProps(
  userStatus: UserStatus,
  data: LessonData
): LessonSectionProps {
  if (data.type === LiveCourseType.ONSITE) throw new Error('Onsite course is not supported')

  // TODO: remove filter
  const fundamentalCourses = data.fundamentalCourses.filter(notEmpty)

  const lockFundamental = () => {
    if (!userStatus.isAuthenticated || !userStatus.isEnrolled) return true
    if (data.fundamentalCourseRequiresSubscription) return !userStatus.isSubscribed
    return false
  }

  const lockTimetable = () => {
    if (!userStatus.isAuthenticated || !userStatus.isEnrolled) return true
    return false
  }

  let timetable: TimetableSubsectionProps | undefined = undefined
  switch (data.type) {
    case LiveCourseType.LIVE:
      timetable = {
        type: data.type,
        recentLiveSessionId: data.liveCourseOnUser?.recentLiveSessionId ?? null,
        disabled: lockTimetable(),
        isSubscribed: userStatus.isSubscribed,
        lock: {
          enableRecordingPlayback: data.enableRecordingPlayback,
          recordingRequiresSubscription: data.recordingRequiresSubscription,
          exerciseRequiresSubscription: data.exerciseRequiresSubscription,
        },
        items: data.liveSessions.map((liveSession) => ({
          id: liveSession.id,
          title: liveSession.name,
          name: liveSession.description,
          sheetUrl: liveSession.sheetUrl,
          exerciseUrl: liveSession.exercise
            ? `https://monkeyeveryday.com/plan/preview?planId=${liveSession.exercise.id}`
            : null,
          isTrialSession: liveSession.id === data.liveTrialSessionId,
          startTime: liveSession.startTime,
          endTime: liveSession.endTime,
          timestampSeconds: liveSession.timestampSeconds,
          videoLengthSeconds: liveSession.videoLengthSeconds,
        })),
      }
      break
    case LiveCourseType.FUSION:
      timetable = {
        type: data.type,
        recentLiveSessionId: data.liveCourseOnUser?.recentLiveSessionId ?? null,
        disabled: lockTimetable(),
        isSubscribed: userStatus.isSubscribed,
        lock: {
          enableRecordingPlayback: data.enableRecordingPlayback,
          recordingRequiresSubscription: data.recordingRequiresSubscription,
          exerciseRequiresSubscription: data.exerciseRequiresSubscription,
        },
        items: data.liveSessions.map((liveSession) => ({
          id: liveSession.id,
          title: liveSession.name,
          name: liveSession.description,
          sheetUrl: liveSession.sheetUrl,
          exerciseUrl: liveSession.exercise
            ? `https://monkeyeveryday.com/plan/preview?planId=${liveSession.exercise.id}`
            : null,
          isTrialSession: liveSession.id === data.liveTrialSessionId,
          startTime: liveSession.startTime,
          endTime: liveSession.endTime,
          timestampSeconds: liveSession.timestampSeconds,
          videoLengthSeconds: liveSession.videoLengthSeconds,
        })),
      }
      break
    case LiveCourseType.TAPE:
      timetable = {
        type: data.type,
        recentLiveSessionId: data.liveCourseOnUser?.recentLiveSessionId ?? null,
        disabled: lockTimetable(),
        isSubscribed: userStatus.isSubscribed,
        lock: {
          exerciseRequiresSubscription: data.exerciseRequiresSubscription,
        },
        items: data.liveSessions.map((liveSession) => ({
          id: liveSession.id,
          title: liveSession.name,
          name: liveSession.description,
          sheetUrl: liveSession.sheetUrl,
          exerciseUrl: liveSession.exercise
            ? `https://monkeyeveryday.com/plan/preview?planId=${liveSession.exercise.id}`
            : null,
          isTrialSession: liveSession.id === data.liveTrialSessionId,
          timestampSeconds: liveSession.timestampSeconds,
          videoLengthSeconds: liveSession.videoLengthSeconds,
        })),
      }
      break
  }

  return {
    courseId: data.id,
    courseType: data.type,
    fundamental: {
      disabled: lockFundamental(),
      requiredSubscription: data.fundamentalCourseRequiresSubscription,
      items: fundamentalCourses.map((fundamentalCourse) => ({
        id: fundamentalCourse?.id,
        title: fundamentalCourse?.name,
        sheetUrl: fundamentalCourse?.sheetUrl,
        isTrialSession: false,
      })),
    },
    timetable,
    ...userStatus,
    userLearningType: data.liveCourseOnUser?.learningType ?? null,
  }
}
