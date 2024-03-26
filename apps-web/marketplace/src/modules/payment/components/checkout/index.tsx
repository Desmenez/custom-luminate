import { useMemo, useState } from 'react'

import { Button, Separator } from '@luminate/ui'
import { formatAsBaht } from '@luminate/utils'

import { Box } from '../box'
import { CheckoutModeType } from './constants'
import { CostBreakdown } from './cost-breakdown'
import { Coupon, CouponProps } from './coupon'
import { TermAndCondition } from './term-and-condition'

type CheckoutBaseProps = {
  costs: CostBreakdown[]
}

type CheckoutSummaryMode = CheckoutBaseProps & {
  mode: typeof CheckoutModeType.SUMMARY
  disableSubmitButton: boolean
  onSubmit: () => void
}

type CheckoutCheckoutMode = CheckoutBaseProps & {
  mode: typeof CheckoutModeType.CHECKOUT
  coupon: CouponProps
  onSubmit: () => void
}

type CheckoutPromptpayMode = CheckoutBaseProps & {
  mode: typeof CheckoutModeType.PROMPTPAY
}

export type CheckoutProps = CheckoutCheckoutMode | CheckoutSummaryMode | CheckoutPromptpayMode

export const Checkout: React.FC<CheckoutProps> = ({ costs = [], ...props }) => {
  const buttonLabel =
    props.mode === CheckoutModeType.SUMMARY ? 'ดูข้อมูลการชำระเงิน' : 'ยืนยันชำระเงิน'
  const headerTitle =
    props.mode === CheckoutModeType.SUMMARY ? 'รายการสั่งซื้อ' : 'สรุปรายการสั่งซื้อ'
  const totalCost = useMemo(() => costs.reduce((acc, cost) => acc + (cost.price ?? 0), 0), [costs])

  const [checkedToc, setCheckedToc] = useState(false)
  const shouldDisabledSubmitButton = (() => {
    switch (props.mode) {
      case CheckoutModeType.CHECKOUT:
        // If the mode is checkout, then we need to check if user consent
        return !checkedToc
      case CheckoutModeType.SUMMARY:
        return props.disableSubmitButton
      default:
        return false
    }
  })()

  return (
    <Box.Root className="flex flex-col">
      <Box.Header>{headerTitle}</Box.Header>
      <Box.Content className="flex flex-col gap-4">
        {/* Cost breakdown */}
        <div className="flex flex-col gap-2">
          {costs.map((cost, index) => (
            <CostBreakdown key={index} cost={cost} />
          ))}
        </div>
        <Separator />

        {/* Total cost */}
        <TotalCost totalCost={totalCost} />

        {/* Coupon - Display only if mode = checkout */}
        {props.mode === CheckoutModeType.CHECKOUT && (
          <>
            <Separator />
            <Coupon {...props.coupon} />
          </>
        )}

        {/* Toc checkbox - Display only if mode = checkout */}
        {props.mode === CheckoutModeType.CHECKOUT && (
          <>
            <Separator />
            <TermAndCondition checked={checkedToc} onChange={setCheckedToc} />
          </>
        )}

        {/* Submit button */}
        {props.mode !== CheckoutModeType.PROMPTPAY && (
          <>
            <Separator />
            <Button onClick={props.onSubmit} disabled={shouldDisabledSubmitButton}>
              {buttonLabel}
            </Button>
          </>
        )}

        {props.mode === CheckoutModeType.CHECKOUT && (
          <p className="font-normal text-xs text-gray-500 text-center">
            *ขอสงวนสิทธิ์ในการคืนเงินทุกกรณี เมื่อชำระเงินเรียบร้อยแล้ว
          </p>
        )}
      </Box.Content>
    </Box.Root>
  )
}

const TotalCost: React.FC<{ totalCost: number }> = ({ totalCost }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center font-semibold">
        <span>ราคาสุทธิ</span>
        <span className="text-xl">{formatAsBaht(totalCost, { showFree: false })}</span>
      </div>
      <span className="text-xs text-gray-500 font-normal">ราคารวมภาษีมูลค่าเพิ่ม (7%)</span>
    </div>
  )
}
