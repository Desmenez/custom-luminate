import { faCheck } from '@fortawesome/pro-solid-svg-icons'

import { PaymentLiveCourseFeature } from '@luminate/rest'
import { FontAwesomeIcon, cn } from '@luminate/ui'

export interface FeaturesProps {
  className?: string
  features: PaymentLiveCourseFeature[]
}

const featureTitle: Record<PaymentLiveCourseFeature, string> = {
  [PaymentLiveCourseFeature.LIVE]: 'ระบบถ่ายทอดสด',
  [PaymentLiveCourseFeature.ONSITE]: 'เรียนสดที่ห้องเรียน',
  [PaymentLiveCourseFeature.ONLINE]: 'เรียนออนไลน์',
  [PaymentLiveCourseFeature.FUNDAMENTAL]: 'บทเรียนปรับพื้นฐาน',
  [PaymentLiveCourseFeature.RECORDING]: 'บันทึกการสอน',
  [PaymentLiveCourseFeature.EXERCISE]: 'แบบฝึกหัด',
  [PaymentLiveCourseFeature.EXAM]: 'ข้อสอบ',
  [PaymentLiveCourseFeature.QUIZ]: 'แบบทดสอบ (Quiz)',
  [PaymentLiveCourseFeature.SUBSCRIPTION]: 'สมาชิก MonkeyEveryday',
}

export function Features({ className, features }: FeaturesProps) {
  return (
    <div className={cn('flex-1 flex flex-col', className)}>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4 items-center w-[198px] px-1 py-0.5">
          <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-gray-50" />
          <p className="font-sans font-normal text-sm leading-normal text-yellow-50">
            {featureTitle[feature]}
          </p>
        </div>
      ))}
    </div>
  )
}
