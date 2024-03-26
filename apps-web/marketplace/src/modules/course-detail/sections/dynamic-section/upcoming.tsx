import { useMemo } from 'react'

import { faCalendarDays } from '@fortawesome/pro-regular-svg-icons'
import { faPlay } from '@fortawesome/pro-solid-svg-icons'
import { addHours, differenceInMinutes, differenceInSeconds, format, subMinutes } from 'date-fns'
import { th } from 'date-fns/locale'
import NextLink from 'next/link'

import { useCurrentSecond } from '@luminate/react-hooks'
import { Button, FontAwesomeIcon } from '@luminate/ui'

export interface DynamicSectionUpcomingProps {
  id: string
  startTime: string
  endTime: string
}

export function DynamicSectionUpcoming({
  id,
  startTime: startTimeString,
  endTime: endTimeString,
}: DynamicSectionUpcomingProps) {
  const now = useCurrentSecond()
  const state = useMemo(() => {
    const startTime = new Date(startTimeString)
    const endTime = new Date(endTimeString)

    const offsetStartTime = subMinutes(startTime, 15)
    const offsetEndTime = addHours(endTime, 2)
    const isLiving = now && now >= offsetStartTime && now <= offsetEndTime
    if (!isLiving) {
      return {
        isLiving: false,
        period: `${formatStartTime(startTime)}-${formatEndTime(endTime)}`,
      } as const
    } else {
      if (now < startTime) {
        return {
          isLiving: true,
          text: `อีก ${differenceInMinutes(startTime, now)} นาที`,
          buttonText: 'เข้าเรียน',
        } as const
      } else {
        const diffSeconds = differenceInSeconds(now, startTime)

        const hours = Math.floor(diffSeconds / 3600)
        const minutes = Math.floor((diffSeconds % 3600) / 60)
        const seconds = diffSeconds % 60

        const hoursStr = String(hours).padStart(2, '0')
        const minutesStr = String(minutes).padStart(2, '0')
        const secondsStr = String(seconds).padStart(2, '0')

        return {
          isLiving: true,
          text: `${hoursStr}:${minutesStr}:${secondsStr}`,
          buttonText: 'Live Now',
        } as const
      }
    }
  }, [startTimeString, endTimeString, now])

  if (!state.isLiving) {
    return (
      <>
        <div className="flex flex-row items-center whitespace-nowrap gap-4 max-lg:hidden">
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon icon={faCalendarDays} className="w-4 h-4" />
            <span>{state.period}</span>
          </div>
          <Button
            className="w-full uppercase"
            leftIcon={<FontAwesomeIcon icon={faPlay} className="w-4 h-4" />}
            disabled
          >
            Live
          </Button>
        </div>
        <Button
          className="w-full lg:hidden"
          leftIcon={<FontAwesomeIcon icon={faCalendarDays} className="w-4 h-4" />}
          disabled
        >
          {state.period}
        </Button>
      </>
    )
  } else {
    return (
      <div className="flex flex-row items-center gap-4 max-lg:w-full">
        <span className="text-red-500 text-sm tabular-nums">{state.text}</span>
        <Button className="uppercase max-lg:flex-1" variant="live" asChild>
          <NextLink href={`/live/${id}`}>
            <span className="inline-flex mr-2">
              <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
            </span>
            {state.buttonText}
          </NextLink>
        </Button>
      </div>
    )
  }
}

export function formatStartTime(date: Date) {
  return format(date, 'EEEE d MMMM yyyy, HH:mm', { locale: th })
}

export function formatEndTime(date: Date) {
  return format(date, 'HH:mm', { locale: th })
}
