import { CourseTypeChip } from '@app/components/course-type-chip'
import { formatAsDate } from '@app/utils/format-as-date'
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons'

import { TutorCourseForTable } from '@luminate/rest'
import { Button, FontAwesomeIcon, cn } from '@luminate/ui'

import { DailyChangePercent } from './columns'

type CourseTableMobileProps = {
  courses: TutorCourseForTable[]
  className?: string
}

export const CourseTableMobile = ({ courses, className }: CourseTableMobileProps) => {
  return (
    <div className={cn('flex flex-col items-stretch gap-y-4 w-full', className)}>
      {!courses.length ? (
        <div className="p-4 text-center font-semibold text-sm">ไม่มีคอร์สเรียน</div>
      ) : (
        courses.map((course) => (
          <div
            key={course.id}
            className="rounded-md border-gray-600 border flex flex-col p-2 gap-y-2"
          >
            <div className="inline-flex justify-between">
              <div>{course.name}</div>
              <CourseTypeChip type={course.type} />
            </div>
            <div className="inline-flex justify-between">
              <div className="text-gray-500">วันที่สร้าง</div>
              <div>{formatAsDate(course.createdAt)}</div>
            </div>
            <div className="inline-flex justify-between">
              <div className="text-gray-500">ระยะเวลาเรียน</div>
              <div>{`${formatAsDate(course.startDate)} - ${formatAsDate(course.endDate)}`}</div>
            </div>
            <div className="inline-flex justify-between">
              <div className="text-gray-500">จำนวนนักเรียน</div>
              <div className="inline-flex gap-4">
                <div>{course.enrolled}</div>
                <div>
                  <DailyChangePercent dailyChangePercent={course.dailyChangePercent} />
                </div>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                // TODO: go to course detail page
                console.log(`go to course ${course.id}`)
              }}
            >
              <span className="mr-2">ไปที่คอร์ส</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-yellow-400" />
            </Button>
          </div>
        ))
      )}
    </div>
  )
}
