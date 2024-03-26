import { GradientBackground } from '@app/components/gradient-background'
import NextLink from 'next/link'

import { PaymentCharge, PaymentChargeFailed } from '@luminate/rest'
import { Button, Dialog, DialogContent } from '@luminate/ui'

import PaymentFailedIcon from './assets/payment-failed-icon.svg'

export interface PaymentFailedLayoutProps extends PaymentCharge {
  status: PaymentChargeFailed
}

export function PaymentFailedLayout(props: PaymentFailedLayoutProps) {
  return (
    <div className="relative flex-1">
      <GradientBackground />
      <Dialog open={true}>
        <DialogContent className="rounded-[10px] sm:rounded-[10px] max-w-[420px]" hideCloseButton>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center">
              <PaymentFailedIcon />
              <p className="font-sans font-semibold text-2xl text-gray-50 leading-normal">
                การชำระเงินไม่สำเร็จ
              </p>
              <p className="font-sans font-normal text-sm text-gray-500 leading-normal text-center">
                กรุณาลองใหม่อีกครั้ง หรือเปลี่ยนวิธีการชำระเงิน
              </p>
            </div>
            <Button fullWidth asChild>
              <NextLink href={`/payment/booking/${props.bookingId}`}>ลองใหม่อีกครั้ง</NextLink>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
