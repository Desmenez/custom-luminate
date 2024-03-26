import { LiveCourseType } from '@luminate/database'

export interface SectionProps {
  // TODO: make this properly. This is just mock
  courseId: string
  courseType: LiveCourseType
  isAuthenticated: boolean
  isEnrolled: boolean
  isSubscribed: boolean
}
