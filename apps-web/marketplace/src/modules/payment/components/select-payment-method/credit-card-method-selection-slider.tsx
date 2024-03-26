import { Controller, useFormContext } from 'react-hook-form'

import { faAdd } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon, Label, RadioGroup, RadioGroupItem, ScrollArea, cn } from '@luminate/ui'

import { CreditCardMethodSchema } from '../../schema/payment-method'
import { CreditCard, CreditCardBrand } from '../credit-card'

interface CreditCardMethodSelectionSliderProps {
  defaultValue: string | undefined
  creditCards: Array<{
    brand: CreditCardBrand
    expirationMonth: number
    expirationYear: number
    id: string
    lastDigits: string
  }>
  isAddCardFormOpen: boolean
  onOpenAddCardForm?: () => void
}

export const CreditCardMethodSelectionSlider = (props: CreditCardMethodSelectionSliderProps) => {
  const { control } = useFormContext<CreditCardMethodSchema>()
  const { creditCards, onOpenAddCardForm } = props

  return (
    <div className="relative flex flex-col w-full rounded-lg pb-4 border border-gray-600 overflow-hidden">
      <ScrollArea direction="horizontal" gradientFrom="from-gray-800" className="-mb-4">
        <Controller
          name="cardId"
          control={control}
          render={({ field }) => (
            <RadioGroup
              className="flex gap-2 p-4"
              {...field}
              defaultValue={props.defaultValue}
              onValueChange={field.onChange}
            >
              {/* Display credit cards */}
              {creditCards.map((creditCard) => {
                const selected = creditCard.id === field.value
                return (
                  <Label key={creditCard.id} htmlFor={creditCard.id}>
                    <CreditCard
                      cardNumber={creditCard.lastDigits}
                      brand={creditCard.brand}
                      selected={selected}
                      expirationMonth={creditCard.expirationMonth}
                      expirationYear={creditCard.expirationYear}
                    />
                    <div className="flex items-center gap-2 mt-4">
                      <RadioGroupItem value={creditCard.id} id={creditCard.id} />
                      <div>{selected ? 'ใช้อยู่ในขณะนี้' : 'เลือก'}</div>
                    </div>
                  </Label>
                )
              })}
              <div className="flex flex-col gap-[9px] items-center">
                <button
                  onClick={onOpenAddCardForm}
                  className={cn(
                    'h-[108px] w-[178px] ring-1 ring-inset ring-gray-600 rounded-lg items-center justify-center flex',
                    props.isAddCardFormOpen && 'ring-2 ring-yellow-400'
                  )}
                >
                  <FontAwesomeIcon icon={faAdd} className="text-gray-600 w-[21px] h-[24px]" />
                </button>
                <div>เพิ่มบัตร</div>
              </div>
            </RadioGroup>
          )}
        />
      </ScrollArea>
    </div>
  )
}
