import React, { forwardRef } from 'react'

import { faChalkboard } from '@fortawesome/pro-regular-svg-icons'
import { faMarker } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon } from '@luminate/ui'

import {
  CourseDetailSection,
  CourseDetailSectionTitle,
} from '../../components/course-detail-section'
import { SectionProps } from '../../types/section'
import { ExamAccordion, ExamAccordionProps } from './accordion'
import { ExamItemOption } from './types'

export interface ExamSectionProps extends SectionProps {
  courseId: string
  exam: {
    items: ExamItemOption[]
    onlyForSubscribed?: boolean
  } // TODO: Should infer from server
  examTutorial: {
    items: ExamItemOption[]
    onlyForSubscribed?: boolean
  } // TODO: Should infer from server
  mockExam: {
    items: ExamItemOption[]
    onlyForSubscribed?: boolean // Note: This is always false
  } // TODO: Should infer from server
}

export const ExamSection = forwardRef<HTMLDivElement, ExamSectionProps>(function ExamSection(
  { courseId, exam, examTutorial, mockExam, isSubscribed = false, isEnrolled = false },
  ref
) {
  const hasExams = exam.items.length > 0
  const hasExamTutorials = examTutorial.items.length > 0
  const hasMockExams = mockExam.items.length > 0

  /**
   * To enable the button, the condition is:
   * | isEnrolled | isSubscribed | onlyForSubscribed | Enable |
   * | ---------- | ------------ | ----------------- | ------ |
   * | -          | true         | -                 | true   |
   * | true       | false        | true              | false  |
   * | true       | false        | false             | true   |
   * | false      | -            | -                 | false  |
   */
  const shouleEnableExam = (
    isEnrolled: boolean,
    isSubscribed: boolean,
    onlyForSubscribed: boolean = false
  ) => {
    if (!isEnrolled) return false
    if (isSubscribed) return true
    return !onlyForSubscribed
  }

  const examOptions: ExamAccordionProps = {
    courseId,
    title: 'ข้อสอบ',
    items: exam.items,
    buttonProps: {
      children: 'ทำข้อสอบ',
      disabled: !shouleEnableExam(isEnrolled, isSubscribed, exam.onlyForSubscribed),
      leftIcon: <FontAwesomeIcon icon={faMarker} className="h-4 w-4" />,
    },
  }

  const examCourseOptions: ExamAccordionProps = {
    courseId,
    title: 'คอร์สตะลุยข้อสอบ',
    items: examTutorial.items,
    buttonProps: {
      children: 'เข้าห้องเรียน',
      disabled: !shouleEnableExam(isEnrolled, isSubscribed, examTutorial.onlyForSubscribed),
      leftIcon: <FontAwesomeIcon icon={faChalkboard} className="h-4 w-4" />,
    },
  }

  const mockExamOptions: ExamAccordionProps = {
    courseId,
    title: 'ข้อสอบจำลอง (Mock Exam)',
    items: mockExam.items,
    buttonProps: {
      children: 'สมัครเลย',
      disabled: false, // Always enable
    },
  }

  return (
    <CourseDetailSection ref={ref}>
      <CourseDetailSectionTitle>ข้อสอบที่เกี่ยวข้อง</CourseDetailSectionTitle>
      {hasExams && <ExamAccordion {...examOptions} />}
      {hasExamTutorials && <ExamAccordion {...examCourseOptions} />}
      {hasMockExams && <ExamAccordion {...mockExamOptions} />}
    </CourseDetailSection>
  )
})
