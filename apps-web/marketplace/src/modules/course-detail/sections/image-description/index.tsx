import { forwardRef } from 'react'

import { LiveCourseImageDescription } from '@luminate/database'

import {
  CourseDetailSection,
  CourseDetailSectionTitle,
} from '../../components/course-detail-section'

export interface ImageDescriptionSectionProps {
  images: LiveCourseImageDescription[]
}

export const ImageDescriptionSection = forwardRef<HTMLDivElement, ImageDescriptionSectionProps>(
  function ImageDescriptionSection(props, ref) {
    return (
      <CourseDetailSection ref={ref}>
        <CourseDetailSectionTitle>รายละเอียด</CourseDetailSectionTitle>
        {props.images.map((image) => (
          <img
            key={image.id}
            src={image.imageUrl!}
            className="w-full h-auto border border-gray-700 rounded-lg"
          />
        ))}
      </CourseDetailSection>
    )
  }
)
