import { ReviewSection } from '@app/modules/course-detail/sections/review-section'

import { CustomNextPage } from '@luminate/nextjs'

const ReviewSectionPage: CustomNextPage = () => {
  return (
    <ReviewSection
      courseId="liveCourse1"
      isAuthenticated
      isEnrolled
      isSubscribed
      courseType="LIVE"
    />
  )
}

ReviewSectionPage.hideNavbar = false
ReviewSectionPage.hideFooter = false

export default ReviewSectionPage
