import { PaymentLiveCourseFeature } from '@luminate/rest'

import { LearningType } from '../../constants/learning-type'
import { PriceButton } from '../price-button'
import { PackageOption } from './base'

export interface OnlinePackageOptionProps {
  features: PaymentLiveCourseFeature[]
  price: number
}

export function OnlinePackageOption(props: OnlinePackageOptionProps) {
  return (
    <PackageOption.Root value={LearningType.ONLINE} variant="online">
      <PackageOption.Header
        className="text-red-200"
        title="Live Streaming"
        subtitle="ระบบถ่ายทอดสด"
      />
      <PackageOption.Features features={props.features} />
      <PriceButton variant="online" price={props.price} />
    </PackageOption.Root>
  )
}

export interface OnsitePackageOptionProps {
  features: PaymentLiveCourseFeature[]
  price: number
  availableSeats: number
}

export function OnsitePackageOption(props: OnsitePackageOptionProps) {
  return (
    <PackageOption.Root
      value={LearningType.ONSITE}
      variant="onsite"
      disabled={props.availableSeats === 0}
    >
      <PackageOption.Header
        className="text-green-200"
        title="On-site"
        subtitle="เรียนสดที่ห้องเรียน"
      />
      <PackageOption.Features features={props.features} />
      <PackageOption.AvailableSeats availableSeats={props.availableSeats} />
      <PriceButton variant="onsite" price={props.price} />
    </PackageOption.Root>
  )
}

export interface AddonPackageOptionProps {
  id: string
  name: string
  price: number
  features: PaymentLiveCourseFeature[]
  onClick?: () => void
}

export function AddonPackageOption(props: AddonPackageOptionProps) {
  return (
    <PackageOption.Root value={props.id} variant="addon" onClick={props.onClick}>
      <PackageOption.Header className="text-gray-50" title={props.name} />
      <PackageOption.Features features={props.features} />
      <PriceButton price={props.price} />
    </PackageOption.Root>
  )
}
