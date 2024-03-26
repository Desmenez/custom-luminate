import { useEffect } from 'react'

import { reactQueryClient } from '@app/core/services'
import {
  PaymentFailedLayout,
  PaymentFailedLayoutProps,
} from '@app/modules/payment/layout/payment-failed'
import {
  PaymentSuccessLayout,
  PaymentSuccessLayoutProps,
} from '@app/modules/payment/layout/payment-success'
import {
  PromptpayQRPaymentLayout,
  PromptpayQRPaymentLayoutProps,
} from '@app/modules/payment/layout/promptpay-qr-payment'
import { useRouter } from 'next/router'

import { PaymentCharge } from '@luminate/rest'

// These two typeguard function is used to narrow down the type of `chargeInfo`
// since typescript can't narrow the type automatically
const isChargeFailed = (charge: PaymentCharge): charge is PaymentFailedLayoutProps => {
  return charge.status.type === 'FAILED'
}
const isChargePendingPromptpay = (
  charge: PaymentCharge
): charge is PromptpayQRPaymentLayoutProps => {
  return charge.status.type === 'PENDING' && charge.status.additionalSteps.type === 'PROMPTPAY'
}
const isChargeSuccess = (charge: PaymentCharge): charge is PaymentSuccessLayoutProps => {
  return charge.status.type === 'SUCCESS'
}

const loadingSpinner = (
  <div className="animate-spin w-24 h-24 rounded-[50%] border-2 border-yellow-400 border-t-transparent border-r-transparent m-auto" />
)

const Page = () => {
  const router = useRouter()
  const { data, refetch } = reactQueryClient.payment.getCharge.useQuery({
    params: {
      chargeId: router.query.chargeId as string,
    },
  })

  useEffect(() => {
    if (data?.body.status.type === 'PENDING') {
      const timeout = setTimeout(() => {
        refetch()
      }, 5000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [data, refetch])

  if (!data) {
    return loadingSpinner
  }

  const chargeInfo = data.body
  switch (chargeInfo.status.type) {
    case 'FAILED':
      // router.replace(`/payment/booking/${chargeInfo.bookingId}`)
      return isChargeFailed(chargeInfo) && <PaymentFailedLayout {...chargeInfo} />
    case 'PENDING':
      if (chargeInfo.status.additionalSteps.type === 'PROMPTPAY') {
        return isChargePendingPromptpay(chargeInfo) && <PromptpayQRPaymentLayout {...chargeInfo} />
      }
      return loadingSpinner
    case 'SUCCESS':
      return isChargeSuccess(chargeInfo) && <PaymentSuccessLayout {...chargeInfo} />
  }
}

export default Page
