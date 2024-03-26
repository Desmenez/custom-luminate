import React, { useId, useMemo, useState } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { GradientBackground } from '@app/components/gradient-background'
import { envClient } from '@app/core/env/client'
import { reactQueryClient } from '@app/core/services'
import { faAlarmExclamation } from '@fortawesome/pro-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { PaymentMethod, PaymentStatus } from '@luminate/database'
import { useOmise } from '@luminate/omise'
import { useUserAgent } from '@luminate/react-hooks'
import { PaymentBooking } from '@luminate/rest'
import { NextSeo } from '@luminate/seo'
import { Button, Dialog, DialogContent, FontAwesomeIcon, toast } from '@luminate/ui'

import { Box } from '../components/box'
import { Checkout, CheckoutProps } from '../components/checkout'
import { CheckoutModeType } from '../components/checkout/constants'
import { DiscountCode } from '../components/checkout/coupon'
import { Countdown } from '../components/countdown'
import { CourseHeader } from '../components/course-header'
import { PackageHeader } from '../components/package-header'
import { SelectPaymentMethod } from '../components/select-payment-method'
import { MobileBankingType, PaymentMethodSchema } from '../schema/payment-method'
import { PaymentLayout } from './base'

interface PaymentMethodLayoutProps {
  booking: PaymentBooking
}

