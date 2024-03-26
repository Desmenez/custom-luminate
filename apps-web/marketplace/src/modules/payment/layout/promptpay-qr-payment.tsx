import { useMemo, useState } from 'react'

import { GradientBackground } from '@app/components/gradient-background'
import { faAlarmExclamation } from '@fortawesome/pro-regular-svg-icons'
import NextLink from 'next/link'

import { PaymentCharge, PaymentChargeAdditionalSteps } from '@luminate/rest'
import { NextSeo } from '@luminate/seo'
import { Button, Dialog, DialogContent, FontAwesomeIcon } from '@luminate/ui'

import { Box } from '../components/box'
import { Checkout } from '../components/checkout'
import { CheckoutModeType } from '../components/checkout/constants'
import { Countdown } from '../components/countdown'
import { PackageHeader } from '../components/package-header'
import { costBreakdownFromCharge } from '../utils/cost-breakdown-from-charge'
import { PaymentLayout } from './base'

export interface PromptpayQRPaymentLayoutProps extends PaymentCharge {
  status: {
    type: 'PENDING'
    additionalSteps: Extract<PaymentChargeAdditionalSteps, { type: 'PROMPTPAY' }>
  }
}

export const PromptpayQRPaymentLayout = (props: PromptpayQRPaymentLayoutProps) => {
  const [isExpired, setIsExpired] = useState(false)

  const costBreakdown = useMemo(() => costBreakdownFromCharge(props), [props])

  return (
    <>
      <NextSeo title={`ข้อมูลการชำระเงิน`} />
      <GradientBackground />
      <div className="flex flex-col gap-6 pb-32">
        <PackageHeader liveCourseId={props.liveCourse.id} activeStep="PAYMENT_METHOD" />
        <PaymentLayout
          left={
            // Left-hand side: Package selection
            <Box.Root>
              <Box.Header
                right={
                  <Countdown
                    startAt={new Date()}
                    expiresAt={new Date(props.status.additionalSteps.expiresAt)}
                    onExpire={() => setIsExpired(true)}
                  />
                }
              >
                ข้อมูลการชำระเงิน
              </Box.Header>
              <Box.Content className="flex flex-col gap-6 md:gap-8">
                <div className="flex flex-col items-center gap-y-6 py-4">
                  <div className="flex flex-col items-center gap-y-2">
                    <h5 className="font-semibold">กรุณาแสกน QR Code เพื่อชำระเงิน</h5>
                    <p className="text-xs opacity-60">สถานะ: รอการชำระเงิน</p>
                    <img
                      src={props.status.additionalSteps.qrCodeUrl}
                      alt="Promptpay QR Code"
                      className="rounded-[8px]"
                    />
                  </div>
                  <Button type="button" variant="outline" asChild>
                    <NextLink href={`/payment/booking/${props.bookingId}`}>ยกเลิก</NextLink>
                  </Button>
                </div>
              </Box.Content>
            </Box.Root>
          }
          right={
            // Right-hand side: Checkout
            <Checkout mode={CheckoutModeType.PROMPTPAY} costs={costBreakdown} />
          }
        />
      </div>
      <Dialog open={isExpired}>
        <DialogContent className="rounded-[10px] sm:rounded-[10px] max-w-[420px]" hideCloseButton>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faAlarmExclamation} className="w-12 h-12 m-4 text-gray-700" />
              <p className="font-sans font-semibold text-2xl text-gray-50 leading-normal">
                หมดเวลาแล้ว
              </p>
              <p className="font-sans font-normal text-sm text-gray-500 leading-normal text-center">
                คุณไม่ได้ทำรายการภายในเวลาที่กำหนด
              </p>
            </div>
            <Button variant="outline" fullWidth asChild>
              <NextLink href={`/payment/course/${props.liveCourse.id}`}>ยกเลิก</NextLink>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
