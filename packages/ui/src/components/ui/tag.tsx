import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const availableColors = ['red', 'yellow'] as const
const availableVariants = ['outlined', 'solid', 'soft'] as const

const createVariants = <T extends string>(variants: readonly T[]): Record<T, string> =>
  variants.reduce(
    (acc, variant) => ({
      ...acc,
      [variant]: '',
    }),
    {} as Record<T, string>
  )

const tagContainerVariants = cva(
  'inline-flex min-w-0 max-w-full cursor-default select-none items-center justify-center align-middle gap-1 text-xs',
  {
    variants: {
      size: {
        sm: 'h-4 px-2 rounded-sm py-2 px-1',
        md: 'h-6 px-3 rounded-md py-2.5 p-1.5',
        lg: 'h-8 px-4 rounded-lg py-3 px-2',
      },
      variant: { ...createVariants(availableVariants), outlined: 'border' },
      color: createVariants(availableColors),
    },
    defaultVariants: {
      size: 'md',
    },
    compoundVariants: [
      // Red
      {
        ...{ variant: 'outlined', color: 'red' },
        className: 'bg-transparent text-wite border-gray-900', // TODO - ask designer
      },
      {
        ...{ variant: 'solid', color: 'red' },
        className: 'bg-red-600 text-red-200',
      },
      {
        ...{ variant: 'soft', color: 'red' },
        className: 'bg-red-200 text-red-900', // TODO - ask designer
      },
      // Yellow
      {
        ...{ variant: 'outlined', color: 'yellow' },
        className: 'bg-transparent text-wite border-gray-900', // TODO - ask designer
      },
      {
        ...{ variant: 'solid', color: 'yellow' },
        className: 'bg-yellow-400 text-gray-900',
      },
      {
        ...{ variant: 'soft', color: 'yellow' },
        className: 'bg-yellow-200 text-yellow-900', // TODO - ask designer
      },
    ],
  }
)

interface TagProps
  extends VariantProps<typeof tagContainerVariants>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  right?: React.ReactNode
  label: string
  left?: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({
  size,
  variant,
  color,
  className,
  left,
  right,
  label,
  ...props
}) => {
  return (
    <div {...props} className={cn(tagContainerVariants({ size, variant, color }), className)}>
      {left}
      <span className="leading-none whitespace-nowrap">{label}</span>
      {right}
    </div>
  )
}
