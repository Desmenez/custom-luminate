import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'

import JCBColoredIcon from '@app/assets/credit-card/colored-jcb.svg'
import MasterColoredCardIcon from '@app/assets/credit-card/colored-mastercard.svg'
import VisaColoredIcon from '@app/assets/credit-card/colored-visa.svg'
import JCBIcon from '@app/assets/credit-card/jcb.svg'
import MasterCardIcon from '@app/assets/credit-card/mastercard.svg'
import VisaIcon from '@app/assets/credit-card/visa.svg'
import { envClient } from '@app/core/env/client'
import { faCircleExclamation } from '@fortawesome/pro-solid-svg-icons'
import { zodResolver } from '@hookform/resolvers/zod'

import { Token, useOmise } from '@luminate/omise'
import { Button, Checkbox, FontAwesomeIcon, FormItem, FormLabel, Input, Label } from '@luminate/ui'

import { CreditCardMethodAddCardSchema } from '../../schema/payment-method'
import { CreditCardBrand } from '../credit-card'

interface CreditCardMethodAddCardFormProps {
  addCreditCard: (token: Token, useAsDefault: boolean) => Promise<void>
  onCancel?: () => void
}

function getCreditCardBrand(cardNumber: string): CreditCardBrand | null {
  // Remove any non-numeric characters
  const cleanCardNumber = cardNumber.replace(/\D/g, '')

  // https://en.wikipedia.org/wiki/Payment_card_number
  const brandPatterns: Record<CreditCardBrand, RegExp> = {
    [CreditCardBrand.VISA]: /^4/, // start with 4
    [CreditCardBrand.MASTERCARD]: /^5[1-5]/, // start with 51-55
    [CreditCardBrand.JCB]: /^(352[8-9]|35[3-8][0-9])/, // start with 3528-3529 or 3530-3589
  }

  for (const key in brandPatterns) {
    const brand = key as CreditCardBrand
    if (brandPatterns[brand].test(cleanCardNumber)) {
      return brand
    }
  }

  return null
}

