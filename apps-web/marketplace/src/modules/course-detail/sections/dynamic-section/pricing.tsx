import NextLink from 'next/link'

import { Button } from '@luminate/ui'
import { formatAsBaht, getNumberWithComma } from '@luminate/utils'

export interface DynamicSectionPricingProps {
  courseId: string
  fullPrice: number | null
  price: number
  isTrialAvailable: boolean
  onClickStartTrial?: () => void
}

export function DynamicSectionPricing({
  courseId,
  fullPrice,
  price,
  isTrialAvailable,
  onClickStartTrial,
}: DynamicSectionPricingProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-[unset] whitespace-nowrap">
      <div className="flex flex-row items-start gap-2">
        {fullPrice && fullPrice !== price && <DiscountPrice fullPrice={fullPrice} price={price} />}
        <p className="font-semibold text-gray-50 text-2xl leading-normal">{formatAsBaht(price)}</p>
      </div>
      <div className="w-full lg:max-w-[416px] flex gap-4">
        {isTrialAvailable && (
          <Button className="flex-1" variant="outline" onClick={onClickStartTrial}>
            ทดลองเรียนฟรี
          </Button>
        )}
        <Button className="flex-1" asChild>
          <NextLink href={`/payment/course/${courseId}`}>สมัครเรียน</NextLink>
        </Button>
      </div>
    </div>
  )
}

interface DiscountPriceProps {
  fullPrice: number
  price: number
}

function DiscountPrice({ fullPrice, price }: DiscountPriceProps) {
  const discountPercent = Math.floor(((fullPrice - price) / fullPrice) * 100)
  return (
    <div className="flex flex-row items-center gap-1 font-regular text-gray-400 leading-normal">
      <span className="relative px-1 text-lg">
        {getNumberWithComma(fullPrice)}
        <span className="absolute top-1/2 left-1/2 w-14 h-[2px] -translate-x-1/2 rotate-[-25deg] bg-red-600" />
      </span>
      <span className="text-sm">-{discountPercent}%</span>
    </div>
  )
}
