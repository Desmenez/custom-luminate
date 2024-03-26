import { LearningType, LiveCourseType } from '@luminate/database'
import { LiveCourseResponse } from '@luminate/rest'
import { ValuesType } from '@luminate/types-utility'

import { SectionProps } from '../../types/section'

export type BaseScheduleLessonItemOption = {
  id: string
  title: string
  subtitle?: string
  name?: string
  sheetUrl: string | null
  isTrialSession: boolean
  exerciseUrl: string | null
}

export type FundamentalLessonItemOption = Omit<BaseScheduleLessonItemOption, 'exerciseUrl'>

export type LiveScheduleLessonItemOption = BaseScheduleLessonItemOption & {
  startTime: string
  endTime: string
  timestampSeconds: number | null
  videoLengthSeconds: number | null
}

export type FusionScheduleLessonItemOption = LiveScheduleLessonItemOption

export type TapeScheduleLessonItemOption = BaseScheduleLessonItemOption & {
  timestampSeconds: number | null
  videoLengthSeconds: number | null
}

type ScheduleSubsectionCommonProps = {
  isSubscribed: boolean
  recentLiveSessionId: string | null
  disabled?: boolean
}

export type LiveScheduleSubsectionProps = ScheduleSubsectionCommonProps & {
  lock: Pick<
    LiveCourseResponse,
    'exerciseRequiresSubscription' | 'enableRecordingPlayback' | 'recordingRequiresSubscription'
  >
  items: LiveScheduleLessonItemOption[]
}

export type FusionScheduleSubsectionProps = ScheduleSubsectionCommonProps & {
  lock: Pick<
    LiveCourseResponse,
    'exerciseRequiresSubscription' | 'enableRecordingPlayback' | 'recordingRequiresSubscription'
  >
  items: FusionScheduleLessonItemOption[]
}

export type TapeScheduleSubsectionProps = ScheduleSubsectionCommonProps & {
  lock: Pick<LiveCourseResponse, 'exerciseRequiresSubscription'>
  items: TapeScheduleLessonItemOption[]
}

export type TimetableSubsectionProps =
  | ({
      type: typeof LiveCourseType.LIVE
    } & LiveScheduleSubsectionProps)
  | ({
      type: typeof LiveCourseType.FUSION
    } & FusionScheduleSubsectionProps)
  | ({
      type: typeof LiveCourseType.TAPE
    } & TapeScheduleSubsectionProps)

export type FundamentalSubsectionProps = {
  requiredSubscription: boolean
  disabled?: boolean
  items: FundamentalLessonItemOption[]
}

export const LiveButtonState = {
  NOT_STARTED: 'NOT_STARTED',
  STARTING: 'STARTING',
  ENDED: 'ENDED',
} as const
export type LiveButtonState = ValuesType<typeof LiveButtonState>

export interface LessonSectionProps extends SectionProps {
  userLearningType: LearningType | null
  fundamental: FundamentalSubsectionProps
  timetable?: TimetableSubsectionProps
}
