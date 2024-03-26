import * as React from 'react'

import { cn } from '../../lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    const inputGroup = useInputGroupContext()
    const { hasLeftIcon = false, hasRightIcon = false } = inputGroup ?? {}
    return (
      <input
        ref={ref}
        className={cn(
          'peer flex h-10 w-full rounded-md border border-input bg-background px-3.5 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none',
          'transition-colors',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'hover:disabled:border-input',
          'hover:ring-0 hover:border-yellow-500',
          'focus:ring-0 focus:border-yellow-600',
          'placeholder:text-gray-500',
          'aria-[invalid=true]:border-red-600',
          hasLeftIcon && 'pl-10',
          hasRightIcon && 'pr-10',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

interface InputGroupContextValue {
  hasLeftIcon: boolean
  hasRightIcon: boolean
}

const InputGroupContext = React.createContext({} as InputGroupContextValue)
const useInputGroupContext = () => React.useContext(InputGroupContext)

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[]
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, ...props }, ref) => {
    function isChildrenInputIcon() {
      const validChildren = getValidChildren(children)
      let hasLeftIcon = false
      let hasRightIcon = false
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      validChildren.forEach((child: any) => {
        if (child.type.displayName === 'InputLeftIcon') {
          hasLeftIcon = true
        } else if (child.type.displayName === 'InputRightIcon') {
          hasRightIcon = true
        }
      })
      return { hasLeftIcon, hasRightIcon }
    }
    const hasIcons = isChildrenInputIcon()

    return (
      <InputGroupContext.Provider value={hasIcons}>
        <div ref={ref} className={cn('relative w-full flex', className)} {...props}>
          {children}
        </div>
      </InputGroupContext.Provider>
    )
  }
)
InputGroup.displayName = 'InputGroup'

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const InputLeftIcon = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'absolute ml-3.5 mr-2 left-0 inset-y-0 flex justify-center items-center pointer-events-none',
          className
        )}
      >
        {props.children}
      </div>
    )
  }
)
InputLeftIcon.displayName = 'InputLeftIcon'

const InputRightIcon = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'absolute mr-3.5 ml-2 right-0 inset-y-0 flex justify-center items-center pointer-events-none',
          className
        )}
      >
        {props.children}
      </div>
    )
  }
)
InputRightIcon.displayName = 'InputRightIcon'

export { Input, InputGroup, InputLeftIcon, InputRightIcon }
