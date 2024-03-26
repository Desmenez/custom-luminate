import { RefObject, useRef } from 'react'

import { withApi } from '@app/core/services'
import { extendFieldsItem } from '@app/utils/extend-fields'
import { getCoursePrice, getFullPrice } from '@app/utils/get-course-price'
import { useRouter } from 'next/router'

import { LiveCourse, LiveCourseType } from '@luminate/database'
import { throwFromResponse } from '@luminate/nextjs'
import { withSSRError } from '@luminate/nextjs'
import { CourseJsonLd, NextSeo } from '@luminate/seo'

import { CourseDetailLayout } from './layout'
import { AboutSection } from './sections/about-section'
import { AdditionalCoursesSection } from './sections/additional-courses-section'
import {
  DynamicSectionDesktop,
  DynamicSectionFloating,
  DynamicSectionProps,
} from './sections/dynamic-section'
import { ExamSection, ExamSectionProps } from './sections/exam-section'
import { ImageDescriptionSection } from './sections/image-description'
import { LessonSection } from './sections/lesson-section'
import { mapToLessonSectionProps } from './sections/lesson-section/mapping'
import { PageHeaderSection, PageHeaderSectionProps } from './sections/page-header-section'
import { ReviewSection } from './sections/review-section'
import { TabSection, TabSectionProps, TabSectionRef } from './sections/tab-section'
import { TutorProfileSection, TutorProfileSectionProps } from './sections/tutor-profile-section'

