import * as React from 'react'
import { mergeRefs } from 'react-merge-refs'

import { cn } from '../../lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoHeight?: boolean
  fullWidth?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, autoHeight, fullWidth, ...props }, ref) => {
    const localRef = React.useRef<HTMLTextAreaElement>(null)

    const adjustHeight = () => {
      const textareaRef = localRef.current
      if (!textareaRef) return
      if (textareaRef.style) {
        textareaRef.style.height = 'auto'
        textareaRef.style.height = textareaRef.scrollHeight + 'px'
      }
    }

    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-gray-600',
          'bg-background px-3.5 py-2 text-sm',
          'focus-visible:border-yellow-500 focus-visible:ring-0',
          'focus:outline-none focus:ring-0',
          'disabled:cursor-not-allowed disabled:opacity-50',
          fullWidth && 'w-full',
          autoHeight && 'resize-none overflow-y-hidden',
          className
        )}
        ref={mergeRefs([localRef, ref])}
        {...props}
        onChange={(event) => {
          if (autoHeight) adjustHeight()
          props.onChange?.(event)
        }}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
