import { HTMLAttributes } from 'react'

import { faAlarmClock, faFilm, faScreenUsers } from '@fortawesome/pro-regular-svg-icons'
import { faPlay, faSignalStream } from '@fortawesome/pro-solid-svg-icons'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { BasePlanType, LiveCourseType } from '@luminate/database'
import { LiveCourseForPreview, MyLiveCourseForPreview } from '@luminate/rest'
import {
  Button,
  FontAwesomeIcon,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
  cn,
} from '@luminate/ui'
import { convertIntervalToTimeString } from '@luminate/utils'

import { useSliderContext } from './course-card-slider'

// TODO: refactor these cards and implement business logic

export interface DefaultHoverCardProps extends HTMLAttributes<HTMLAnchorElement> {
  courseData: MyLiveCourseForPreview | LiveCourseForPreview
  hover?: boolean
  responsive?: boolean
}

export function DefaultHoverCard({
  className,
  courseData,
  hover = true,
  responsive = false,
  ...props
}: DefaultHoverCardProps) {
  const href = `/course/${courseData.id}`
  const sliderContext = useSliderContext()
  const isDragging = sliderContext?.isDragging ?? false
  return (
    <HoverCardRoot hover={!isDragging && hover}>
      <HoverCardTrigger asChild>
        <NextLink
          href={href}
          className={cn(
            responsive ? 'relative aspect-[3/4]' : 'min-w-[220px] max-w-[220px] h-[296px]',
            'rounded-lg shadow-lg focus-visible:outline-yellow-200 outline-offset-2',
            className
          )}
          {...props}
        >
          <NextImage
            alt={courseData.name}
            src={courseData.courseThumbnailUrl ?? ''}
            fill={responsive}
            width={responsive ? undefined : 220}
            height={responsive ? undefined : 296}
            className="object-cover bg-accent rounded-lg"
          />
        </NextLink>
      </HoverCardTrigger>
      <HoverCardContent>
        <NextLink href={href}>
          <div className="relative w-[350px] h-[194px]">
            <NextImage
              fill
              alt="course cover"
              src={courseData.courseCoverUrl ?? ''}
              className="object-cover bg-accent rounded-t-lg"
            />
            <div className="absolute left-0 right-0 top-1/2 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
            <NextImage
              width={200}
              height={90}
              alt="course sticker"
              src={courseData.courseStickerUrl ?? ''}
              className="absolute right-0 bottom-0 w-[200px] h-[90px] object-cover"
            />
          </div>
          <section className="p-4 flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <Button variant="outline" className="flex-1">
                {courseData.isMyCourse
                  ? 'ดูรายละเอียด'
                  : `${(courseData.onlinePrice && courseData.onsitePrice
                      ? Math.min(courseData.onlinePrice, courseData.onlinePrice)
                      : courseData.onlinePrice
                      ? courseData.onlinePrice
                      : courseData.onsitePrice
                    )?.toLocaleString()} บาท`}
              </Button>
              <div className="flex items-center gap-2">
                <NextImage
                  alt="course tutor"
                  src={courseData.tutor?.tutorIconUrl ?? ''}
                  width={24}
                  height={24}
                  className="w-8 h-8 object-cover bg-accent rounded-full border border-gray-50"
                />
                <span className="text-sm whitespace-nowrap">{courseData.tutor?.displayName}</span>
              </div>
            </div>
            <CourseTypeInfo courseData={courseData} />
            <p className="text-gray-400 text-sm whitespace-pre-line line-clamp-3">
              {courseData.description}
            </p>
          </section>
        </NextLink>
      </HoverCardContent>
    </HoverCardRoot>
  )
}

export interface MyHoverCardProps extends HTMLAttributes<HTMLAnchorElement> {
  courseData: MyLiveCourseForPreview
  hover?: boolean
  responsive?: boolean
}

