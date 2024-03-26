import { useEffect, useRef, useState } from 'react'

import { faCheck } from '@fortawesome/pro-solid-svg-icons'

import { useIntersectionObserver } from '@luminate/react-hooks'
import { FontAwesomeIcon, cn } from '@luminate/ui'

export interface QuestionAnswerBarProps {
  isCorrect?: boolean
  amountOfAnswers: number
  label: string
  percent: number
  className?: string
}

const BAR_MIN_HEIGHT = 2
const BAR_MAX_HEIGHT = 160

export const QuestionAnswerBar = (props: QuestionAnswerBarProps) => {
  const { isCorrect = false, amountOfAnswers, label, percent } = props

  const barHeight = Math.max(BAR_MIN_HEIGHT, BAR_MAX_HEIGHT * percent)

  const shouldBeOnOfTheBar = percent < 0.25

  const ref = useRef<HTMLDivElement>(null)
  const entry = useIntersectionObserver(ref, {})
  const [intersected, setIntersected] = useState(false)

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIntersected(true)
    }
  }, [entry?.isIntersecting])

  return (
    <div className={cn('flex-1 max-w-[200px] min-w-[100px] w-full', props.className)} ref={ref}>
      <div className="flex flex-col justify-end" style={{ height: BAR_MAX_HEIGHT }}>
        <div
          className={cn(
            'relative rounded-lg',
            isCorrect ? 'bg-green-600' : 'bg-gray-900',
            'origin-bottom transition-all duration-500',
            intersected ? 'scale-y-100' : 'scale-y-0'
          )}
          style={{ height: barHeight }}
        >
          <p
            className={cn(
              'absolute inset-x-0 top-0 p-2 text-center font-semibold',
              shouldBeOnOfTheBar && '-translate-y-3/4'
            )}
          >
            {amountOfAnswers}
            <span className="max-lg:hidden"> คน</span>
          </p>
        </div>
      </div>
      <div
        className={cn('flex items-center justify-center gap-1 pt-1', isCorrect && 'text-green-600')}
      >
        <h4 className="text-lg font-semibold lg:text-xl">{label}</h4>
        {isCorrect && <FontAwesomeIcon icon={faCheck} className="h-4 w-4 lg:h-5 lg:w-5" />}
      </div>
    </div>
  )
}
