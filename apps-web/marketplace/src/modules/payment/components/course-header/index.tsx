import { CourseTypeChip } from '@app/components/course-type-chip'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'

import { LiveCourseType } from '@luminate/database'

export interface CourseHeaderProps {
  name: string
  type: LiveCourseType
  courseCoverUrl: string | null
  courseStickerUrl: string | null
  startDate: string
  endDate: string
  registrationDeadline: string | null
  price: number
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return format(date, 'dd MMM yyyy', { locale: th })
}

export function CourseHeader(props: CourseHeaderProps) {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
      {/* Course cover */}
      <div className="relative w-[128px] lg:w-[220px] rounded-lg overflow-hidden">
        <div className="pt-[56.36363636%]" />
        <img className="absolute inset-0" src={props.courseCoverUrl ?? undefined} />
        <div className="absolute left-0 right-0 top-1/2 bottom-0 bg-gradient-to-b from-gray-900/0 to-gray-900" />
        <img
          className="absolute bottom-0 right-0 w-[54.54545454%]"
          src={props.courseStickerUrl ?? undefined}
        />
      </div>
      {/* Other info */}
      <div className="flex flex-col gap-2">
        {/* Course name and price */}
        <div className="flex flex-row lg:flex-col font-sans font-semibold text-base leading-normal text-gray-50 lg:text-2xl">
          <h1 className="leading-normal">{props.name}</h1>
        </div>
        {/* Course type and dates */}
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
          <span className="flex flex-row">
            <CourseTypeChip type={props.type} />
          </span>
          <p className="font-sans font-normal text-sm leading-normal text-gray-500">
            {formatDate(props.startDate)} - {formatDate(props.endDate)}
            {props.registrationDeadline
              ? ` (ปิดรับสมัคร ${formatDate(props.registrationDeadline)})`
              : null}
          </p>
        </div>
      </div>
    </div>
  )
}
