import { faBook, faCalendarClock, faPersonChalkboard } from '@fortawesome/pro-regular-svg-icons'
import { faSchool } from '@fortawesome/pro-solid-svg-icons'

import { LearningType, LiveCourseType, ReceiveMethod } from '@luminate/database'

import { CourseDetailSection } from '../../components/course-detail-section'
import { ExpiresAtSection } from './expires-at'
import { AboutSubsection, AboutSubsectionProps } from './subsection'
import { formatDate } from './utils'

export interface AboutSectionProps {
  className?: string
  type: LiveCourseType
  registrationDeadline: string | null
  onsiteAddress: string | null
  pickupAddress: string | null
  aboutCourse: string | null
  isEnrolled: boolean
  expiresAt: string | null
  liveCourseOnUser: {
    learningType: LearningType
    receiveMethod: ReceiveMethod | null
  } | null
}

export function AboutSection(props: AboutSectionProps) {
  const subsections: (AboutSubsectionProps & { key: string })[] = []
  if (props.aboutCourse) {
    subsections.push({
      key: 'about',
      icon: faSchool,
      title: 'เกี่ยวกับคอร์สนี้',
      children: props.aboutCourse,
    })
  }
  if (props.liveCourseOnUser === null) {
    if (props.registrationDeadline) {
      subsections.push({
        key: 'registrationDeadline',
        icon: faCalendarClock,
        title: 'วันปิดรับสมัคร',
        children: `ปิดรับสมัคร ${formatDate(props.registrationDeadline)}`,
      })
    }
    if (props.type === LiveCourseType.ONSITE || props.type === LiveCourseType.FUSION) {
      if (props.onsiteAddress) {
        subsections.push({
          key: 'onsiteAddress',
          icon: faPersonChalkboard,
          title: 'สถานที่เรียน',
          children: <span className="text-yellow-100">{props.onsiteAddress}</span>,
        })
      }
    }
  } else {
    if (props.liveCourseOnUser.learningType === LearningType.ONSITE) {
      subsections.push({
        key: 'onsiteAddress',
        icon: faPersonChalkboard,
        title: 'สถานที่เรียน',
        children: <span className="text-yellow-100">{props.onsiteAddress}</span>,
      })
    }
    if (props.liveCourseOnUser.receiveMethod === ReceiveMethod.PICKUP && props.pickupAddress) {
      subsections.push({
        key: 'receiveMethod',
        icon: faBook,
        title: 'วิธีการรับชีทเรียน',
        children: (
          <>
            {'รับเองที่: '}
            <span className="text-yellow-100">{props.pickupAddress}</span>
          </>
        ),
      })
    } else if (props.liveCourseOnUser.receiveMethod === ReceiveMethod.SHIPPING) {
      subsections.push({
        key: 'receiveMethod',
        icon: faBook,
        title: 'วิธีการรับชีทเรียน',
        children: 'จัดส่งถึงบ้าน',
      })
    }
  }
  return (
    <CourseDetailSection className={props.className}>
      {subsections.map(({ key, ...subsection }) => (
        <AboutSubsection key={key} {...subsection} />
      ))}
      {props.type !== LiveCourseType.ONSITE && props.isEnrolled && props.expiresAt && (
        <ExpiresAtSection expiresAt={props.expiresAt} />
      )}
    </CourseDetailSection>
  )
}
