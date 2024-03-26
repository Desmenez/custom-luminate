import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active disabled:bg-muted disabled:text-muted-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active disabled:bg-muted disabled:text-muted-foreground',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active disabled:bg-muted disabled:text-muted-foreground',
        live: 'bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active disabled:bg-muted disabled:text-muted-foreground',
        outline:
          'border text-primary border-input hover:text-primary-hover hover:border-primary-hover active:text-primary-active active:border-primary-active disabled:border-muted disabled:text-muted',
        ghost:
          'text-primary hover:bg-accent hover:text-primary-hover active:text-primary-active disabled:text-muted',
        link: 'text-primary underline-offset-4 hover:underline hover:text-primary-hover active:text-primary-active disabled:text-muted',
        line: 'bg-[#00B900] text-white hover:bg-[#02C802] active:bg-[#00A600] disabled:bg-muted disabled:text-muted-foreground',
        facebook:
          'bg-[#1877F2] text-white hover:bg-[#388AF3] active:bg-[#0C68E0] disabled:bg-muted disabled:text-muted-foreground',
      },
      size: {
        xs: 'h-6 px-3 py-2 text-sm',
        sm: 'h-9 px-3 py-2 text-sm',
        default: 'h-10 px-4 py-2.5',
        lg: 'h-11 px-4.5 py-2.5 text-base',
        xl: 'h-12 px-5 py-3 text-base',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      fullWidth,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    if (asChild && (leftIcon || rightIcon)) {
      throw new Error('Cannot use leftIcon or rightIcon with asChild')
    }
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {leftIcon && <span className="inline-flex mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex ml-2">{rightIcon}</span>}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
