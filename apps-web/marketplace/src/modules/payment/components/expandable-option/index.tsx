import { PropsWithChildren, ReactNode, forwardRef } from 'react'

import { RadioGroupItem, RadioGroupItemProps, cn } from '@luminate/ui'

export interface ExpandableOptionProps extends Omit<RadioGroupItemProps, 'title'> {
  title: ReactNode
  right?: ReactNode
  note?: string
  disabled?: boolean
}

export const ExpandableOption: React.FC<PropsWithChildren<ExpandableOptionProps>> = forwardRef<
  HTMLButtonElement,
  ExpandableOptionProps
>(function AddressOption(
  { value, className, title, note, disabled = false, children, ...props },
  ref
) {
  return (
    <div
      className={cn(
        'group flex flex-row flex-wrap rounded-md ring-1 ring-inset ring-gray-700 transition-all',
        'hover:bg-gray-800',
        props.checked ? 'bg-gray-800 ring-2 ring-yellow-400' : 'bg-gray-900',
        disabled && 'opacity-70 pointer-events-none',
        className
      )}
      data-state={props.checked ? 'checked' : 'unchecked'}
    >
      {/* Top */}
      <label
        className="flex flex-row justify-between w-full p-4 cursor-pointer min-h-[77px]"
        htmlFor={props.id}
      >
        {/* Left-hand side */}
        <div className="flex flex-row gap-4 items-center flex-1">
          <RadioGroupItem value={value} ref={ref} disabled={disabled} {...props} />
          <div className="flex flex-col font-semibold flex-1">
            {title}
            {note && <span className="text-xs text-gray-500 font-normal">{note}</span>}
          </div>
        </div>

        {/* Right-hand side */}
        {props.right}
      </label>

      {/* Bottom - show if and only if the option is selected */}
      {props.checked && children && <div className="w-full pb-4 px-4">{children}</div>}
    </div>
  )
})