export const CourseDetailPage = withSSRError<typeof getServerSideProps>((props) => {
  const { course, userStatus, rating } = props

  const router = useRouter()

  const headerProps: PageHeaderSectionProps = {
    type: course.type,
    name: course.name,
    courseHeroUrl: course.courseHeroUrl,
    courseHeroMobileUrl: course.courseHeroMobileUrl,
    startDate: course.startDate,
    endDate: course.endDate,
    registrationDeadline: course.lastEnrollmentDate,
    description: course.description,
    ratingStars: rating,
    features: course.features,
  }

  const aboutProps = {
    type: course.type,
    registrationDeadline: course.lastEnrollmentDate,
    onsiteAddress: course.onsiteAddress,
    pickupAddress: course.pickupAddress,
    aboutCourse: course.aboutCourse,
    expiresAt: course.expiresAt,
    liveCourseOnUser: course.liveCourseOnUser,
    ...userStatus,
  }
  const upcomingSession =
    course.liveSessions.find((session) => new Date(session.endTime) > new Date()) ?? null
  const dynamicSectionProps: DynamicSectionProps = {
    courseId: course.id,
    name: course.name,
    type: course.type,
    fullPrice: getFullPrice(course),
    price: getCoursePrice(course),
    isTrialAvailable: isTrialAvailable(course, upcomingSession !== null),
    startDate: course.startDate,
    endDate: course.endDate,
    registrationDeadline: course.lastEnrollmentDate,
    isEnrolled: userStatus.isEnrolled,
    upcomingSession: userStatus.isEnrolled ? upcomingSession : null,
    expiresAt: course.expiresAt,
  }
  const dynamicSectionDesktopRef = useRef<HTMLDivElement>(null)

  const tutorSectionProps: TutorProfileSectionProps = {
    tutor: {
      name: course.tutor?.name ?? '',
      tutorIconUrl: course.tutor?.tutorIconUrl ?? '',
      tutorFileUrl: course.tutor?.tutorFileUrl ?? '',
      experience: course.tutor?.experience ?? '',
      organization: {
        name: course.tutor?.organizationName ?? '',
      },
    },
    subject: course.subject!,
    chatRooms: course.chatRooms,
  }

  const examSectionProps: ExamSectionProps = {
    courseType: course.type,
    courseId: course.id,
    examTutorial: {
      onlyForSubscribed: course.examTutorialRequiresSubscription,
      items: course.examTutorials.map((examTutorial) => ({
        id: examTutorial.id,
        title: examTutorial.name,
        link: `https://monkeyeveryday.com/plan/preview?planId=${examTutorial.id}`,
      })),
    },
    exam: {
      onlyForSubscribed: course.examRequiresSubscription,
      items: course.exams.map((exam) => ({
        id: exam.code,
        title: exam.name,
        link: `https://monkeyeveryday.com/exam/intro/${exam.code}`,
      })),
    },
    mockExam: {
      items: course.mockExams.map((mockExam) => ({
        id: mockExam.id,
        title: mockExam.name,
        link: mockExam.url,
      })),
    },
    ...userStatus,
  }

  const showImageDescriptionSection =
    course.type === LiveCourseType.ONSITE && course.liveCourseImageDescription.length > 0
  const showLessonSection = course.type !== LiveCourseType.ONSITE
  const showExamSection =
    course.examTutorials.length > 0 || course.exams.length > 0 || course.mockExams.length > 0
  const showSuggestedCoursesSection = course.suggestedNextCourses.length > 0
  const showFundamentalCoursesSection = course.suggestedPrerequisiteCourses.length > 0

  const tutorProfileSectionRef = useRef<HTMLDivElement>(null)
  const imageDescriptionSectionRef = useRef<HTMLDivElement>(null)
  const lessonSectionRef = useRef<HTMLDivElement>(null)
  const examSectionRef = useRef<HTMLDivElement>(null)
  const reviewSectionRef = useRef<HTMLDivElement>(null)
  const suggestedCoursesSectionRef = useRef<HTMLDivElement>(null)
  const fundamentalCoursesSectionRef = useRef<HTMLDivElement>(null)

  const tabs: TabSectionProps['tabs'] = []
  tabs.push({
    title: 'ผู้สอน',
    refs: [tutorProfileSectionRef],
  })
  if (showImageDescriptionSection) {
    tabs.push({ title: 'รายละเอียด', refs: [imageDescriptionSectionRef] })
  }
  if (showLessonSection) {
    tabs.push({
      title: 'เนื้อหาและตารางเรียน',
      refs: [lessonSectionRef],
    })
  }
  if (showExamSection) {
    tabs.push({
      title: 'ข้อสอบ',
      refs: [examSectionRef],
    })
  }
  tabs.push({
    title: 'รีวิวจากผู้เรียน',
    refs: [reviewSectionRef],
  })
  if (showSuggestedCoursesSection || showFundamentalCoursesSection) {
    tabs.push({
      title: 'คอร์สแนะนำ',
      refs: [suggestedCoursesSectionRef, fundamentalCoursesSectionRef],
    })
  }

  const tabSectionRef = useRef<TabSectionRef>(null)
  function scrollToRef(ref: RefObject<HTMLElement>) {
    if (!ref.current) return
    tabSectionRef.current?.scrollTo(ref.current)
  }

  return (
    <>
      <NextSeo title={course.name} />
      <CourseJsonLd
        courseName={course.name}
        description={course.description}
        provider={{
          type: 'Organization',
          name: 'MonkeyEveryday',
          url: router.asPath,
        }}
      />
      <CourseDetailLayout
        top={
          <>
            <PageHeaderSection
              onClickStars={() => scrollToRef(reviewSectionRef)}
              {...headerProps}
            />
            <DynamicSectionDesktop
              ref={dynamicSectionDesktopRef}
              onClickStartTrial={() => scrollToRef(lessonSectionRef)}
              {...dynamicSectionProps}
            />
            <TabSection ref={tabSectionRef} tabs={tabs} />
          </>
        }
        left={
          <>
            <TutorProfileSection ref={tutorProfileSectionRef} {...tutorSectionProps} />
            {showImageDescriptionSection && (
              <ImageDescriptionSection
                ref={imageDescriptionSectionRef}
                images={course.liveCourseImageDescription}
              />
            )}
            {showLessonSection && (
              <LessonSection
                ref={lessonSectionRef}
                {...mapToLessonSectionProps(userStatus, course)}
              />
            )}
            {showExamSection && <ExamSection ref={examSectionRef} {...examSectionProps} />}
            <AboutSection className="lg:hidden" {...aboutProps} />
            <ReviewSection
              ref={reviewSectionRef}
              courseId={course.id}
              courseType={course.type}
              {...userStatus}
            />
            {showSuggestedCoursesSection && (
              <AdditionalCoursesSection
                ref={suggestedCoursesSectionRef}
                title="คอร์สแนะนำต่อจากคอร์สนี้"
                courses={course.suggestedNextCourses}
              />
            )}
            {showFundamentalCoursesSection && (
              <AdditionalCoursesSection
                ref={fundamentalCoursesSectionRef}
                title="คอร์สปูพื้นฐานสำหรับคอร์สนี้"
                courses={course.suggestedPrerequisiteCourses}
              />
            )}
          </>
        }
        right={<AboutSection {...aboutProps} />}
        bottom={
          <DynamicSectionFloating
            desktopRef={dynamicSectionDesktopRef}
            onClickStartTrial={() => scrollToRef(lessonSectionRef)}
            {...dynamicSectionProps}
          />
        }
      />
    </>
  )
})

export const getServerSideProps = withApi(async (context, api) => {
  const courseId = context.query.courseId as string
  const data = await extendFieldsItem(
    {},
    async () => {
      return {
        course: await api.liveCourse.getLiveCourseById({ params: { id: courseId } }),
      }
    },
    async () => {
      return {
        rating: await api.liveCourse.getLiveCourseCommentsTotalAndRating({
          params: { liveCourseId: courseId },
        }),
      }
    }
  )
  if (data.course.status !== 200) throwFromResponse(data.course)
  if (data.rating.status !== 200) throwFromResponse(data.rating)

  const { liveSessions, userStatus, ...course } = data.course.body
  const courseResult = {
    ...course,
    liveSessions: liveSessions.map((session, index) => ({ index: index + 1, ...session })),
  } as const

  return {
    props: {
      course: courseResult,
      userStatus,
      rating: Number(data.rating.body.rating),
    },
  }
})

function isTrialAvailable(
  course: Pick<LiveCourse, 'type' | 'onlinePrice'>,
  hasUpcomingSession: boolean
) {
  switch (course.type) {
    case LiveCourseType.LIVE:
      return hasUpcomingSession
    case LiveCourseType.FUSION:
      return course.onlinePrice !== null && hasUpcomingSession
    case LiveCourseType.ONSITE:
      return false
    case LiveCourseType.TAPE:
      return true
  }
}
