declare global {
  interface Window {
    Omise: Omise
    OmiseCard: unknown
  }
  const Omise: Omise
}

export interface Omise {
  setPublicKey: (key: string) => void
  createToken: (
    type: 'card',
    tokenParameters: TokenParameters,
    callback: (statusCode: number, response: Token) => void
  ) => void
  createSource: (
    type: string,
    sourceParameters: unknown,
    callback: (statusCode: number, response: Source) => void
  ) => void
}

export interface Source {
  object: 'source'
  id: string
  livemode: boolean
  location: string
  amount: number
  bank: string | null
  barcode: string | null
  charge_status: 'failed' | 'expired' | 'pending' | 'reversed' | 'successful' | 'unknown'
  created_at: string
  currency: string
  discounts: unknown[]
  email: string | null
  flow: 'redirect' | 'offline' | 'app_redirect'
  installment_term: number | null
  mobile_number: string | null
  name: string | null
  phone_number: string | null
  receipt_amount: number | null
  references: unknown | null
  scannable_code: unknown
  store_id: string | null
  store_name: string | null
  terminal_id: string | null
  type: 'promptpay'
  zero_interest_installments: boolean | null
  platform_type: 'IOS' | 'ANDROID'
}

export interface Token {
  object: 'token'
  id: string
  livemode: boolean
  location: string
  used: boolean
  charge_status: 'failed' | 'expired' | 'pending' | 'reversed' | 'successful' | 'unknown'
  created_at: string
  card: Card
}

export interface TokenParameters {
  city?: string
  country?: string
  expiration_month: number
  expiration_year: number
  name: string
  number: string
  phone_number?: string
  postal_code?: string
  security_code?: string
  state?: string
  street1?: string
  street2?: string
}

export interface Card {
  object: 'card'
  id: string
  livemode: boolean
  location: string | null
  deleted: boolean
  street1: string | null
  street2: string | null
  city: string | null
  state: string | null
  phone_number: string | null
  postal_code: string | null
  country: string
  financing: 'credit' | 'debit' | 'prepaid'
  bank: string
  brand: string
  fingerprint: string
  first_digits: string | null
  last_digits: string | null
  name: string
  expiration_month: number
  expiration_year: number
  created_at: string
}
