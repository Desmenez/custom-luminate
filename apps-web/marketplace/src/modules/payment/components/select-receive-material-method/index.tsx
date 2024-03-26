import { useFormContext } from 'react-hook-form'

import dynamic from 'next/dynamic'

import { PaymentPackageInfo } from '@luminate/rest'
import { RadioGroup } from '@luminate/ui'

import { ReceiveMaterialMethodType } from '../../constants/receive-material-method'
import { PaymentPackageSelectionSchema } from '../../schema/recipient-address'
import { ExpandableOption } from '../expandable-option'
import { PriceButton } from '../price-button'
import { Section } from '../section'

const LazyShippingAddress = dynamic(
  () => import('../shipping-address').then((mod) => mod.ShippingAddress),
  {
    loading: () => <p>Loading...</p>, // TODO: Great loading component
    ssr: false,
  }
)

interface SelectReceiveMaterialMethodProps {
  pickupOption: PaymentPackageInfo['receiveMaterialOptions']['pickup']
  shippingOption: PaymentPackageInfo['receiveMaterialOptions']['shipping']
}

export const SelectReceiveMaterialMethod: React.FC<SelectReceiveMaterialMethodProps> = ({
  pickupOption,
  shippingOption,
}) => {
  const { getValues, setValue } = useFormContext<PaymentPackageSelectionSchema>()

  const hasPhysicalMaterial = pickupOption || shippingOption

  if (!hasPhysicalMaterial) {
    return null
  }

  return (
    <Section title="เลือกช่องทางการรับหนังสือเรียน">
      <RadioGroup
        className="w-full"
        onValueChange={(value: ReceiveMaterialMethodType) =>
          setValue('receiveMaterialMethodType', value)
        }
      >
        {shippingOption && (
          <ExpandableOption
            title="จัดส่งไปรษณีย์"
            note={`มีค่าจัดส่ง ${shippingOption.price} บาท`}
            right={<PriceButton price={shippingOption.price} />}
            value={ReceiveMaterialMethodType.SHIPPING}
            checked={getValues('receiveMaterialMethodType') === ReceiveMaterialMethodType.SHIPPING}
          >
            <LazyShippingAddress />
          </ExpandableOption>
        )}
        {pickupOption && (
          <ExpandableOption
            title="รับเองที่โรงเรียนกวดวิชา"
            right={<PriceButton price={0} />}
            value={ReceiveMaterialMethodType.PICKUP}
            checked={getValues('receiveMaterialMethodType') === ReceiveMaterialMethodType.PICKUP}
          >
            <div className="w-full pl-8 flex flex-col text-sm">
              <p className="font-semibold">รับได้ที่</p>
              <p className="whitespace-pre-line">{pickupOption.pickupAddress}</p>
            </div>
          </ExpandableOption>
        )}
      </RadioGroup>
    </Section>
  )
}
