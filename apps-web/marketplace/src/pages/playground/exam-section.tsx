import { ExamSection, ExamSectionProps } from '@app/modules/course-detail/sections/exam-section'

import { CustomNextPage } from '@luminate/nextjs'

const ExamSectionPage: CustomNextPage = () => {
  const sectionProps: ExamSectionProps = {
    courseType: 'LIVE',
    courseId: '1',
    isSubscribed: false,
    isEnrolled: false,
    isAuthenticated: false,
    examTutorial: {
      onlyForSubscribed: true,
      items: [
        { id: '1', title: 'ข้อสอบย้อนหลังปี 65', link: 'https://google.com' },
        { id: '2', title: 'ข้อสอบย้อนหลังปี 64', link: 'https://google.com' },
      ],
    },
    exam: {
      onlyForSubscribed: true,
      items: [
        { id: '1', title: 'ข้อสอบย้อนหลังปี 65', link: 'https://google.com' },
        { id: '2', title: 'ข้อสอบย้อนหลังปี 64', link: 'https://google.com' },
      ],
    },
    mockExam: {
      items: [
        { id: '1', title: 'สมัคร Mock Exam ปี 66', link: 'https://google.com' },
        { id: '2', title: 'สมัคร Mock Exam ปี 65', link: 'https://google.com' },
      ],
    },
  }

  return (
    <div className="max-w-lg w-full m-auto">
      <ExamSection {...sectionProps} />
    </div>
  )
}

ExamSectionPage.hideFooter = true
ExamSectionPage.hideNavbar = true

export default ExamSectionPage
