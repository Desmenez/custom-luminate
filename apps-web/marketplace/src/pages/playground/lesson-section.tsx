import { LessonSection } from '@app/modules/course-detail/sections/lesson-section'
import {
  FundamentalSubsectionProps,
  LessonSectionProps,
  LiveScheduleLessonItemOption,
} from '@app/modules/course-detail/sections/lesson-section/types'
import { SectionProps } from '@app/modules/course-detail/types/section'
import { addMinutes, subMinutes } from 'date-fns'

import { LearningType } from '@luminate/database'

type TmpProps = SectionProps & { userLearningType: LearningType }

const LessonSectionPage = () => {
  const sectionPropsForLive = {
    courseId: '1',
    courseType: 'LIVE',
    isAuthenticated: true,
    isEnrolled: true,
    isSubscribed: true,
    userLearningType: 'ONLINE',
  } satisfies TmpProps

  const fundamental: FundamentalSubsectionProps = {
    requiredSubscription: true,
    items: [
      {
        id: '1',
        title: 'เริ่มต้นเรียนคณิตศาสตร์',
        subtitle:
          'พิเศษสำหรับสมาชิกรายเดือน สมาชิกสามารถเข้าถึงคอร์สเรียนปรับพื้นฐานและสรุปเพื่อเตรียมตัวก่อน เรียนสดได้ หากน้องๆ คนไหนสนใจสมัครสมาชิกรายเดือน สามารถสมัครพร้อมกับการซื้อคอร์สนี้ได้เลย!',
        name: 'เริ่มต้นเรียนคณิตศาสตร์',
        sheetUrl: 'https://google.com',
        isTrialSession: false,
      },
    ],
  }

  const sectionPropsForTape = {
    ...sectionPropsForLive,
    courseType: 'TAPE',
    userLearningType: 'ONLINE',
  } satisfies TmpProps

  const sectionPropsForFusionOnline = {
    ...sectionPropsForLive,
    courseType: 'FUSION',
    userLearningType: 'ONLINE',
  } satisfies TmpProps

  const sectionPropsForFusionOnsite = {
    ...sectionPropsForLive,
    courseType: 'FUSION',
    userLearningType: 'ONSITE',
  } satisfies TmpProps

  const liveScheduleItemOptions: LiveScheduleLessonItemOption[] = [
    {
      id: '1',
      title: 'เรียนคณิตศาสตร์ คาบที่ 1',
      name: 'เรียนคณิตศาสตร์ คาบที่ 1',
      startTime: subMinutes(new Date(), 120).toISOString(),
      endTime: subMinutes(new Date(), 120).toISOString(),
      isTrialSession: false,
      sheetUrl: 'https://google.com',
      exerciseUrl: 'https://google.com',
      timestampSeconds: 1000,
      videoLengthSeconds: 10000,
    },
    {
      id: '2',
      title: 'เรียนคณิตศาสตร์ คาบที่ 2',
      name: 'เรียนคณิตศาสตร์ คาบที่ 2',
      startTime: addMinutes(new Date(), 15).toISOString(),
      endTime: addMinutes(new Date(), 60).toISOString(),
      isTrialSession: true,
      sheetUrl: 'https://google.com',
      exerciseUrl: null,
      timestampSeconds: 1000,
      videoLengthSeconds: 10000,
    },
    {
      id: '3',
      title: 'เรียนคณิตศาสตร์ คาบที่ 3',
      name: 'เรียนคณิตศาสตร์ คาบที่ 3',
      startTime: subMinutes(new Date(), 60).toISOString(),
      endTime: addMinutes(new Date(), 60).toISOString(),
      isTrialSession: true,
      sheetUrl: 'https://google.com',
      exerciseUrl: null,
      timestampSeconds: 1000,
      videoLengthSeconds: 10000,
    },
    {
      id: '4',
      title: 'เรียนคณิตศาสตร์ คาบที่ 4',
      name: 'เรียนคณิตศาสตร์ คาบที่ 4',
      startTime: addMinutes(new Date(), 60).toISOString(),
      endTime: addMinutes(new Date(), 120).toISOString(),
      isTrialSession: false,
      sheetUrl: null,
      exerciseUrl: null,
      timestampSeconds: 1000,
      videoLengthSeconds: 10000,
    },
  ]

  const lessonSectionPropsForLive: LessonSectionProps = {
    fundamental,
    timetable: {
      recentLiveSessionId: null,
      isSubscribed: sectionPropsForLive.isSubscribed,
      lock: {
        enableRecordingPlayback: true,
        recordingRequiresSubscription: true,
        exerciseRequiresSubscription: true,
      },
      type: sectionPropsForLive.courseType,
      items: liveScheduleItemOptions,
    },
    ...sectionPropsForLive,
  }

  const lessonSectionPropsForTape: LessonSectionProps = {
    fundamental,
    timetable: {
      isSubscribed: sectionPropsForTape.isSubscribed,
      lock: {
        exerciseRequiresSubscription: true,
      },
      recentLiveSessionId: null,
      type: sectionPropsForTape.courseType,
      items: liveScheduleItemOptions,
    },
    ...sectionPropsForTape,
  }

  const lessonSectionPropsForFusionOnline: LessonSectionProps = {
    fundamental: {
      ...fundamental,
    },
    timetable: {
      recentLiveSessionId: null,
      isSubscribed: sectionPropsForFusionOnline.isSubscribed,
      lock: {
        enableRecordingPlayback: true,
        recordingRequiresSubscription: true,
        exerciseRequiresSubscription: true,
      },
      type: sectionPropsForFusionOnline.courseType,
      items: liveScheduleItemOptions,
    },
    ...sectionPropsForFusionOnline,
  }

  const lessonSectionPropsForFusionOnsite: LessonSectionProps = {
    fundamental: {
      ...fundamental,
      requiredSubscription: false,
    },
    timetable: {
      recentLiveSessionId: '1',
      isSubscribed: sectionPropsForFusionOnsite.isSubscribed,
      lock: {
        enableRecordingPlayback: true,
        recordingRequiresSubscription: true,
        exerciseRequiresSubscription: true,
      },
      type: sectionPropsForFusionOnsite.courseType,
      items: liveScheduleItemOptions,
    },
    ...sectionPropsForFusionOnsite,
  }

  return (
    <div className="w-full px-6 mx-auto mt-4 flex flex-col gap-6">
      <h1 className="font-bold text-3xl">LIVE MODE</h1>
      <LessonSection {...lessonSectionPropsForLive} />
      <h1 className="font-bold text-3xl">TAPE MODE</h1>
      <LessonSection {...lessonSectionPropsForTape} />
      <h1 className="font-bold text-3xl">FUSION MODE - ONLINE</h1>
      <LessonSection {...lessonSectionPropsForFusionOnline} />
      <h1 className="font-bold text-3xl">FUSION MODE - ONSITE</h1>
      <LessonSection {...lessonSectionPropsForFusionOnsite} />
    </div>
  )
}

export default LessonSectionPage
