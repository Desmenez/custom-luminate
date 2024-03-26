import { cva } from 'class-variance-authority'

import { cn } from '@luminate/ui'

export const PackageStepItemType = {
  ACTIVE: 'active',
  DISABLED: 'disabled',
  PREVIOUS: 'previous',
} as const
export type PackageStepItemType = (typeof PackageStepItemType)[keyof typeof PackageStepItemType]

const packageStepItemVariants = cva('rounded-full px-3 py-1 h-fit', {
  variants: {
    type: {
      [PackageStepItemType.ACTIVE]: `bg-gray-800 text-yellow-400 font-semibold`,
      [PackageStepItemType.DISABLED]: `bg-transparent text-gray-500 hidden lg:block`,
      [PackageStepItemType.PREVIOUS]: `bg-gray-900 text-yellow-600 hidden lg:block`,
    },
  },
  defaultVariants: {
    type: 'disabled',
  },
})

export interface PackageStepItemProps {
  type: PackageStepItemType
  label: string
  className?: string
}

export const PackageStepItem: React.FC<PackageStepItemProps> = (props) => {
  return (
    <span className={cn(packageStepItemVariants({ type: props.type }), props.className)}>
      {props.label}
    </span>
  )
}
