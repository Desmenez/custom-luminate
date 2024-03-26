import { forwardRef } from 'react'

import { LiveCourseType } from '@luminate/database'

import {
  CourseDetailSection,
  CourseDetailSectionTitle,
} from '../../components/course-detail-section'
import { FundamentalSubsection } from './components/fundamental-subsection'
import { TimetableSubsection } from './components/timetable-subsection'
import { LessonSectionProps } from './types'

export const LessonSection = forwardRef<HTMLDivElement, LessonSectionProps>(function LessonSection(
  { courseType, fundamental, timetable },
  ref
) {
  if (courseType === LiveCourseType.ONSITE) return null

  return (
    <CourseDetailSection ref={ref}>
      <CourseDetailSectionTitle>เนื้อหาและตารางเรียน</CourseDetailSectionTitle>
      <FundamentalSubsection {...fundamental} />
      <CourseDetailSectionTitle>
        {courseType === LiveCourseType.TAPE ? 'ตารางเรียน' : 'ตารางเรียนสด'}
      </CourseDetailSectionTitle>
      {timetable && <TimetableSubsection {...timetable} />}
    </CourseDetailSection>
  )
})
