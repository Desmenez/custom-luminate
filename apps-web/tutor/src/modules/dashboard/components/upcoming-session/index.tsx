import { faCalendarDays } from '@fortawesome/pro-regular-svg-icons'
import { faSignalStream } from '@fortawesome/pro-solid-svg-icons'
import { format, isSameDay } from 'date-fns'
import th from 'date-fns/locale/th'
import NextLink from 'next/link'

import { TutorUpcomingSession } from '@luminate/rest'
import { Button, FontAwesomeIcon } from '@luminate/ui'

export interface UpcomingSessionSectionProps {
  upcomingSessions: TutorUpcomingSession[]
}

export function UpcomingSessionSection({ upcomingSessions }: UpcomingSessionSectionProps) {
  if (upcomingSessions.length === 0) return null
  return (
    <section className="lg:container flex flex-col lg:flex-row gap-6">
      {upcomingSessions[0] && <FirstUpcomingSession upcomingSession={upcomingSessions[0]} />}
      {upcomingSessions[1] && <SecondUpcomingSession upcomingSession={upcomingSessions[1]} />}
    </section>
  )
}

export interface UpcomingSessionProps {
  upcomingSession: TutorUpcomingSession
}

export function FirstUpcomingSession({ upcomingSession }: UpcomingSessionProps) {
  const startTime = new Date(upcomingSession.startTime)
  const endTime = new Date(upcomingSession.endTime)
  return (
    <div className={'flex flex-col gap-2 lg:p-6 lg:bg-gray-900 lg:rounded-lg shadow-sm flex-1'}>
      <h2 className="max-lg:hidden font-semibold text-gray-50 text-xl">คอร์สที่กำลังจะมาถึง</h2>
      <div className="w-full flex flex-col lg:flex-row p-4 gap-4 bg-gradient-to-r from-[#1C180F] to-[#34280D] lg:rounded-lg lg:shadow-sm">
        <div className="w-full flex flex-col gap-1 max-lg:items-center lg:w-0 lg:flex-1">
          <p className="font-semibold lg:text-lg text-yellow-400 leading-normal max-lg:text-center truncate">
            {upcomingSession.name}
          </p>
          <p className="text-sm lg:text-base text-gray-50 leading-normal">
            {`${formatDate(startTime)}, ${formatTime(startTime)}-${formatTime(endTime)}`}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
          <Button asChild variant="live" className="uppercase">
            <NextLink href={`/session/${upcomingSession.id}`}>
              <span className="inline-flex mr-2">
                <FontAwesomeIcon icon={faSignalStream} className="w-4 h-4" />
              </span>
              Live
            </NextLink>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function SecondUpcomingSession({ upcomingSession }: UpcomingSessionProps) {
  const startTime = new Date(upcomingSession.startTime)
  const endTime = new Date(upcomingSession.endTime)
  return (
    <div
      className={'flex flex-col px-4 py-2 lg:p-6 lg:gap-2 lg:bg-gray-900 lg:rounded-lg shadow-sm'}
    >
      <h3 className="font-semibold text-sm text-gray-50">ครั้งต่อไป</h3>
      <div className="flex flex-col p-2 lg:p-4 lg:gap-4 border border-gray-700 rounded-lg">
        <p className="font-semibold text-xs lg:text-lg text-gray-400">{upcomingSession.name}</p>
        <div className="flex gap-2 items-center text-xs lg:text-base text-gray-500">
          <FontAwesomeIcon icon={faCalendarDays} className="w-3 h-3" />
          <p>{`${formatDate(startTime)}, ${formatTime(startTime)}-${formatTime(endTime)}`}</p>
        </div>
      </div>
    </div>
  )
}

export function formatDate(date: Date) {
  if (isSameDay(date, new Date())) return 'วันนี้'
  return format(date, 'EEEE d MMMM yyyy', { locale: th })
}

export function formatTime(date: Date) {
  return format(date, 'HH:mm', { locale: th })
}
