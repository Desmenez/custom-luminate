import { useEffect, useRef, useState } from 'react'

import { ContinueCourseCard, DefaultHoverCard, LiveCourseCard } from '@app/components/course-card'
import { EmptyCourseCard } from '@app/components/course-card/empty-course-card'
import { canContinue, isLiving } from '@app/components/course-card/utils'
import { GradientBackground } from '@app/components/gradient-background'
import { withApi } from '@app/core/services'
import * as Tabs from '@radix-ui/react-tabs'
import NextImage from 'next/image'

import { throwFromResponse } from '@luminate/nextjs'
import { withSSRError } from '@luminate/nextjs'
import {
  ExpiredCoursePreview,
  GetMyExpiredCoursesResponse,
  MyLiveCourseForPreview,
} from '@luminate/rest'
import { NextSeo } from '@luminate/seo'
import { Tab } from '@luminate/ui'

const MyCoursePage = withSSRError<typeof getServerSideProps>((props) => {
  return (
    <div className="relative flex-1">
      <GradientBackground />
      <div className="container my-6 lg:mt-14 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-semibold text-center lg:text-left">คอร์สของฉัน</h1>
      </div>
      <MyCourseSection myCourses={props.myCourses} myExpiredCourses={props.myExpiredCourses} />
    </div>
  )
})

interface MyCourseSectionProps {
  myCourses: MyLiveCourseForPreview[]
  myExpiredCourses: GetMyExpiredCoursesResponse
}

const MyCourseSection = ({ myCourses, myExpiredCourses }: MyCourseSectionProps) => {
  const tabs = [
    {
      value: 'live',
      title: 'กำลังถ่ายทอดสด',
      courses: myCourses
        .filter((courseData) => isLiving(courseData))
        .map((courseData) => (
          <LiveCourseCard key={courseData.id} courseData={courseData} responsive />
        )),
    },
    {
      value: 'continue',
      title: 'บทเรียนที่ดูค้างไว้',
      courses: myCourses
        .filter((courseData) => canContinue(courseData))
        .map((courseData) => (
          <ContinueCourseCard key={courseData.id} courseData={courseData} responsive />
        )),
    },
    {
      value: 'all',
      title: `คอร์สทั้งหมด (${myCourses.length})`,
      courses:
        myCourses.length === 0
          ? [<EmptyCourseCard key={0} />]
          : myCourses.map((courseData) => (
              <DefaultHoverCard key={courseData.id} courseData={courseData} responsive />
            )),
    },
    {
      value: 'expired',
      title: 'คอร์สที่หมดอายุแล้ว',
      className: 'ml-auto',
      courses: myExpiredCourses.map((courseData) => (
        <ExpiredCourseCard key={courseData.id} courseData={courseData} />
      )),
    },
  ].filter((tab) => tab.courses.length > 0)

  const [isStuck, setIsStuck] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function update() {
      if (!containerRef.current) return
      const navbarHeightVar = getComputedStyle(document.documentElement).getPropertyValue(
        '--navbar'
      )
      const navbarHeight = navbarHeightVar.endsWith('px')
        ? parseInt(navbarHeightVar.slice(0, -2))
        : 64

      const { top: selfTop } = containerRef.current.getBoundingClientRect()
      setIsStuck(selfTop <= navbarHeight)
    }
    update()
    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return (
    <>
      <NextSeo title="คอร์สของฉัน" />
      <Tabs.Root defaultValue={tabs[0].value}>
        <section
          ref={containerRef}
          className="sticky top-[var(--navbar)] border-b stuck:border-transparent bg-gray-950/80 backdrop-blur-md lg:not-stuck:bg-transparent transition-colors z-10"
          data-stuck={isStuck}
        >
          <Tabs.TabsList asChild>
            <Tab.List className="container max-lg:px-2 flex">
              {tabs.map((tab) => (
                <Tabs.Trigger key={tab.value} value={tab.value} asChild>
                  <Tab.Button className={tab.className}>{tab.title}</Tab.Button>
                </Tabs.Trigger>
              ))}
            </Tab.List>
          </Tabs.TabsList>
        </section>

        {tabs.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value} className="container py-8 lg:py-14">
            <h2 className="text-lg lg:text-xl font-semibold mb-8 lg:mb-4">{tab.title}</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {tab.courses}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  )
}

interface ExpiredCourseCardProps {
  courseData: ExpiredCoursePreview
}
function ExpiredCourseCard({ courseData }: ExpiredCourseCardProps) {
  return (
    <div className="relative w-[220px] h-[296px] bg-gray-950 rounded-lg">
      <NextImage
        alt={courseData.name}
        src={courseData.courseThumbnailUrl ?? ''}
        width={220}
        height={296}
        className="object-cover bg-accent rounded-lg shadow-lg opacity-60"
      />
      <span className="absolute top-1 right-1 rounded-lg px-2 py-1 bg-gray-50 text-gray-800 font-semibold text-xs">
        หมดอายุ
      </span>
    </div>
  )
}

export const getServerSideProps = withApi(async (_, api) => {
  const [myCoursesResult, myExpiredCoursesResult] = await Promise.all([
    api.liveCourse.getMyCourses(),
    api.liveCourse.getMyExpiredCourses(),
  ])
  if (myCoursesResult.status === 200) {
    if (myExpiredCoursesResult.status === 200) {
      return {
        props: {
          myCourses: myCoursesResult.body,
          myExpiredCourses: myExpiredCoursesResult.body,
        },
      }
    }
    console.error(myExpiredCoursesResult)
    return {
      props: {
        myCourses: myCoursesResult.body,
        myExpiredCourses: [],
      },
    }
  } else {
    console.error(myCoursesResult)
    throwFromResponse(myCoursesResult)
  }
})

export default MyCoursePage
