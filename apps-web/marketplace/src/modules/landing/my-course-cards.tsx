import MyCourseBackground from '@app/assets/landing-my-course-bg.svg?url'
import { ContinueCourseCard, DefaultHoverCard, LiveCourseCard } from '@app/components/course-card'
import { CourseCardSlider } from '@app/components/course-card/course-card-slider'
import { EmptyCourseCard } from '@app/components/course-card/empty-course-card'
import { canContinue, isLiving } from '@app/components/course-card/utils'
import { faSmile } from '@fortawesome/pro-regular-svg-icons'
import 'keen-slider/keen-slider.min.css'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { GetMyCoursesResponse } from '@luminate/rest'
import { FontAwesomeIcon } from '@luminate/ui'

interface MyCourseCardsProps {
  myCourses: GetMyCoursesResponse | null
}

export const MyCourseCards = ({ myCourses }: MyCourseCardsProps) => {
  if (!myCourses) {
    return null
  }
  return (
    <section className="py-8 laptop:py-14 border-t border-gray-700 relative">
      <NextImage src={MyCourseBackground} alt="" fill className="object-cover -z-10" />
      <section className="px-4 laptop:px-14 flex items-center justify-between mb-8 laptop:mb-4">
        <div className="flex items-center gap-2 laptop:gap-4">
          <FontAwesomeIcon icon={faSmile} className="h-5 w-5 laptop:h-10 laptop:w-10" />
          <h3 className="text-lg laptop:text-3xl font-semibold">MY COURSE</h3>
        </div>
        <NextLink href="/my-course">ดูทั้งหมด ({myCourses.length})</NextLink>
      </section>
      {myCourses.length > 0 ? (
        <CourseCardSlider padded>
          {myCourses.map((courseData) => {
            const isLive = isLiving(courseData)
            const shouldContinue = canContinue(courseData)
            if (isLive) {
              return <LiveCourseCard key={courseData.id} courseData={courseData} />
            }
            if (shouldContinue) {
              return <ContinueCourseCard key={courseData.id} courseData={courseData} />
            }
            return <DefaultHoverCard key={courseData.id} courseData={courseData} />
          })}
        </CourseCardSlider>
      ) : (
        <EmptyCourseCard className="mx-4 lg:mx-14" />
      )}
    </section>
  )
}