export const CreditCardMethodAddCardForm: React.FC<CreditCardMethodAddCardFormProps> = ({
  addCreditCard,
  onCancel,
}) => {
  const { register, getValues, setValue, control } = useForm<CreditCardMethodAddCardSchema>({
    resolver: zodResolver(CreditCardMethodAddCardSchema),
    defaultValues: {
      isDefault: false,
    },
  })
  const omise = useOmise(envClient.NEXT_PUBLIC_OMISE_PUBLIC_KEY)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [cardBrand, setCardBrand] = useState<CreditCardBrand | null>(null)

  const isDefault = useWatch({ name: 'isDefault', control: control, defaultValue: true })
  const cardNumberProps = register('cardNumber')
  const cardExpirationProps = register('expirationDate')

  const onSubmit = async () => {
    setIsLoading(true)
    try {
      // TODO: set to default card
      const data = getValues()
      const payload = CreditCardMethodAddCardSchema.parse(data)
      console.log("Form is valid, let's add a credit card", payload)

      // If form is valid, add a credit card via Omise API
      // Create a card token
      const response = await omise.createCardToken({
        holderName: payload.cardHolderName,
        number: payload.cardNumber,
        verificationValue: payload.cvv,
        expirationMonth: payload.expirationMonth,
        expirationYear: payload.expirationYear,
      })

      await addCreditCard(response.response, isDefault)
    } catch (err: unknown) {
      setIsLoading(false)
      console.error(err)
      setIsError(true)
    }
  }

  const applyCardNumberMask = (value: string) => {
    let newValue = value.replace(/\D/g, '')
    newValue = newValue.replace(/(\d{4})/g, '$1 ')
    newValue = newValue.trim()
    return newValue
  }

  const applyCardExpirationMask = (value: string) => {
    let newValue = value.replace(/\D/g, '')
    newValue = newValue.replace(/(\d{2})/g, '$1/')
    newValue = newValue.trim().slice(0, 5)
    return newValue
  }

  return (
    <div className="grid grid-cols-2 flex-col items-center gap-4 w-full">
      {/* First line - cardNumber and icons */}
      <div className="grid grid-cols-2 flex-col gap-1 items-center col-span-2">
        <Label htmlFor={cardNumberProps.name} className="col-span-2 font-normal text-sm">
          หมายเลขบัตร
        </Label>
        <FormItem className="w-full col-span-2 md:col-span-1">
          <Input
            placeholder="หมายเลขบัตร 16 หลัก"
            maxLength={19}
            {...cardNumberProps}
            onChange={(event) => {
              event.target.value = applyCardNumberMask(event.target.value)
              setCardBrand(getCreditCardBrand(event.target.value))
              cardNumberProps.onChange(event)
            }}
            disabled={isLoading}
          />
        </FormItem>
        <div className="hidden md:flex flex-row items-center gap-2 h-5 col-span-2 md:col-span-1">
          {cardBrand === CreditCardBrand.VISA ? <VisaColoredIcon /> : <VisaIcon />}
          {cardBrand === CreditCardBrand.MASTERCARD ? (
            <MasterColoredCardIcon />
          ) : (
            <MasterCardIcon />
          )}
          {cardBrand === CreditCardBrand.JCB ? <JCBColoredIcon /> : <JCBIcon />}
        </div>
      </div>

      {/* Second line - cardHolderName */}
      <FormItem className="col-span-2">
        <FormLabel>ชื่อผู้ถือบัตร</FormLabel>
        <Input placeholder="ชื่อตามหน้าบัตร" {...register('cardHolderName')} disabled={isLoading} />
      </FormItem>

      {/* Third line - card expiration and cvv */}
      <FormItem className="col-span-2 md:col-span-1">
        <FormLabel>บัตรหมดอายุ</FormLabel>
        <Input
          placeholder="ดด/ปป"
          {...cardExpirationProps}
          maxLength={5}
          onChange={(event) => {
            event.target.value = applyCardExpirationMask(event.target.value)
            cardExpirationProps.onChange(event)
          }}
          disabled={isLoading}
        />
      </FormItem>

      <FormItem className="col-span-2 md:col-span-1">
        <FormLabel>CVV</FormLabel>
        <Input
          type="password"
          placeholder="3 หลัก"
          maxLength={3}
          {...register('cvv')}
          disabled={isLoading}
        />
      </FormItem>

      {/* Error information box */}
      {isError && <ErrorInformation />}

      {/* Fourth line - Checkbox set to default card */}
      <div className="flex items-center space-x-2 col-span-2">
        <Checkbox
          id="isDefault"
          checked={isDefault}
          onCheckedChange={(value) => setValue('isDefault', value as boolean)}
          disabled={isLoading}
        />
        <Label
          htmlFor="isDefault"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          ใช้เป็นบัตรหลัก
        </Label>
      </div>

      {/* Fifth line - buttons */}
      <div className="flex flex-row gap-4 ml-auto col-span-2">
        {onCancel && (
          <Button type="button" onClick={onCancel} variant="outline" disabled={isLoading}>
            ยกเลิก
          </Button>
        )}
        <Button type="button" onClick={onSubmit} disabled={isLoading}>
          ยืนยัน
        </Button>
      </div>
    </div>
  )
}

const ErrorInformation = () => {
  return (
    <div className="flex flex-col gap-2 p-4 border border-red-800 bg-red-800/20 rounded-md col-span-2">
      <div className="flex flex-row items-center gap-1 text-red-200 font-normal text-xs">
        <FontAwesomeIcon icon={faCircleExclamation} className="h-3 w-3" />
        <h6>ข้อมูลบางอย่างไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง</h6>
      </div>
      <ul className="list-disc text-red-400 text-xs ml-4 font-normal">
        <li>หมายเลขบัตรไม่ครบ หรือไม่ถูกต้อง</li>
        <li>วันที่หมดอายุของบัตรอาจไม่ถูกต้อง</li>
        <li>หมายเลข CVV อาจไม่ถูกต้อง</li>
      </ul>
    </div>
  )
}
