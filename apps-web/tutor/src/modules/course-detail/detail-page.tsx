import { GradientBackground } from '@app/components/gradient-background'
import { withApi } from '@app/core/services'

import { LiveCourseType } from '@luminate/database'
import { NotFoundError, throwFromResponse, withSSRError } from '@luminate/nextjs'
import { NextSeo } from '@luminate/seo'

import { LessonSection } from './sections/lesson-section'
import { PageHeaderSection } from './sections/page-header-section'

const TutorCourseDetailPage = withSSRError<typeof getServerSideProps>(({ course }) => {
  return (
    <div className="relative flex-1 flex flex-col gap-6">
      <NextSeo title={course.name} />
      <GradientBackground />
      <PageHeaderSection
        type={course.type}
        name={course.name}
        courseHeroUrl={course.courseHeroUrl}
        courseHeroMobileUrl={course.courseHeroMobileUrl}
        startDate={course.startDate}
        endDate={course.endDate}
        description={course.description}
      />
      <div className="container flex flex-col gap-2 lg:gap-6 mb-2 lg:mb-6">
        {course.type !== LiveCourseType.ONSITE ? <LessonSection course={course} /> : null}
      </div>
    </div>
  )
})

export const getServerSideProps = withApi(async (context, api) => {
  const courseId = context.query.courseId as string
  const course = await api.liveCourse.getTutorCourseDetail({ params: { id: courseId } })
  if (course.status !== 200) throwFromResponse(course)
  if (course.body === null) throw new NotFoundError()

  return {
    props: {
      course: course.body,
    },
  }
})

export default TutorCourseDetailPage
