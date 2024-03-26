import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Token } from '@luminate/omise'
import { GetCreditCardsResponse } from '@luminate/rest'
import { ValuesType } from '@luminate/types-utility'

import { CreditCardMethodAddCardForm } from './credit-card-method-add-card-form'
import { CreditCardMethodSelectionSlider } from './credit-card-method-selection-slider'

const CreditCardMethodMode = {
  SELECT: 'SELECT',
  ADD: 'ADD',
} as const
type CreditCardMethodMode = ValuesType<typeof CreditCardMethodMode>

export interface CreditCardMethodProps {
  creditCards: GetCreditCardsResponse | null
  addCreditCard: (cardToken: string, useAsDefault: boolean) => Promise<void>
}

export const CreditCardMethodForm = (props: CreditCardMethodProps) => {
  const [mode, setMode] = useState<CreditCardMethodMode>(CreditCardMethodMode.SELECT)
  const { getValues, setValue } = useFormContext()

  const defaultCardId = props.creditCards?.defaultCard ?? undefined

  const rawCards =
    props.creditCards?.cards.map(
      (card) =>
        ({
          id: card.id,
          brand: mapCardBrand(card.brand),
          expirationMonth: card.expirationMonth,
          expirationYear: card.expirationYear,
          lastDigits: card.lastDigits,
        }) as const
    ) ?? []
  const defaultCard = rawCards.find((card) => card.id === defaultCardId)
  const cards =
    defaultCard === undefined
      ? rawCards
      : [defaultCard, ...rawCards.filter((card) => card.id !== defaultCardId)]

  useEffect(() => {
    if (!defaultCardId) return
    const existingValue = getValues('cardId')
    if (existingValue) return
    setValue('cardId', defaultCardId)
  }, [getValues, setValue, defaultCardId])

  const loadedAndNoCards = !!props.creditCards && props.creditCards.cards.length === 0
  const loadingOrHasCards = !loadedAndNoCards
  const showAddForm = mode === CreditCardMethodMode.ADD || loadedAndNoCards

  async function handleAddCreditCard(token: Token, useAsDefault: boolean) {
    await props.addCreditCard(token.id, useAsDefault)
    setValue('cardId', token.card.id)
    setMode(CreditCardMethodMode.SELECT)
  }

  return (
    <div className="max-w-full">
      {!showAddForm && (
        <CreditCardMethodSelectionSlider
          defaultValue={props.creditCards?.defaultCard ?? undefined}
          isAddCardFormOpen={showAddForm}
          onOpenAddCardForm={() => setMode(CreditCardMethodMode.ADD)}
          creditCards={cards}
        />
      )}
      {showAddForm && (
        <div>
          {loadingOrHasCards && (
            <p className="mb-4 font-sans font-semibold text-base text-gray-50">เพิ่มบัตรใหม่</p>
          )}
          <CreditCardMethodAddCardForm
            addCreditCard={handleAddCreditCard}
            onCancel={loadingOrHasCards ? () => setMode(CreditCardMethodMode.SELECT) : undefined}
          />
        </div>
      )}
    </div>
  )
}

function mapCardBrand(brand: string) {
  switch (brand) {
    case 'Visa':
      return 'visa'
    case 'MasterCard':
      return 'mastercard'
    case 'JCB':
      return 'jcb'
    default:
      throw new Error(`invalid card brand: ${brand}`)
  }
}
