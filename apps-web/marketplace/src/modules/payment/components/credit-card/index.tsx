import JCBIcon from '@app/assets/credit-card/jcb.svg'
import MasterCardIcon from '@app/assets/credit-card/mastercard.svg'
import VisaIcon from '@app/assets/credit-card/visa.svg'
import { cva } from 'class-variance-authority'

import { cn } from '@luminate/ui'

export const CreditCardBrand = {
  VISA: 'visa',
  MASTERCARD: 'mastercard',
  JCB: 'jcb',
} as const
export type CreditCardBrand = (typeof CreditCardBrand)[keyof typeof CreditCardBrand]

const creditCardLogoVariants = cva('absolute transition-colors right-2 top-2 h-4', {
  variants: {
    selected: { true: 'text-white', false: 'text-gray-300' },
    brand: {
      [CreditCardBrand.VISA]: ' w-14',
      [CreditCardBrand.MASTERCARD]: 'h-6 w-9',
      [CreditCardBrand.JCB]: 'h-6 w-8',
    },
  },
  defaultVariants: {
    selected: false,
  },
})

const creditCardContainerVariants = cva(
  'relative bg-gray-5 rounded-lg shadow-md h-[108px] w-[178px] select-none cursor-pointer transition-colors',
  {
    variants: {
      selected: {
        true: '',
        false: 'bg-gray-100 text-gray-400',
      },
      brand: {
        [CreditCardBrand.VISA]: '',
        [CreditCardBrand.MASTERCARD]: '',
        [CreditCardBrand.JCB]: '',
      },
    },
    compoundVariants: [
      {
        selected: true,
        brand: CreditCardBrand.VISA,
        className: 'bg-[linear-gradient(111.91deg,#0061A3_0%,#022F53_102.66%)]',
      },
      {
        selected: true,
        brand: CreditCardBrand.MASTERCARD,
        className: 'bg-[linear-gradient(111.91deg,#FCAF17_0%,#F15A22_102.66%)]',
      },
      {
        selected: true,
        brand: CreditCardBrand.JCB,
        className: 'bg-[linear-gradient(111.91deg,#BC78E0_0%,#4D29AD_102.66%)]',
      },
    ],
  }
)

const iconMapper = {
  [CreditCardBrand.VISA]: VisaIcon,
  [CreditCardBrand.MASTERCARD]: MasterCardIcon,
  [CreditCardBrand.JCB]: JCBIcon,
}

interface CreditCardProps {
  brand: CreditCardBrand
  selected?: boolean
  cardNumber?: string
  expirationMonth?: number
  expirationYear?: number
}

export const CreditCard = (props: CreditCardProps) => {
  const { expirationMonth, expirationYear, cardNumber = 'xxxx', brand, selected = false } = props

  const hasExpireDate = expirationMonth && expirationYear

  const Icon = iconMapper[brand]

  return (
    <div className={cn(creditCardContainerVariants({ brand, selected }))}>
      {/* Brand Icon */}
      <Icon className={creditCardLogoVariants({ brand, selected })} />

      <p
        className={cn(
          'absolute font-regular inset-x-4 bottom-4 text-xs',
          hasExpireDate && 'inset-x-4 bottom-12 text-xs'
        )}
      >
        xxxx-xxxx-xxxx-{cardNumber.slice(-4)}
      </p>
      {hasExpireDate && (
        <div className="absolute inset-x-4 bottom-2">
          <p className="text-xs leading-none">หมดอายุ</p>
          <p className="text-sm font-semibold">
            {expirationMonth}/{expirationYear.toString().slice(2, 4)}
          </p>
        </div>
      )}
    </div>
  )
}
