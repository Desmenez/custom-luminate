import { ComponentProps } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

import JCBColoredIcon from '@app/assets/credit-card/colored-jcb.svg'
import MasterColoredCardIcon from '@app/assets/credit-card/colored-mastercard.svg'
import VisaColoredIcon from '@app/assets/credit-card/colored-visa.svg'
import dynamic from 'next/dynamic'
import NextImage from 'next/image'

import { PaymentMethod } from '@luminate/database'
import { useBreakpoint } from '@luminate/react-hooks'
import { RadioGroup } from '@luminate/ui'

import { PaymentMethodSchema } from '../../schema/payment-method'
import { ExpandableOption } from '../expandable-option'
import { Section } from '../section'
import { PaymentMethodTitle } from './title'

const LazyTruemoneyMethodForm = dynamic(
  import('./true-money-method').then((mod) => mod.TruemoneyMethodForm),
  // TODO
  { loading: () => <p>Loading...</p>, ssr: false }
)

const LazyCreditCardMethodForm = dynamic(
  import('./credit-card-method').then((mod) => mod.CreditCardMethodForm),
  // TODO
  { loading: () => <p>Loading...</p>, ssr: false }
)

const LazyMobileBankingMethodForm = dynamic(
  import('./mobile-banking-method').then((mod) => mod.MobileBankingMethodForm),
  // TODO
  { loading: () => <p>Loading...</p>, ssr: false }
)

export interface SelectPaymentMethodProps {
  creditCardMethodFormProps: ComponentProps<typeof LazyCreditCardMethodForm>
}

export const SelectPaymentMethod = (props: SelectPaymentMethodProps) => {
  const { control, setValue } = useFormContext<PaymentMethodSchema>()
  const selectedPaymentMethod = useWatch({ control, name: 'method' })

  const { isMobile } = useBreakpoint()

  return (
    <Section title="เลือกช่องทางการชำระเงิน">
      <RadioGroup
        className="w-full flex flex-col"
        onValueChange={(value: PaymentMethod) => setValue('method', value)}
      >
        <ExpandableOption
          title={
            <PaymentMethodTitle
              title="ชำระด้วยบัตรเครดิต / เดบิต"
              icon={
                <div className="flex flex-row gap-1 h-5 items-center">
                  <VisaColoredIcon />
                  <MasterColoredCardIcon />
                  <JCBColoredIcon />
                </div>
              }
            />
          }
          value={PaymentMethod.CREDIT_CARD}
          checked={selectedPaymentMethod === PaymentMethod.CREDIT_CARD}
        >
          <LazyCreditCardMethodForm {...props.creditCardMethodFormProps} />
        </ExpandableOption>

        <ExpandableOption
          title={
            <PaymentMethodTitle
              title="ชำระผ่าน True Money"
              icon={
                <NextImage
                  src="https://storage.googleapis.com/prod-bucket-public/client-file/images/live-course/truemoney.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="h-[48px] w-fit"
                />
              }
            />
          }
          value={PaymentMethod.TRUEMONEY}
          checked={selectedPaymentMethod === PaymentMethod.TRUEMONEY}
        >
          <LazyTruemoneyMethodForm />
        </ExpandableOption>
        <ExpandableOption
          title={
            <PaymentMethodTitle
              title="ชำระด้วย Promptpay (QR Code)"
              icon={
                <NextImage
                  src="https://storage.googleapis.com/prod-bucket-public/client-file/images/live-course/promptpay.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="h-[32px] w-fit bg-white"
                />
              }
            />
          }
          value={PaymentMethod.PROMPTPAY}
          checked={selectedPaymentMethod === PaymentMethod.PROMPTPAY}
        ></ExpandableOption>
        <ExpandableOption
          title={
            <PaymentMethodTitle
              title={`ชำระด้วยการโอนเงิน${isMobile ? '' : ' (*สำหรับชำระผ่านมือถือเท่านั้น)'}`}
              icon={
                <NextImage
                  alt=""
                  src={
                    isMobile
                      ? 'https://storage.googleapis.com/prod-bucket-public/client-file/images/live-course/online-bank.svg'
                      : 'https://storage.googleapis.com/prod-bucket-public/client-file/images/live-course/online-bank-disabled.svg'
                  }
                  width={0}
                  height={0}
                  className="h-[32px] w-fit"
                />
              }
            />
          }
          value={PaymentMethod.MOBILE_BANKING}
          checked={selectedPaymentMethod === PaymentMethod.MOBILE_BANKING}
          disabled={!isMobile}
        >
          <LazyMobileBankingMethodForm />
        </ExpandableOption>
      </RadioGroup>
    </Section>
  )
}
