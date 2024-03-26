import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@luminate/ui'
import { formatAsBaht } from '@luminate/utils'

const priceButtonVariants = cva(
  cn(
    'rounded-full px-4 py-2.5 font-sans font-semibold text-sm leading-normal shadow-lg transition-all',
    'group-disabled:bg-gray-800 group-disabled:ring-1 group-disabled:ring-gray-700 group-disabled:text-current'
  ),
  {
    variants: {
      variant: {
        default: cn(
          'text-yellow-400 ',
          'bg-gray-900 group-hover:bg-[#222] group-rdx-state-checked:bg-[#222]',
          'ring-1 ring-gray-800 group-hover:ring-gray-700 group-rdx-state-checked:ring-gray-700'
        ),
        online: 'bg-red-900 text-red-200',
        onsite: 'bg-green-900 text-green-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface PriceButtonProps {
  variant?: VariantProps<typeof priceButtonVariants>['variant']
  price: number
}

export function PriceButton(props: PriceButtonProps) {
  return (
    <div className={priceButtonVariants({ variant: props.variant })}>
      {formatAsBaht(props.price)}
    </div>
  )
}