export function LiveCourseCard({
  className,
  courseData,
  hover = true,
  responsive = false,
  ...props
}: MyHoverCardProps) {
  const href = courseData.upcomingSession
    ? `/live/${courseData.upcomingSession.id}`
    : `/course/${courseData.id}`
  const sliderContext = useSliderContext()
  const isDragging = sliderContext?.isDragging ?? false
  return (
    <HoverCardRoot hover={!isDragging && hover}>
      <HoverCardTrigger asChild>
        <NextLink
          href={href}
          className={cn(
            responsive ? 'relative w-full' : 'min-w-[220px] max-w-[220px] h-[296px]',
            'rounded-lg shadow-lg bg-gray-900 focus-visible:outline-yellow-200 outline-offset-2',
            className
          )}
          {...props}
        >
          <div className="relative w-full">
            <NextImage
              width={220}
              height={124}
              alt={courseData.name}
              src={courseData.courseCoverUrl ?? ''}
              className="w-full object-cover bg-accent rounded-t-lg"
            />
            <div className="absolute left-0 right-0 top-1/2 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
            <NextImage
              width={120}
              height={54}
              alt="course sticker"
              src={courseData.courseStickerUrl ?? ''}
              className="absolute right-0 bottom-0 w-1/2 object-cover"
            />
            <span className="absolute right-2 top-2 bg-red-600 rounded-lg px-2 py-[3px] text-xs">
              LIVE
            </span>
          </div>
          <div className="flex flex-col p-4 gap-4.5">
            <div>
              <div className="flex items-center gap-1 mx-1 mb-1">
                <FontAwesomeIcon icon={COURSE_TYPE_ICON[courseData.type]} className="h-4 w-4" />
                <span className="font-bold text-xs">{COURSE_TYPE_EN[courseData.type]}</span>
              </div>
              <h3 className="font-bold line-clamp-1">{courseData.name}</h3>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-red-600 flex-1 h-1 rounded" />
              <span className="text-xs font-bold">ถ่ายทอดสด</span>
            </div>
            <Button variant="outline">เข้าเรียน</Button>
          </div>
        </NextLink>
      </HoverCardTrigger>
      <HoverCardContent>
        <NextLink href={href}>
          <div className="relative w-[350px] h-[194px]">
            <NextImage
              fill
              alt="course cover"
              src={courseData.courseCoverUrl ?? ''}
              className="object-cover bg-accent rounded-t-lg"
            />
            <div className="absolute left-0 right-0 top-1/2 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
            <NextImage
              width={200}
              height={90}
              alt="course sticker"
              src={courseData.courseStickerUrl ?? ''}
              className="absolute right-0 bottom-0 w-[200px] h-[90px] object-cover"
            />
            <div className="flex gap-2 absolute right-2 top-2">
              {courseData.upcomingSession && (
                <div className="flex items-center gap-1 bg-gray-900 rounded-lg px-3 py-[3px]">
                  <FontAwesomeIcon icon={faAlarmClock} className="h-4 w-4" />
                  <span className="text-xs">
                    {format(new Date(courseData.upcomingSession.startTime), 'dd MMM yy, HH.mm น.', {
                      locale: th,
                    })}
                  </span>
                </div>
              )}
              <span className="bg-red-600 rounded-lg px-2 py-[3px] text-xs">LIVE</span>
            </div>
          </div>
          <section className="p-4 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="bg-red-600 flex-1 h-1 rounded" />
              <span className="text-xs">ถ่ายทอดสด</span>
            </div>
            <div className="flex gap-4 items-center">
              <Button variant="outline" className="flex-1">
                เข้าเรียน
              </Button>
              <div className="flex items-center gap-2">
                <NextImage
                  alt="course tutor"
                  src={courseData.tutor?.tutorIconUrl ?? ''}
                  width={24}
                  height={24}
                  className="w-8 h-8 object-cover bg-accent rounded-full border border-gray-50"
                />
                <span className="text-sm whitespace-nowrap">{courseData.tutor?.displayName}</span>
              </div>
            </div>
            <CourseTypeInfo courseData={courseData} />
            <p className="text-gray-400 text-sm whitespace-pre-line line-clamp-3">
              {courseData.description}
            </p>
          </section>
        </NextLink>
      </HoverCardContent>
    </HoverCardRoot>
  )
}

