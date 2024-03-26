import { DynamicSectionDesktop } from '@app/modules/course-detail/sections/dynamic-section'
import { addDays, addMinutes } from 'date-fns'

import { LiveCourseType } from '@luminate/database'

export default function PlaygroundDynamicSection() {
  return (
    <div className="mb-8">
      <div className="container mt-8">Not enrolled</div>
      <DynamicSectionDesktop
        className="max-lg:block"
        courseId={'liveCourse1'}
        isTrialAvailable={true}
        name={
          'คอร์สสดพิชิต เคมี สอวน.คอร์สสดพิชิต เคมี สอวน.คอร์ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด'
        }
        type={LiveCourseType.TAPE}
        fullPrice={4000}
        price={1000}
        startDate={new Date().toISOString()}
        endDate={new Date().toISOString()}
        registrationDeadline={new Date().toISOString()}
        isEnrolled={false}
      />
      <div className="container mt-8">Upcoming, far</div>
      <DynamicSectionDesktop
        className="max-lg:block"
        courseId={'liveCourse1'}
        isTrialAvailable={true}
        name={
          'คอร์สสดพิชิต เคมี สอวน.คอร์สสดพิชิต เคมี สอวน.คอร์ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด'
        }
        type={LiveCourseType.LIVE}
        fullPrice={4000}
        price={1000}
        startDate={new Date().toISOString()}
        endDate={new Date().toISOString()}
        registrationDeadline={new Date().toISOString()}
        isEnrolled={true}
        upcomingSession={{
          index: 1,
          id: 'liveSession1',
          startTime: addMinutes(new Date(), 120).toISOString(),
          endTime: addMinutes(new Date(), 240).toISOString(),
        }}
        expiresAt={addDays(new Date(), 7).toISOString()}
      />
      <div className="container mt-8">Upcoming, near</div>
      <DynamicSectionDesktop
        className="max-lg:block"
        courseId={'liveCourse1'}
        isTrialAvailable={true}
        name={
          'คอร์สสดพิชิต เคมี สอวน.คอร์สสดพิชิต เคมี สอวน.คอร์ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด'
        }
        type={LiveCourseType.LIVE}
        fullPrice={4000}
        price={1000}
        startDate={new Date().toISOString()}
        endDate={new Date().toISOString()}
        registrationDeadline={new Date().toISOString()}
        isEnrolled={true}
        upcomingSession={{
          index: 1,
          id: 'liveSession1',
          startTime: addMinutes(new Date(), 10).toISOString(),
          endTime: addMinutes(new Date(), 130).toISOString(),
        }}
        expiresAt={addDays(new Date(), 7).toISOString()}
      />
      <div className="container mt-8">Upcoming, passed</div>
      <DynamicSectionDesktop
        className="max-lg:block"
        courseId={'liveCourse1'}
        isTrialAvailable={true}
        name={
          'คอร์สสดพิชิต เคมี สอวน.คอร์สสดพิชิต เคมี สอวน.คอร์ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด'
        }
        type={LiveCourseType.LIVE}
        fullPrice={4000}
        price={1000}
        startDate={new Date().toISOString()}
        endDate={new Date().toISOString()}
        registrationDeadline={new Date().toISOString()}
        isEnrolled={true}
        upcomingSession={{
          index: 1,
          id: 'liveSession1',
          startTime: addMinutes(new Date(), -10).toISOString(),
          endTime: addMinutes(new Date(), 110).toISOString(),
        }}
        expiresAt={addDays(new Date(), 7).toISOString()}
      />
      <div className="container mt-8">Enrolled with expiration</div>
      <DynamicSectionDesktop
        className="max-lg:block"
        courseId={'liveCourse1'}
        isTrialAvailable={true}
        name={
          'คอร์สสดพิชิต เคมี สอวน.คอร์สสดพิชิต เคมี สอวน.คอร์ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด'
        }
        type={LiveCourseType.LIVE}
        fullPrice={4000}
        price={1000}
        startDate={new Date().toISOString()}
        endDate={new Date().toISOString()}
        registrationDeadline={new Date().toISOString()}
        isEnrolled={true}
        upcomingSession={null}
        expiresAt={addDays(new Date(), 7).toISOString()}
      />
      <div className="container mt-8">Enrolled with expiration, tape</div>
      <DynamicSectionDesktop
        className="max-lg:block"
        courseId={'liveCourse1'}
        isTrialAvailable={true}
        name={
          'คอร์สสดพิชิต เคมี สอวน.คอร์สสดพิชิต เคมี สอวน.คอร์ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด'
        }
        type={LiveCourseType.TAPE}
        fullPrice={4000}
        price={1000}
        startDate={new Date().toISOString()}
        endDate={new Date().toISOString()}
        registrationDeadline={new Date().toISOString()}
        isEnrolled={true}
        upcomingSession={null}
        expiresAt={addDays(new Date(), 7).toISOString()}
      />
      <div className="container mt-8">Expired</div>
      <DynamicSectionDesktop
        className="max-lg:block"
        courseId={'liveCourse1'}
        isTrialAvailable={true}
        name={
          'คอร์สสดพิชิต เคมี สอวน.คอร์สสดพิชิต เคมี สอวน.คอร์ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด'
        }
        type={LiveCourseType.TAPE}
        fullPrice={4000}
        price={1000}
        startDate={new Date().toISOString()}
        endDate={new Date().toISOString()}
        registrationDeadline={new Date().toISOString()}
        isEnrolled={true}
        upcomingSession={null}
        expiresAt={addDays(new Date(), -7).toISOString()}
      />
    </div>
  )
}
