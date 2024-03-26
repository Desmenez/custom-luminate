import { RefObject, forwardRef } from 'react'

import { format } from 'date-fns'
import th from 'date-fns/locale/th'

import { LiveCourseType } from '@luminate/database'
import { useIntersectionObserver } from '@luminate/react-hooks'
import { cn } from '@luminate/ui'

import { DynamicSectionContainer } from './container'
import { DynamicSectionPricing } from './pricing'
import { DynamicSectionSubtitle, DynamicSectionTitle } from './title'
import { DynamicSectionUpcoming } from './upcoming'

interface UpcomingSession {
  index: number
  id: string
  startTime: string
  endTime: string
}

type DynamicSectionUserProps =
  | { isEnrolled: false }
  | {
      isEnrolled: true
      upcomingSession: UpcomingSession | null
      expiresAt: string | null
    }

export type DynamicSectionProps = {
  className?: string
  innerClassName?: string
  courseId: string
  name: string
  type: LiveCourseType
  fullPrice: number | null
  price: number
  isTrialAvailable: boolean
  startDate: string | null
  endDate: string | null
  registrationDeadline: string | null
  onClickStartTrial?: () => void
} & DynamicSectionUserProps

function DynamicSectionInner(props: DynamicSectionProps) {
  if (props.isEnrolled && props.expiresAt && new Date(props.expiresAt) < new Date()) {
    if (props.type === LiveCourseType.TAPE) {
      return <DynamicSectionTitle>คอร์สหมดอายุ</DynamicSectionTitle>
    } else {
      return (
        <div>
          <DynamicSectionTitle>บันทึกการสอนหมดอายุ</DynamicSectionTitle>
          <DynamicSectionSubtitle>
            บันทึกการสอนสดมีอายุเพียง 30 วันหลังคอร์สจบ
          </DynamicSectionSubtitle>
        </div>
      )
    }
  }
  if (props.isEnrolled && !props.upcomingSession && props.expiresAt) {
    const description =
      props.type === LiveCourseType.TAPE ? 'เรียนได้ถึงวันที่' : 'ดูย้อนหลังได้ถึงวันที่'
    return (
      <div className="w-full flex flex-col lg:flex-row lg:gap-8 items-center">
        <DynamicSectionTitle className="w-full lg:w-0 lg:flex-1">{props.name}</DynamicSectionTitle>
        <DynamicSectionSubtitle className="flex flex-row gap-1 lg:gap-4 items-center">
          {description}
          <span className="lg:font-semibold lg:text-xl">{formatDate(props.expiresAt)}</span>
        </DynamicSectionSubtitle>
      </div>
    )
  }
  const upcomingSession = props.isEnrolled ? props.upcomingSession : null
  return (
    <>
      <div
        className={cn(
          'flex flex-col w-full lg:w-0 lg:flex-1',
          !props.isEnrolled && 'max-lg:hidden'
        )}
      >
        <DynamicSectionTitle>
          {upcomingSession && (
            <span className="text-yellow-400 mr-4">ครั้งที่ {upcomingSession.index}</span>
          )}
          {props.name}
        </DynamicSectionTitle>
        {!props.isEnrolled && (
          <DynamicSectionSubtitle>
            {props.startDate && props.endDate && (
              <span>
                {formatDate(props.startDate)} - {formatDate(props.endDate)}
              </span>
            )}
            {props.registrationDeadline && (
              <span>(ปิดรับสมัคร {formatDate(props.registrationDeadline)})</span>
            )}
          </DynamicSectionSubtitle>
        )}
      </div>
      {!props.isEnrolled && (
        <DynamicSectionPricing
          courseId={props.courseId}
          isTrialAvailable={props.isTrialAvailable}
          fullPrice={props.fullPrice}
          price={props.price}
          onClickStartTrial={props.onClickStartTrial}
        />
      )}
      {props.isEnrolled && props.upcomingSession && (
        <DynamicSectionUpcoming {...props.upcomingSession} />
      )}
    </>
  )
}

export const DynamicSectionDesktop = forwardRef<HTMLDivElement, DynamicSectionProps>(
  function DynamicSectionDesktop({ className, innerClassName, ...props }, ref) {
    return (
      <DynamicSectionContainer
        ref={ref}
        className={cn('max-lg:hidden', className)}
        innerClassName={cn('container', innerClassName)}
      >
        <DynamicSectionInner {...props} />
      </DynamicSectionContainer>
    )
  }
)

export type DynamicSectionFloatingProps = {
  desktopRef: RefObject<HTMLDivElement>
} & DynamicSectionProps

export function DynamicSectionFloating({
  className,
  innerClassName,
  desktopRef,
  ...props
}: DynamicSectionFloatingProps) {
  const entry = useIntersectionObserver(desktopRef, { threshold: 0.5, rootMargin: '-64px' })
  const hideOnDesktop = entry?.isIntersecting === true

  return (
    <DynamicSectionContainer
      className={cn(
        'sticky bottom-0 transition-opacity',
        hideOnDesktop && 'lg:opacity-0 lg:pointer-events-none',
        className
      )}
      innerClassName={cn('px-4 lg:px-8', innerClassName)}
    >
      <DynamicSectionInner {...props} />
    </DynamicSectionContainer>
  )
}

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return format(date, 'd MMMM yyyy', { locale: th })
}