export function ContinueCourseCard({
  className,
  courseData,
  hover = true,
  responsive = false,
  ...props
}: MyHoverCardProps) {
  const href = courseData.recentLiveSessionId
    ? `/live/${courseData.recentLiveSessionId}`
    : `/course/${courseData.id}`
  const timeWatched = convertIntervalToTimeString(courseData.recentLiveSessionTimestampSeconds!)
  const percentWatched =
    courseData.recentLiveSessionTimestampSeconds! / courseData.recentLiveSessionVideoLengthSeconds!
  const sliderContext = useSliderContext()
  const isDragging = sliderContext?.isDragging ?? false
  return (
    <HoverCardRoot hover={!isDragging && hover}>
      <HoverCardTrigger asChild>
        <NextLink
          href={href}
          className={cn(
            responsive ? 'relative w-full' : 'min-w-[220px] max-w-[220px] h-[296px]',
            'rounded-lg shadow-lg bg-gray-900 focus-visible:outline-yellow-200 outline-offset-2',
            className
          )}
          {...props}
        >
          <div className="relative w-full">
            <NextImage
              width={220}
              height={124}
              alt="course cover"
              src={courseData.courseCoverUrl ?? ''}
              className="w-full object-cover bg-accent rounded-t-lg"
            />
            <div className="absolute left-0 right-0 top-1/2 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
            <NextImage
              width={120}
              height={54}
              alt="course sticker"
              src={courseData.courseStickerUrl ?? ''}
              className="absolute right-0 bottom-0 w-1/2 object-cover"
            />
          </div>
          <div className="flex flex-col p-4 gap-4.5">
            <div>
              <div className="flex items-center gap-1 mx-1 mb-1">
                <FontAwesomeIcon icon={COURSE_TYPE_ICON[courseData.type]} className="h-4 w-4" />
                <span className="font-bold text-xs">{COURSE_TYPE_EN[courseData.type]}</span>
              </div>
              <h3 className="font-bold line-clamp-1">{courseData.name}</h3>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex-1 h-1 relative">
                <div className="absolute inset-0 h-1 bg-gray-600 rounded" />
                <div
                  className="absolute inset-0 h-1 bg-yellow-400 rounded"
                  style={{ width: `${percentWatched * 100}%` }}
                />
              </div>
              <span className="text-xs">
                {timeWatched.minutes}:{timeWatched.seconds} นาที
              </span>
            </div>
            <Button
              variant="outline"
              leftIcon={<FontAwesomeIcon icon={faPlay} className="h-4 w-4" />}
            >
              ดูต่อ
            </Button>
          </div>
        </NextLink>
      </HoverCardTrigger>
      <HoverCardContent>
        <NextLink href={href}>
          <div className="relative w-[350px] h-[194px]">
            <NextImage
              fill
              alt="course cover"
              src={courseData.courseCoverUrl ?? ''}
              className="object-cover bg-accent rounded-t-lg"
            />
            <div className="absolute left-0 right-0 top-1/2 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
            <NextImage
              width={200}
              height={90}
              alt="course sticker"
              src={courseData.courseStickerUrl ?? ''}
              className="absolute right-0 bottom-0 w-[200px] h-[90px] object-cover"
            />
          </div>
          <section className="p-4 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="flex-1 h-1 relative">
                <div className="absolute inset-0 h-1 bg-gray-600 rounded" />
                <div
                  className="absolute inset-0 h-1 bg-yellow-400 rounded"
                  style={{ width: `${percentWatched * 100}%` }}
                />
              </div>
              <span className="text-xs">
                {timeWatched.minutes}:{timeWatched.seconds} นาที
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                className="flex-1"
                variant="outline"
                leftIcon={<FontAwesomeIcon icon={faPlay} className="h-4 w-4" />}
              >
                ดูต่อ
              </Button>
              <div className="flex items-center gap-2">
                <NextImage
                  alt="course tutor"
                  src={courseData.tutor?.tutorIconUrl ?? ''}
                  width={24}
                  height={24}
                  className="w-8 h-8 object-cover bg-accent rounded-full border border-gray-50"
                />
                <span className="text-sm whitespace-nowrap">{courseData.tutor?.displayName}</span>
              </div>
            </div>

            <CourseTypeInfo courseData={courseData} />
            <p className="text-gray-400 text-sm whitespace-pre-line line-clamp-3">
              {courseData.description}
            </p>
          </section>
        </NextLink>
      </HoverCardContent>
    </HoverCardRoot>
  )
}

function CourseTypeInfo({
  courseData,
}: {
  courseData: MyLiveCourseForPreview | LiveCourseForPreview
}) {
  return (
    <div className="font-semibold text-xs flex gap-1.5 items-center">
      <div className="flex gap-1 items-center">
        <FontAwesomeIcon icon={COURSE_TYPE_ICON[courseData.type]} className="w-4 h-4 ml-1" />
        <span>{COURSE_TYPE_EN[courseData.type]}</span>
      </div>
      {courseData.type === LiveCourseType.LIVE && (
        <>
          <span>•</span>
          <span>{format(new Date(courseData.startDate), 'dd MMM yy', { locale: th })}</span>
        </>
      )}
      {courseData?.subject?.name && (
        <>
          <span>•</span>
          <span>{courseData?.subject?.name}</span>
        </>
      )}
      {courseData?.basePlanType && (
        <>
          <span>•</span>
          <span>{BASE_PLAN_TYPE_TH[courseData?.basePlanType]}</span>
        </>
      )}
    </div>
  )
}

export const COURSE_TYPE_ICON = {
  [LiveCourseType.LIVE]: faSignalStream,
  [LiveCourseType.ONSITE]: faScreenUsers,
  [LiveCourseType.TAPE]: faFilm,
  [LiveCourseType.FUSION]: faScreenUsers,
}

export const COURSE_TYPE_EN = {
  [LiveCourseType.LIVE]: 'Live',
  [LiveCourseType.ONSITE]: 'On-site',
  [LiveCourseType.TAPE]: 'Online',
  [LiveCourseType.FUSION]: 'Fusion',
}

export const BASE_PLAN_TYPE_TH = {
  [BasePlanType.FOUNDATION]: 'ปรับพื้นฐาน',
  [BasePlanType.CORE]: 'เนื้อหา',
  [BasePlanType.ENTRANCE]: 'สอบเข้า',
  [BasePlanType.ONET]: 'O-NET',
  [BasePlanType.POSN]: 'สอวน.',
}
