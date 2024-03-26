import { useEffect, useState } from 'react'

import { envClient } from '@app/core/env/client'
import { reactQueryClient } from '@app/core/services'
import { useRouter } from 'next/router'

import { LearningType, PaymentMethod, ReceiveMethod } from '@luminate/database'
import { useOmise } from '@luminate/omise'

export default function Page() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return null
  }
  return <PlaygroundOmise />
}

function PlaygroundOmise() {
  const router = useRouter()
  const omise = useOmise(envClient.NEXT_PUBLIC_OMISE_PUBLIC_KEY)

  const bookingId = router.query.bookingId as string
  const { mutateAsync: createBooking } = reactQueryClient.payment.createBooking.useMutation()
  const { data: booking } = reactQueryClient.payment.getBooking.useQuery(
    {
      params: {
        bookingId,
      },
    },
    { enabled: !!bookingId }
  )
  const { mutateAsync: createCharge } = reactQueryClient.payment.createCharge.useMutation()
  const chargeId = router.query.chargeId as string
  const { data: charge } = reactQueryClient.payment.getCharge.useQuery(
    {
      params: {
        chargeId: chargeId,
      },
    },
    {
      enabled: !!chargeId,
    }
  )
  const { data: cards } = reactQueryClient.payment.getCreditCards.useQuery()
  return (
    <div>
      <omise.OmiseScript />
      <button
        onClick={async () => {
          const res = await createBooking({
            body: {
              liveCourseId: 'liveCourse1',
              learningType: LearningType.ONLINE,
              addonId: 'addon1',
              receiveMethod: ReceiveMethod.PICKUP,
              shippingAddress: null,
            },
          })
          console.log(res)
          // alert(res.body.bookingId)
        }}
      >
        Create booking
      </button>
      <pre>{JSON.stringify(booking ?? null, null, 2)}</pre>
      <pre>{JSON.stringify(charge ?? null, null, 2)}</pre>
      <button
        onClick={async () => {
          const { response: source } = await omise.createSource({
            type: 'truemoney',
            amount: booking!.body!.subtotal,
            phone: '0123456789',
          })
          const res = await createCharge({
            body: {
              bookingId: booking!.body!.id,
              discountCode: null,
              source: {
                type: PaymentMethod.TRUEMONEY,
                sourceId: source.id,
                returnUrl: 'https://localhost:3000',
              },
            },
          })
          console.log(res)
        }}
      >
        Create charge from truemoney
      </button>
      <button
        onClick={async () => {
          const { response: source } = await omise.createSource({
            type: 'mobile_banking_bay',
            amount: booking!.body!.subtotal,
            platformType: 'IOS',
          })
          const res = await createCharge({
            body: {
              bookingId: booking!.body!.id,
              discountCode: null,
              source: {
                type: PaymentMethod.MOBILE_BANKING,
                sourceId: source.id,
                returnUrl: 'https://localhost:3000',
              },
            },
          })
          console.log(res)
        }}
      >
        Create charge from bay
      </button>
      <button
        onClick={async () => {
          const { response: source } = await omise.createSource({
            type: 'promptpay',
            amount: booking!.body!.subtotal,
          })
          const res = await createCharge({
            body: {
              bookingId: booking!.body!.id,
              discountCode: null,
              source: {
                type: PaymentMethod.PROMPTPAY,
                sourceId: source.id,
              },
            },
          })
          console.log(res)
        }}
      >
        Create charge from promptpay
      </button>
      <button
        onClick={async () => {
          const { response: card } = await omise.createCardToken({
            holderName: 'John Doe',
            number: '4242424242424242',
            expirationMonth: 2,
            expirationYear: 2024,
            verificationValue: '123',
          })
          console.log(card)
          alert(card.id)
        }}
      >
        Create card
      </button>
      <div>
        Cards:
        <ul>
          {cards?.body?.cards?.map((card) => (
            <li key={card.id}>
              {`${card.brand} ${card.lastDigits} ${card.id} `}
              <button
                onClick={async () => {
                  const res = await createCharge({
                    body: {
                      bookingId: booking!.body!.id,
                      discountCode: null,
                      source: {
                        type: PaymentMethod.CREDIT_CARD,
                        cardId: card.id,
                      },
                    },
                  })
                  console.log(res)
                }}
              >
                Create charge from card
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
