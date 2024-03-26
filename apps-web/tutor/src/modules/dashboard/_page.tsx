import { useMemo, useState } from 'react'

import { GradientBackground } from '@app/components/gradient-background'
import { reactQueryClient, withApi } from '@app/core/services'
import { ParentSize } from '@visx/responsive'
import { startOfDay } from 'date-fns'
import dynamic from 'next/dynamic'

import { PageError, UnauthorizedError, withSSRError } from '@luminate/nextjs'
import { useMediaQuery } from '@luminate/react-hooks'
import { GetStudentGraphQuery } from '@luminate/rest'
import { NextSeo } from '@luminate/seo'
import { cn } from '@luminate/ui'

import { AreaGraphHeader } from './components/area-graph-header'
import { ResponsiveCourseTable } from './components/course-table'
import { DashboardSection } from './components/dashboard-section'
import { UpcomingSessionSection } from './components/upcoming-session'
import { PeriodType } from './types/period'

const LazyAreaGraph = dynamic(
  () => import('@app/modules/dashboard/components/area-graph').then((mod) => mod.AreaGraph),
  { ssr: false }
)

const DEFAULT_PERIOD_TYPE = PeriodType.MONTH

export const getServerSideProps = withApi(async (_, api) => {
  const me = await api.auth.me()
  if (me.body === null) {
    throw new UnauthorizedError()
  }

  const studentGraph = await api.tutor.getStudentGraph({
    query: {
      endDate: new Date(),
      days: parseInt(DEFAULT_PERIOD_TYPE) as GetStudentGraphQuery['days'],
    },
  })
  const upcomingSessions = await api.tutor.getUpcomingSessions()

  if (studentGraph.status !== 200 || upcomingSessions.status !== 200) {
    if (studentGraph.status !== 200) console.error(studentGraph.body)
    if (upcomingSessions.status !== 200) console.error(upcomingSessions.body)
    throw new PageError(400, 'เกิดข้อผิดพลาดบางอย่าง')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { headers: studentGraphHeaders, ...restStudentGraph } = studentGraph
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { headers: upcomingSessionsHeaders, ...restUpcomingSessions } = upcomingSessions

  return {
    props: {
      studentGraph: restStudentGraph,
      upcomingSessions: restUpcomingSessions,
    },
  }
})

const DashboardPage = withSSRError<typeof getServerSideProps>(
  ({ studentGraph: _studentGraph, upcomingSessions: _upcomingSessions }) => {
    const [periodType, setPeriodType] = useState<PeriodType>(DEFAULT_PERIOD_TYPE)
    const [endDate, setEndDate] = useState(new Date(_studentGraph.body.endDate))
    const [coursePages, setCoursePages] = useState(1)
    const isLgUp = useMediaQuery('lg-up')

    const take = isLgUp ? 10 : 5
    const skip = (coursePages - 1) * take

    const initialData = useMemo(() => {
      return {
        studentGraph: {
          ..._studentGraph,
          headers: {} as Headers,
        },
        upcomingSessions: {
          ..._upcomingSessions,
          headers: {} as Headers,
        },
      }
    }, [_studentGraph, _upcomingSessions])

    // Queries
    const { data: studentGraph = initialData.studentGraph } =
      reactQueryClient.tutor.getStudentGraph.useQuery(
        {
          query: {
            endDate: endDate,
            days: parseInt(periodType) as GetStudentGraphQuery['days'],
          },
        },
        { keepPreviousData: true }
      )
    const { data: upcomingSessions = initialData.upcomingSessions } =
      reactQueryClient.tutor.getUpcomingSessions.useQuery({})

    const { data: tutorCourses, isLoading: isTutorCoursesLoading } =
      reactQueryClient.liveCourse.getTutorCourses.useQuery(
        { query: { take: take, skip: skip } },
        { keepPreviousData: true }
      )

    const midDate = startOfDay(
      (new Date(studentGraph.body.endDate).getTime() +
        new Date(studentGraph.body.startDate).getTime()) /
        2
    ).toISOString()

    return (
      <>
        <NextSeo title="Dashboard" />
        <div className="relative flex flex-col gap-6  mb-12">
          {/* Header */}
          <GradientBackground />

          <DashboardSection.Root>
            <h1 className="font-semibold text-2xl lg:text-5xl px-2 pt-6 lg:p-0 lg:pt-14">
              Dashboard
            </h1>
          </DashboardSection.Root>

          {/* Upcomming session section */}
          <UpcomingSessionSection upcomingSessions={upcomingSessions.body} />

          {/* Dashboard section */}
          <DashboardSection.Root>
            <DashboardSection.Header className="block xl:hidden">
              สรุปภาพรวมนักเรียนที่สมัคร
            </DashboardSection.Header>
            <DashboardSection.Content className="flex flex-col rounded-b-lg xl:rounded-lg p-4 xl:p-6">
              <AreaGraphHeader
                endDate={endDate}
                onEndDateChange={setEndDate}
                periodType={periodType}
                onPeriodTypeChange={(value) => setPeriodType(value)}
                newStudentsIncreasePercent={studentGraph.body.newStudentsIncreasePercent}
                totalStudents={studentGraph.body.totalStudents}
              />
              {studentGraph.body.points.length > 0 && (
                <div
                  className={cn(
                    periodType === PeriodType.MONTH && 'overflow-x-scroll lg:overflow-visible'
                  )}
                >
                  <ParentSize
                    className={cn(
                      'flex-1 min-h-[400px] -mr-7',
                      periodType === PeriodType.MONTH && 'min-w-600'
                    )}
                    style={{ height: undefined }}
                  >
                    {({ width, height }) => {
                      if (width === 0) return null
                      return (
                        <LazyAreaGraph
                          width={periodType === PeriodType.MONTH ? Math.max(width, 600) : width}
                          height={height}
                          dataPoints={studentGraph.body.points}
                          selectedDataPointDate={
                            periodType === PeriodType.DAY ? midDate : undefined
                          }
                          domain={[
                            new Date(studentGraph.body.startDate),
                            startOfDay(new Date(studentGraph.body.endDate)),
                          ]}
                        />
                      )
                    }}
                  </ParentSize>
                </div>
              )}
            </DashboardSection.Content>
          </DashboardSection.Root>

          {/* All courses section */}
          <DashboardSection.Root>
            <DashboardSection.Header className="block lg:hidden">
              คอร์สทั้งหมด
            </DashboardSection.Header>
            <DashboardSection.Content className="flex flex-col rounded-b-lg lg:rounded-lg p-1 lg:p-6">
              {!isTutorCoursesLoading ? (
                <ResponsiveCourseTable
                  total={tutorCourses?.body.total ?? 0}
                  courses={tutorCourses?.body.courses ?? []}
                  totalPages={Math.ceil((tutorCourses?.body.total ?? 0) / take)}
                  page={coursePages}
                  onPageChanged={setCoursePages}
                />
              ) : (
                <div className="flex justify-center items-center h-96">Loading...</div> // TODO: add skeleton
              )}
            </DashboardSection.Content>
          </DashboardSection.Root>
        </div>
      </>
    )
  }
)

export default DashboardPage
