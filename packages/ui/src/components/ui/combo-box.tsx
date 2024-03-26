'use client'

import { forwardRef, useState } from 'react'

import { faCheck, faChevronDown } from '@fortawesome/pro-regular-svg-icons'

import { cn } from '../../lib/utils'
import { FontAwesomeIcon } from '../handmade/font-awesome-icon'
import { Button, ButtonProps } from './button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export interface ComboBoxProps extends Omit<ButtonProps, 'onChange'> {
  options: {
    value: string
    label: string
  }[]
  name?: string
  placeholder?: string
  emptyText?: string
  value?: string
  onChange?: (value: string) => void
}

export const ComboBox = forwardRef<HTMLButtonElement, ComboBoxProps>(function ComboBox(
  { options, name, disabled, placeholder, emptyText, className, value = '', onChange, ...props },
  ref
) {
  const [open, setOpen] = useState(false)

  const onSelect = (currentValue: string) => {
    onChange?.(currentValue === value ? '' : currentValue)
    setOpen(false)
  }

  return (
    <Popover open={open && !disabled} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled} className={cn(disabled && 'cursor-default')}>
        <Button
          name={name}
          type="button"
          fullWidth
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          ref={ref}
          className={cn(
            'px-3.5 py-2 justify-between font-normal',
            'hover:border-yellow-600 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-yellow-500 border-gray-700',
            'flex flex-row gap-2',
            value
              ? 'text-white hover:text-white active:text-white'
              : 'text-gray-500 hover:text-gray-500 active:text-gray-500',
            'aria-[invalid=true]:border-red-600',
            className
          )}
          {...props}
        >
          {value !== '' ? options.find((option) => option.value === value)?.label : placeholder}
          <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-sm w-full max-h-48 p-0 overflow-scroll">
        <Command aria-disabled={disabled}>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup className="max-h-48 overflow-scroll">
            {options.map((option) => (
              <CommandItem key={option.value} onSelect={onSelect}>
                <FontAwesomeIcon
                  icon={faCheck}
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
})
