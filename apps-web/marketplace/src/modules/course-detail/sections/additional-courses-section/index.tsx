import { forwardRef } from 'react'

import { DefaultHoverCard } from '@app/components/course-card'
import { CourseCardSlider } from '@app/components/course-card/course-card-slider'

import { LiveCourseForPreview } from '@luminate/rest'

import {
  CourseDetailSection,
  CourseDetailSectionTitle,
} from '../../components/course-detail-section'

export interface AdditionalCoursesSectionProps {
  title: string
  courses: LiveCourseForPreview[]
}

export const AdditionalCoursesSection = forwardRef<HTMLDivElement, AdditionalCoursesSectionProps>(
  function AdditionalCoursesSection({ title, courses }, ref) {
    return (
      <CourseDetailSection ref={ref}>
        <CourseDetailSectionTitle>{title}</CourseDetailSectionTitle>
        <CourseCardSlider>
          {courses.map((courseData) => (
            <DefaultHoverCard key={courseData.id} courseData={courseData} />
          ))}
        </CourseCardSlider>
      </CourseDetailSection>
    )
  }
)