export const PaymentMethodLayout: React.FC<PaymentMethodLayoutProps> = ({ booking }) => {
  const router = useRouter()
  const [isExpired, setIsExpired] = useState(false)
  const [selectedDiscountCode, setSelectedDiscountCode] = useState<DiscountCode | null>(null)
  const discountAmount = selectedDiscountCode?.discount ?? 0
  const total = booking.subtotal - discountAmount

  const { mutateAsync: mutateCheckDiscountCode } =
    reactQueryClient.payment.checkDiscountCode.useMutation()
  async function handleCouponSubmit(code: string) {
    const result = await mutateCheckDiscountCode({
      params: { bookingId: booking.id },
      body: { code },
    })
    if (!result.body) {
      return false
    }
    setSelectedDiscountCode(result.body)
    return true
  }

  const omise = useOmise(envClient.NEXT_PUBLIC_OMISE_PUBLIC_KEY)

  const methods = useForm<PaymentMethodSchema>({
    resolver: zodResolver(PaymentMethodSchema),
  })

  const userAgent = useUserAgent()
  const queryClient = useQueryClient()

  const submitFormToastId = useId()
  const addCreditCardToastId = useId()

  const { data: creditCards } = reactQueryClient.payment.getCreditCards.useQuery()

  const { mutateAsync: mutateAddCreditCard } = reactQueryClient.payment.addCreditCard.useMutation({
    onSuccess: (result) => {
      reactQueryClient.payment.getCreditCards.setQueryData(queryClient, {}, result)
    },
    onError: (error) => {
      // TODO: better error message
      console.error('failed to add card', error)
    },
  })

  const { mutateAsync: mutateCreateCharge } = reactQueryClient.payment.createCharge.useMutation({})

  const handleCreateChargeForTrueMoney = async (phoneNumber: string) => {
    const { response: source } = await omise.createSource({
      type: 'truemoney',
      amount: total,
      phone: phoneNumber,
    })
    const response = await mutateCreateCharge({
      body: {
        bookingId: booking.id,
        discountCode: selectedDiscountCode?.code ?? null,
        source: {
          type: PaymentMethod.TRUEMONEY,
          sourceId: source.id,
          returnUrl: `${envClient.NEXT_PUBLIC_WEB_URL}/payment/status`,
        },
      },
    })
    if (
      response.status === 200 &&
      response.body.status.type === PaymentStatus.PENDING &&
      response.body.status.additionalSteps.type === PaymentMethod.TRUEMONEY
    ) {
      router.push(response.body.status.additionalSteps.authorizeUrl)
    }
  }

  const handleCreateChargeForPromptpay = async () => {
    const { response: source } = await omise.createSource({
      type: 'promptpay',
      amount: total,
    })
    const response = await mutateCreateCharge({
      body: {
        bookingId: booking.id,
        discountCode: selectedDiscountCode?.code ?? null,
        source: {
          type: PaymentMethod.PROMPTPAY,
          sourceId: source.id,
        },
      },
    })
    // To show Promptpay QR code
    router.push(`/payment/status/${response.body.id}`)
  }

  const handleCreateChargeForMobileBanking = async (selectedBank: MobileBankingType) => {
    const isIos = userAgent?.os.name === 'iOS'
    const isAndroid = userAgent?.os.name === 'Android'
    const platformType = isIos ? 'IOS' : isAndroid ? 'ANDROID' : undefined
    if (!platformType) return
    const sourcePaymentMethod = `mobile_banking_${selectedBank}` as const

    const { response: source } = await omise.createSource({
      type: sourcePaymentMethod,
      platformType,
      amount: total,
    })

    const response = await mutateCreateCharge({
      body: {
        bookingId: booking.id,
        discountCode: selectedDiscountCode?.code ?? null,
        source: {
          type: PaymentMethod.MOBILE_BANKING,
          sourceId: source.id,
          returnUrl: `${envClient.NEXT_PUBLIC_WEB_URL}/payment/status`,
        },
      },
    })

    if (
      response.status === 200 &&
      response.body.status.type === PaymentStatus.PENDING &&
      response.body.status.additionalSteps.type === PaymentMethod.MOBILE_BANKING
    ) {
      router.push(response.body.status.additionalSteps.authorizeUrl)
    }
  }

  const handleCreateChargeForCreditCard = async (cardId: string) => {
    const response = await mutateCreateCharge({
      body: {
        bookingId: booking.id,
        discountCode: selectedDiscountCode?.code ?? null,
        source: {
          type: PaymentMethod.CREDIT_CARD,
          cardId: cardId,
        },
      },
    })

    router.push(`/payment/status/${response.body.id}`)
  }

  const addCreditCard = async (cardToken: string, useAsDefault: boolean) => {
    await toast.promise(
      mutateAddCreditCard({
        body: {
          cardToken: cardToken,
          useAsDefault: useAsDefault,
        },
      }),
      {
        loading: 'กำลังเพิ่มบัตรเครดิต...',
        success: 'เพิ่มบัตรเครดิตสำเร็จ',
        error: 'เกิดข้อผิดพลาดในการเพิ่มบัตรเครดิต',
      },
      { id: addCreditCardToastId }
    )
  }

  const costBreakdown = useMemo(() => {
    const costs: CheckoutProps['costs'] = []
    costs.push({
      title: booking.name,
      price: booking.basePrice,
    })
    if (booking.addon) {
      costs.push({
        title: booking.addon.name,
        price: booking.addon.price,
      })
    }
    if (booking.receiveMethod) {
      costs.push({
        title: 'ค่าส่ง',
        price: booking.shippingPrice,
      })
    }
    if (selectedDiscountCode) {
      costs.push({
        title: selectedDiscountCode.code,
        price: -selectedDiscountCode.discount,
      })
    }
    return costs
  }, [booking, selectedDiscountCode])

  const onSubmit: SubmitHandler<PaymentMethodSchema> = async (data) => {
    // Create a souce depends on type of payment method
    // TODO: Ask designer for wording
    const toastMessages = {
      loading: 'กำลังดำเนินการ',
      success: 'ดำเนินการสำเร็จ',
      error: 'เกิดข้อผิดพลาดบางอย่าง',
    }
    switch (data.method) {
      case PaymentMethod.TRUEMONEY:
        await toast.promise(handleCreateChargeForTrueMoney(data.phoneNumber), toastMessages, {
          id: submitFormToastId,
        })
        break
      case PaymentMethod.CREDIT_CARD: {
        await toast.promise(handleCreateChargeForCreditCard(data.cardId), toastMessages, {
          id: submitFormToastId,
        })
        break
      }
      case PaymentMethod.PROMPTPAY: {
        await toast.promise(handleCreateChargeForPromptpay(), toastMessages, {
          id: submitFormToastId,
        })
        break
      }
      case PaymentMethod.MOBILE_BANKING: {
        await toast.promise(handleCreateChargeForMobileBanking(data.selectedBank), toastMessages, {
          id: submitFormToastId,
        })
        break
      }
    }
  }

  const onError: SubmitErrorHandler<PaymentMethodSchema> = (errors) => {
    console.table(errors)
    toast.error('กรุณากรอกข้อมูลให้ครบถ้วน', {
      id: submitFormToastId,
    })
  }

  const handleSubmit = methods.handleSubmit(onSubmit, onError)

  return (
    <>
      <NextSeo title={`ข้อมูลการชำระเงิน`} />
      <omise.OmiseScript />
      <GradientBackground />
      <div className="flex flex-col gap-6 pb-32">
        <PackageHeader liveCourseId={booking.liveCourseId} activeStep="PAYMENT_METHOD" />
        <FormProvider {...methods}>
          <PaymentLayout
            left={
              // Left-hand side: Package selection
              <form noValidate onSubmit={handleSubmit}>
                <Box.Root>
                  <Box.Header
                    // TODO: use props from server
                    right={
                      <Countdown
                        startAt={new Date(booking.serverTime)}
                        expiresAt={new Date(booking.expiresAt)}
                        onExpire={() => setIsExpired(true)}
                      />
                    }
                  >
                    ข้อมูลการชำระเงิน
                  </Box.Header>
                  <Box.Content className="flex flex-col gap-6 md:gap-8">
                    <CourseHeader
                      name={booking.name}
                      type={booking.type}
                      courseCoverUrl={booking.courseCoverUrl}
                      courseStickerUrl={booking.courseStickerUrl}
                      startDate={booking.startDate}
                      endDate={booking.endDate}
                      registrationDeadline={booking.registrationDeadline}
                      price={booking.basePrice}
                    />
                    <SelectPaymentMethod
                      creditCardMethodFormProps={{
                        creditCards: creditCards?.body ?? null,
                        addCreditCard,
                      }}
                    />
                  </Box.Content>
                </Box.Root>
              </form>
            }
            right={
              // Right-hand side: Checkout
              <Checkout
                mode={CheckoutModeType.CHECKOUT}
                costs={costBreakdown}
                onSubmit={handleSubmit}
                coupon={{
                  selectedDiscountCode,
                  onCouponSubmit: handleCouponSubmit,
                  onRemoveCoupon: () => setSelectedDiscountCode(null),
                }}
              />
            }
          />
        </FormProvider>
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
              <NextLink href={`/payment/course/${booking.liveCourseId}`}>ยกเลิก</NextLink>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
