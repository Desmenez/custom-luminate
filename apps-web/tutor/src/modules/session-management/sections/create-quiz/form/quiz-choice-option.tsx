import { forwardRef } from 'react'

import { convertIndexToAlphabet } from '@app/modules/session-management/utils/convert-index-to-alphabet'
import { cva } from 'class-variance-authority'

import { RadioGroupItem, RadioGroupItemProps, cn } from '@luminate/ui'

const quizChoiceOptionVariants = cva(
  `p-4 flex items-center justify-center bg-gray-900 rounded-lg transition-all text-lg text-white
  cursor-pointer select-none ring-1 ring-gray-900`,
  {
    variants: {
      checked: {
        true: `bg-gray-800 ring-2 ring-yellow-400`,
      },
      disabled: {
        true: `bg-gray-700 ring-0`,
      },
      correct: {
        true: `bg-green-500 ring-0`,
      },
    },
    defaultVariants: {
      checked: false,
      disabled: false,
      correct: false,
    },
    compoundVariants: [
      {
        checked: true,
        correct: true,
        className: 'bg-green-500 ring-2 ring-yellow-400',
      },
      {
        checked: true,
        disabled: true,
        className: 'bg-gray-700 ring-2 ring-yellow-400',
      },
      {
        checked: true,
        disabled: true,
        correct: true,
        className: 'bg-green-500 ring-2 ring-yellow-400',
      },
    ],
  }
)

export interface QuizChoiceOptionProps extends Omit<RadioGroupItemProps, 'type'> {
  isCorrect?: boolean
}

export const QuizChoiceOption: React.FC<QuizChoiceOptionProps> = forwardRef<
  HTMLButtonElement,
  QuizChoiceOptionProps
>(({ value, className, isCorrect, ...props }, ref) => {
  const valueNumber = parseInt(value)

  return (
    <div className="relative">
      <RadioGroupItem
        className="peer !opacity-0 max-h-0 absolute top-0 left-0"
        value={value}
        ref={ref}
        {...props}
      ></RadioGroupItem>
      <label
        htmlFor={props.id}
        className={cn(
          quizChoiceOptionVariants({
            correct: isCorrect,
            disabled: props.disabled,
            checked: props.checked,
          }),
          className
        )}
      >
        {convertIndexToAlphabet(valueNumber - 1)}
      </label>
    </div>
  )
})

QuizChoiceOption.displayName = 'QuizChoiceOption'
