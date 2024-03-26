import { ReactNode, forwardRef } from 'react'

import { faCheck, faCircleCheck } from '@fortawesome/pro-solid-svg-icons'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { VariantProps, cva } from 'class-variance-authority'

import { PaymentLiveCourseFeature } from '@luminate/rest'
import { FontAwesomeIcon, cn } from '@luminate/ui'

const rootVariants = cva(
  cn(
    'group w-[190px] flex flex-col items-center p-4 gap-4 relative',
    'bg-gray-900 rounded-lg transition-all',
    'ring-1 ring-inset rdx-state-checked:ring-2 rdx-state-checked:ring-yellow-400',
    'disabled:bg-gray-800 disabled:ring-gray-700 disabled:text-gray-700'
  ),
  {
    variants: {
      variant: {
        online:
          'ring-[#991B1B] ring-opacity-70 hover:bg-[#2A1E1E] rdx-state-checked:bg-[#2A1E1E] hover:shadow-lg rdx-state-checked:shadow-lg',
        onsite:
          'ring-[#14532D] ring-opacity-70 hover:bg-[#1D2520] rdx-state-checked:bg-[#1D2520] hover:shadow-lg rdx-state-checked:shadow-lg',
        addon:
          'ring-gray-700 hover:bg-[#222] rdx-state-checked:bg-[#222] shadow-sm hover:shadow-none rdx-state-checked:shadow-none',
      },
    },
  }
)

interface RootProps {
  value: string
  variant: VariantProps<typeof rootVariants>['variant']
  className?: string
  children?: ReactNode
  disabled?: boolean
}

const Root = forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & RootProps
>(function Root(props, ref) {
  return (
    <RadioGroupPrimitive.Item asChild {...props} ref={ref}>
      <button className={rootVariants({ className: props.className, variant: props.variant })}>
        <RadioGroupPrimitive.Indicator className="absolute top-2 left-2">
          <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-yellow-400" />
        </RadioGroupPrimitive.Indicator>
        {props.children}
      </button>
    </RadioGroupPrimitive.Item>
  )
})

interface HeaderProps {
  title: string
  subtitle?: string
  className?: string
}

function Header(props: HeaderProps) {
  return (
    <div
      className={cn(
        'w-full text-center font-sans leading-normal group-disabled:text-current',
        props.className
      )}
    >
      <p className="font-semibold text-lg">{props.title}</p>
      {props.subtitle && <p className="font-normal text-xs">{props.subtitle}</p>}
    </div>
  )
}

interface FeaturesProps {
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

function Features(props: FeaturesProps) {
  return (
    <div className="w-full flex-1 flex flex-col gap-0.5">
      {props.features.map((feature, index) => (
        <div key={index} className="flex gap-2">
          <span className="w-5 h-5 p-1">
            <FontAwesomeIcon
              icon={faCheck}
              className="w-3 h-3 text-gray-50 group-disabled:text-current"
            />
          </span>
          <p className="font-sans font-normal text-xs leading-normal text-gray-500 group-disabled:text-current">
            {featureTitle[feature]}
          </p>
        </div>
      ))}
    </div>
  )
}

interface AvailableSeatsProps {
  availableSeats: number
}

function AvailableSeats(props: AvailableSeatsProps) {
  return (
    <p className="w-full mb-[-5px] text-center font-sans font-normal text-xs leading-normal text-gray-50 group-disabled:text-current">
      เหลือ {props.availableSeats} ที่นั่ง
    </p>
  )
}

export const PackageOption = {
  Root,
  Header,
  Features,
  AvailableSeats,
}
