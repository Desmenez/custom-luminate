import { LiveCourseType } from '@luminate/database'
import { TutorCourseDetail } from '@luminate/rest'

import {
  CourseDetailSection,
  CourseDetailSectionTitle,
} from '../../components/course-detail-section'
import { Lesson } from './lesson'

export interface LessonSectionProps {
  course: TutorCourseDetail
}

export function LessonSection({ course }: LessonSectionProps) {
  return (
    <CourseDetailSection>
      <CourseDetailSectionTitle>ตารางเรียน</CourseDetailSectionTitle>
      {course.liveSessions.map((session) => (
        <Lesson
          key={session.id}
          session={session}
          isTape={course.startDate === LiveCourseType.ONSITE}
        />
      ))}
      {course.liveSessions.length === 0 && <EmptyState />}
    </CourseDetailSection>
  )
}

function EmptyState() {
  return (
    <div className="w-full h-48 flex flex-col p-4 rounded-lg bg-gray-900 border border-dashed">
      <div className="flex-1 flex flex-col items-center justify-center gap-2 text-gray-700">
        <span>ยังไม่มีตารางเรียน</span>
      </div>
    </div>
  )
}
