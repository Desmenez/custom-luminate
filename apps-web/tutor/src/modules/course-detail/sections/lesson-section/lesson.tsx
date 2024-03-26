import { faCalendarDays } from '@fortawesome/pro-regular-svg-icons'
import { faChalkboard, faPlay } from '@fortawesome/pro-solid-svg-icons'
import { differenceInSeconds, format, isSameDay, subMinutes } from 'date-fns'
import th from 'date-fns/locale/th'
import NextLink from 'next/link'

import { useCurrentSecond } from '@luminate/react-hooks'
import { TutorCourseDetail } from '@luminate/rest'
import { Button, FontAwesomeIcon } from '@luminate/ui'

import { CourseDetailAccordion } from '../../components/course-detail-accordion'

export interface LessonProps {
  isTape: boolean
  session: TutorCourseDetail['liveSessions'][number]
}

export function Lesson({ session, isTape }: LessonProps) {
  const startTime = new Date(session.startTime)
  const endTime = new Date(session.endTime)
  const right = !isTape && (
    <div className="flex flex-row items-center text-gray-50 text-sm gap-2">
      <FontAwesomeIcon icon={faCalendarDays} className="w-4 h-4" />
      <span>{`${formatDate(startTime)}, ${formatTime(startTime)}-${formatTime(endTime)}`}</span>
    </div>
  )

  return (
    <CourseDetailAccordion title={session.name} right={right} openByDefault>
      <div className="flex flex-col lg:flex-row p-4 gap-4 lg:pl-10 lg:items-center">
        <p className="lg:w-0 lg:flex-1 truncate">{session.description}</p>
        <LessonActions session={session} isTape={isTape} startTime={startTime} endTime={endTime} />
      </div>
    </CourseDetailAccordion>
  )
}

interface LessonActionProps {
  session: TutorCourseDetail['liveSessions'][number]
  isTape: boolean
  startTime: Date
  endTime: Date
}

function LessonActions({ session, isTape, startTime, endTime }: LessonActionProps) {
  const now = useCurrentSecond()
  if (now === null) return null

  const ended = isTape || endTime < now

  if (ended) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 lg:items-center">
        {session.videoDuration && (
          <p>{`เวลาในการสอน ${getDurationString(Math.ceil(session.videoDuration))}`}</p>
        )}
        <Button variant="outline" asChild>
          <NextLink href={`/session/${session.id}`}>
            <span className="inline-flex mr-2">
              <FontAwesomeIcon icon={faChalkboard} className="w-4 h-4" />
            </span>
            ดูข้อมูลการสอน
          </NextLink>
        </Button>
      </div>
    )
  }

  const isLiving = startTime !== null && subMinutes(startTime, 15) < now
  if (!isLiving) {
    return (
      <Button
        variant="live"
        leftIcon={<FontAwesomeIcon icon={faPlay} className="w-4 h-4" />}
        className="uppercase"
        disabled
      >
        Go Live
      </Button>
    )
  }

  const seconds = differenceInSeconds(now, startTime)
  const text = seconds >= 0 ? getDurationString(seconds) : `อีก ${Math.floor(-seconds / 60)} นาที`
  return (
    <div className="flex flex-row items-center gap-4">
      <span className="text-sm text-red-500">{text}</span>
      <Button variant="live" className="uppercase max-lg:flex-1" asChild>
        <NextLink href={`/session/${session.id}`}>
          <span className="inline-flex mr-2">
            <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
          </span>
          Go Live
        </NextLink>
      </Button>
    </div>
  )
}

function getDurationString(duration: number) {
  const seconds = duration % 60
  const minutes = Math.floor((duration % 3600) / 60)
  const hours = Math.floor(duration / 3600)

  const secondsStr = String(seconds).padStart(2, '0')
  const minutesStr = String(minutes).padStart(2, '0')
  const hoursStr = String(hours).padStart(2, '0')
  return `${hoursStr}:${minutesStr}:${secondsStr}`
}

export function formatDate(date: Date) {
  if (isSameDay(date, new Date())) return 'วันนี้'
  return format(date, 'EEEE d MMMM yyyy', { locale: th })
}

export function formatTime(date: Date) {
  return format(date, 'HH:mm', { locale: th })
}
