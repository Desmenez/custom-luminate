import { PropsWithChildren, ReactNode, useMemo } from 'react'

import VisaColoredIcon from '@app/assets/credit-card/colored-visa.svg'
import { GradientBackground } from '@app/components/gradient-background'
import { courseTypeIconSolid, courseTypeText } from '@app/constants/course-type'
import { getShippingAddressString } from '@app/utils/shipping-address'
import { faBox, faCreditCard, faTicket } from '@fortawesome/pro-solid-svg-icons'
import NextImage from 'next/image'
import Link from 'next/link'

import { PaymentMethod, ReceiveMethod } from '@luminate/database'
import { PaymentCharge, PaymentChargeSuccess } from '@luminate/rest'
import { NextSeo } from '@luminate/seo'
import { Button } from '@luminate/ui'

import { Box } from '../components/box'
import { CourseHeader } from '../components/course-header'
import { PackageHeader } from '../components/package-header'
import { PaymentSuccessBlock, PaymentSuccessBlockProps } from '../components/payment-success-block'
import { PaymentSuccessSummary } from '../components/payment-success-summary'
import { Section } from '../components/section'
import { costBreakdownFromCharge } from '../utils/cost-breakdown-from-charge'
import { PaymentLayout } from './base'

export interface PaymentSuccessLayoutProps extends PaymentCharge {
  status: PaymentChargeSuccess
}

export const PaymentSuccessLayout = (props: PaymentSuccessLayoutProps) => {
  const costBreakdown = useMemo(() => costBreakdownFromCharge(props), [props])

  const receiveMethodMapping: Record<ReceiveMethod, PropsWithChildren<PaymentSuccessBlockProps>> = {
    PICKUP: {
      title: {
        text: 'รับเองที่โรงเรียนกวดวิชา',
        icon: faBox,
      },
      children: props.status.pickupAddress,
    },
    SHIPPING: {
      title: {
        text: 'จัดส่งไปรษณีย์',
        icon: faBox,
      },
      children: (
        <>
          {getShippingAddressString(props.status.shippingAddress)}
          <span className="text-xs text-yellow-400">
            หนังสือเรียนจะถูกส่งให้ภายใน 3-5 วันทำการ และ
            หมายเลขติดตามพัสดุจะถูกส่งไปยังเบอร์โทรศัพท์
          </span>
        </>
      ),
    },
  }

  const paymentMethodMapping: Record<PaymentMethod, ReactNode> = {
    CREDIT_CARD: (
      <>
        <div className="flex flex-row items-center gap-4">
          <div>บัตรเครดิต</div>
          <VisaColoredIcon />
        </div>
        <div className="text-sm text-gray-500">
          <div>ลงท้ายด้วย {props.status.chargedCard?.lastDigits}</div>
          <div className="flex flex-row gap-x-2">
            <div>หมดอายุ</div>
            <div>
              {props.status.chargedCard?.expirationMonth}/{props.status.chargedCard?.expirationYear}
            </div>
          </div>
        </div>
      </>
    ),
    PROMPTPAY: (
      <div className="flex flex-row items-center gap-4">
        <div>พร้อมเพย์</div>
        <NextImage
          src="https://storage.googleapis.com/prod-bucket-public/client-file/images/live-course/promptpay.svg"
          alt=""
          width={0}
          height={0}
          className="h-[32px] w-fit bg-white"
        />
      </div>
    ),
    TRUEMONEY: (
      <div className="flex flex-row items-center gap-4">
        <div>TrueMoney</div>
        <NextImage
          src="https://storage.googleapis.com/prod-bucket-public/client-file/images/live-course/truemoney.svg"
          alt=""
          width={0}
          height={0}
          className="h-[48px] w-fit"
        />
      </div>
    ),
    MOBILE_BANKING: (
      <div className="flex flex-row items-center gap-4">
        <div>ชำระด้วยการโอนเงิน</div>
        <NextImage
          alt=""
          src={
            'https://storage.googleapis.com/prod-bucket-public/client-file/images/live-course/online-bank.svg'
          }
          width={0}
          height={0}
          className="h-[32px] w-fit"
        />
      </div>
    ),
  }

  return (
    <>
      <NextSeo title={`ชำระเงินสำเร็จ`} />
      <GradientBackground />
      <div className="flex flex-col gap-6 pb-32">
        <PackageHeader isPaymentSuccess liveCourseId={props.liveCourse.id} activeStep="SUCCESS" />
        <PaymentLayout
          className="flex-col-reverse"
          left={
            // Left-hand side: Package selection
            <Box.Root>
              <Box.Header>รายการสั่งซื้อ</Box.Header>
              <Box.Content className="flex flex-col gap-6 md:gap-8">
                <CourseHeader
                  name={props.liveCourse.name}
                  type={props.liveCourse.type}
                  courseCoverUrl={props.liveCourse.courseCoverUrl}
                  courseStickerUrl={props.liveCourse.courseStickerUrl}
                  startDate={props.liveCourse.startDate}
                  endDate={props.liveCourse.endDate}
                  registrationDeadline={props.liveCourse.lastEnrollmentDate}
                  price={0}
                />
                {props.status.learningType === 'ONSITE' && props.status.onsiteAddress && (
                  <Section title="รูปแบบการเรียน">
                    <PaymentSuccessBlock
                      title={{
                        icon: courseTypeIconSolid[props.liveCourse.type],
                        text: courseTypeText[props.liveCourse.type],
                      }}
                    >
                      {props.status.onsiteAddress}
                    </PaymentSuccessBlock>
                  </Section>
                )}
                {props.summary.addon && (
                  <Section title="สมัครสมาชิก MonkeyEveryday">
                    <PaymentSuccessBlock>{props.summary.addon.name}</PaymentSuccessBlock>
                  </Section>
                )}
                {props.status.receiveMethod && (
                  <Section title="ช่องทางการรับหนังสือเรียน">
                    <PaymentSuccessBlock {...receiveMethodMapping[props.status.receiveMethod]} />
                  </Section>
                )}
                <Section title="ข้อมูลการชำระเงิน">
                  <PaymentSuccessBlock
                    title={{
                      text: 'ช่องทางการชำระเงิน',
                      icon: faCreditCard,
                    }}
                  >
                    {paymentMethodMapping[props.status.paymentMethod]}
                  </PaymentSuccessBlock>
                  {false && ( // TODO: Handle coupon code
                    <PaymentSuccessBlock
                      title={{
                        text: 'ส่วนลดที่ใช้',
                        icon: faTicket,
                      }}
                    >
                      ส่วนลด 100 บาท โค้ด INFLUENCER
                    </PaymentSuccessBlock>
                  )}
                </Section>
              </Box.Content>
            </Box.Root>
          }
          right={
            <div className="flex flex-col gap-y-6">
              <Button variant="default" className="w-full lg:hidden" asChild>
                <Link passHref href={`/course/${props.liveCourse.id}`}>
                  กลับไปหน้าคอร์สเรียน
                </Link>
              </Button>
              <PaymentSuccessSummary costs={costBreakdown} totalPrice={props.summary.amount} />
            </div>
          }
        />
      </div>
    </>
  )
}
