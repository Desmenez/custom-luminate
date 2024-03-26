import React, { useId, useMemo } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'

import { GradientBackground } from '@app/components/gradient-background'
import { reactQueryClient } from '@app/core/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { z } from 'zod'

import { PaymentPackageInfo } from '@luminate/rest'
import { NextSeo } from '@luminate/seo'
import { toast } from '@luminate/ui'

import { Box } from '../components/box'
import { Checkout, CheckoutProps } from '../components/checkout'
import { CheckoutModeType } from '../components/checkout/constants'
import { CourseHeader } from '../components/course-header'
import { PackageHeader } from '../components/package-header'
import { SelectAddon } from '../components/select-add-on'
import { SelectLearningType } from '../components/select-learning-type'
import { SelectReceiveMaterialMethod } from '../components/select-receive-material-method'
import { LearningType } from '../constants/learning-type'
import { ReceiveMaterialMethodType } from '../constants/receive-material-method'
import { PaymentPackageSelectionSchema } from '../schema/recipient-address'
import { PaymentLayout } from './base'

const MemoizedSelectLearningType = React.memo(SelectLearningType)
const MemoizedSelectAddon = React.memo(SelectAddon)
const MemoizedSelectReceiveMaterialMethod = React.memo(SelectReceiveMaterialMethod)

interface PaymentPackgeSelectionLayoutProps extends PaymentPackageInfo {}

export const PaymentPackgeSelectionLayout: React.FC<PaymentPackgeSelectionLayoutProps> = ({
  liveCourseId,
  type,
  name,
  courseCoverUrl,
  courseStickerUrl,
  startDate,
  endDate,
  registrationDeadline,
  startingPrice,
  learningTypeOptions,
  addonOptions,
  receiveMaterialOptions,
}) => {
  const hasReceiveMaterialMethod =
    receiveMaterialOptions.shipping !== null && receiveMaterialOptions.pickup !== null

  const createBookingToastId = useId()
  const requiredFieldToastId = useId()

  const methods = useForm<PaymentPackageSelectionSchema>({
    resolver: zodResolver(PaymentPackageSelectionSchema),
    defaultValues: {
      receiveMaterialMethodType: hasReceiveMaterialMethod
        ? undefined
        : ReceiveMaterialMethodType.NONE,
    },
  })

  const selectedLearningType = useWatch({ control: methods.control, name: 'learningType' })
  const selectedAddonId = useWatch({ control: methods.control, name: 'addonId' })
  const selectedReceiveMaterialMethodType = useWatch({
    control: methods.control,
    name: 'receiveMaterialMethodType',
  })

  const router = useRouter()
  const { mutateAsync: createBookingMutation, isLoading: isCreatingBooking } =
    reactQueryClient.payment.createBooking.useMutation({
      onSuccess: (result) => {
        router.push(`/payment/booking/${result.body.bookingId}`)
      },
      onError: (error) => {
        if (typeof error.body === 'object' && error.body !== null && 'code' in error.body) {
          switch (error.body.code) {
            case 'MARKETPLACE_ALREADY_HAS_COURSE':
              // TODO: Use should not enter this page in the first place if they already have the course
              router.push(`/course/${liveCourseId}`)
              return
            case 'MARKETPLACE_NO_AVAILABLE_SEATS':
              // show course full popup
              return
          }
        }
      },
    })
  const disableSubmitButton = isCreatingBooking

  async function sendCreateBooking(data: z.infer<typeof PaymentPackageSelectionSchema>) {
    await toast.promise(
      createBookingMutation({
        body: {
          liveCourseId,
          learningType: data.learningType,
          addonId: data.addonId ?? null,
          receiveMethod:
            data.receiveMaterialMethodType === ReceiveMaterialMethodType.NONE
              ? null
              : data.receiveMaterialMethodType,
          shippingAddress:
            data.receiveMaterialMethodType === ReceiveMaterialMethodType.SHIPPING
              ? data.shippingAddress
              : null,
        },
      }),
      {
        loading: 'กำลังสร้างการจอง...',
        success: 'สร้างการจองสำเร็จ',
        error: 'เกิดข้อผิดพลาดในการสร้างการจอง',
      },
      { id: createBookingToastId }
    )
  }

  const costBreakdown = useMemo(() => {
    const list: CheckoutProps['costs'] = []

    // If user select learning type
    const learningTypeOptionKeyMapper: Record<
      LearningType,
      keyof PaymentPackageInfo['learningTypeOptions']
    > = {
      [LearningType.ONLINE]: 'online',
      [LearningType.ONSITE]: 'onsite',
    }
    list.push({
      price: learningTypeOptions[learningTypeOptionKeyMapper[selectedLearningType]]?.price,
      title: name,
    })

    if (selectedAddonId) {
      const addon = addonOptions.find((addon) => addon.id === selectedAddonId)
      list.push({ price: addon?.price, title: addon?.name ?? '' })
    }

    // If user select receive material method
    switch (selectedReceiveMaterialMethodType) {
      case ReceiveMaterialMethodType.SHIPPING: {
        list.push({ price: receiveMaterialOptions.shipping?.price, title: 'ค่าส่ง' })
        break
      }
      case ReceiveMaterialMethodType.PICKUP: {
        list.push({ price: 0, title: 'ค่าส่ง' })
        break
      }
    }
    return list
  }, [
    learningTypeOptions,
    selectedLearningType,
    name,
    selectedAddonId,
    selectedReceiveMaterialMethodType,
    addonOptions,
    receiveMaterialOptions.shipping?.price,
  ])

  const handleSubmit = methods.handleSubmit(
    (data) => {
      console.log('SUCCESS')
      console.table(data)
      if (data.receiveMaterialMethodType === ReceiveMaterialMethodType.SHIPPING) {
        console.table(data.shippingAddress)
      }
      sendCreateBooking(data)
    },
    (errors) => {
      // TODO: extract error message and display it in toast properly
      console.log('ERROR')
      console.table(errors)
      if (errors.learningType) {
        toast.error(errors.learningType?.message ?? '', { id: requiredFieldToastId })
      }
    }
  )

  return (
    <>
      <NextSeo title={`เลือกแพ็คเกจ`} />
      <GradientBackground />
      <div className="flex flex-col gap-6 pb-32">
        <PackageHeader liveCourseId={liveCourseId} activeStep="PACKAGE_SELECTION" />
        <FormProvider {...methods}>
          <PaymentLayout
            left={
              <form noValidate onSubmit={handleSubmit}>
                <Box.Root className="flex flex-col">
                  <Box.Header>เลือกแพ็คเก็จ</Box.Header>
                  <Box.Content className="flex flex-col gap-6 md:gap-8">
                    <CourseHeader
                      name={name}
                      type={type}
                      courseCoverUrl={courseCoverUrl}
                      courseStickerUrl={courseStickerUrl}
                      startDate={startDate}
                      endDate={endDate}
                      registrationDeadline={registrationDeadline}
                      price={startingPrice}
                    />
                    <MemoizedSelectLearningType {...learningTypeOptions} />
                    <MemoizedSelectAddon addons={addonOptions} />
                    <MemoizedSelectReceiveMaterialMethod
                      shippingOption={receiveMaterialOptions.shipping}
                      pickupOption={receiveMaterialOptions.pickup}
                    />
                  </Box.Content>
                </Box.Root>
              </form>
            }
            right={
              <Checkout
                mode={CheckoutModeType.SUMMARY}
                costs={costBreakdown}
                onSubmit={handleSubmit}
                disableSubmitButton={disableSubmitButton}
              />
            }
          />
        </FormProvider>
      </div>
    </>
  )
}
