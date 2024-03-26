import NextScript from 'next/script'

import { Source, Token } from './types'

type NewCard = {
  holderName: string
  number: string
  verificationValue: string
  expirationMonth: number
  expirationYear: number
}

export const useOmise = (omisePublicKey: string | undefined) => {
  const Script = () =>
    NextScript({
      id: 'omise-js',
      src: 'https://cdn.omise.co/omise.js',
      onLoad: () => {
        if (omisePublicKey) {
          window.Omise.setPublicKey(omisePublicKey)
        }
      },
    })

  const createCardToken = (card: NewCard) => {
    return new Promise<{ statusCode: number; response: Token }>((resolve, reject) => {
      window.Omise.createToken(
        'card',
        {
          name: card.holderName,
          number: card.number,
          security_code: card.verificationValue,
          expiration_month: card.expirationMonth,
          expiration_year: card.expirationYear,
        },
        async (statusCode, response) => {
          if (statusCode === 200) {
            resolve?.({ statusCode, response })
          } else {
            reject?.({ statusCode, response })
          }
        }
      )
    })
  }

  type SourceType =
    | 'promptpay'
    | 'truemoney'
    | 'sspmall'
    | 'mobile_banking_kbank'
    | 'mobile_banking_bay'
    | 'mobile_banking_scb'

  type CreateSourceParams = {
    type: SourceType
    amount: number
  } & (
    | {
        type: 'truemoney'
        phone: string
      }
    | {
        type: 'mobile_banking_kbank' | 'mobile_banking_bay' | 'mobile_banking_scb'
        platformType: Source['platform_type']
      }
    | {
        type: 'promptpay' | 'sspmall'
      }
  )

  const createSource = (props: CreateSourceParams) => {
    const { amount, type } = props

    return new Promise<{ statusCode: number; response: Source }>((resolve, reject) => {
      window.Omise.createSource(
        type,
        {
          // NOTE: - Multiply by 100 due to Omise doesn't do decimal. I.e. 100.50 Baht will be seen as 10050
          amount: amount * 100,
          currency: 'THB',
          phone_number: type === 'truemoney' ? props.phone : undefined,
          platform_type:
            type === 'mobile_banking_kbank' ||
            type === 'mobile_banking_bay' ||
            type === 'mobile_banking_scb'
              ? props.platformType
              : undefined,
        },
        (statusCode, response) => {
          if (statusCode === 200) {
            resolve({ statusCode, response })
          } else {
            reject({ statusCode, response })
          }
        }
      )
    })
  }
  return {
    /**
     * Add this component to the top of the page
     */
    OmiseScript: Script,
    createCardToken,
    createSource,
  }
}
