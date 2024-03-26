import { FormEvent, useId, useRef } from 'react'

import { faCheck, faXmark } from '@fortawesome/pro-solid-svg-icons'

import { Button, FontAwesomeIcon, Textarea, toast } from '@luminate/ui'

import { QuizTextProps } from '../../types'
import { QuizAccordion } from './base'

export const QuizText: React.FC<QuizTextProps> = (props) => {
  const {
    quizId,
    quizNumber,
    totalQuiz,
    placeholder,
    myAnswer,
    correctAnswer,
    isAcceptingAnswers,
    isMyAnswerCorrect,
    onSubmit: _onSubmit,
  } = props

  const toastId = useId()
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const shouldDisable = !!myAnswer || !isAcceptingAnswers

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = inputRef.current?.value
    if (!value) {
      toast.error('กรุณาเลือกคำตอบ', { id: toastId })
      return
    }
    _onSubmit?.(quizId, { answer: value })
  }

  return (
    <QuizAccordion quizId={quizId} quizNumber={quizNumber} totalQuiz={totalQuiz}>
      <div className="flex flex-col gap-3 px-3 pt-3">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Textarea
            ref={inputRef}
            placeholder={placeholder}
            autoHeight
            fullWidth
            defaultValue={myAnswer}
            disabled={shouldDisable}
          />
          {correctAnswer && (
            <div className="flex flex-wrap gap-2 items-center">
              {isMyAnswerCorrect ? (
                <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-green-600" />
              ) : (
                <FontAwesomeIcon icon={faXmark} className="h-4 w-4 text-red-600" />
              )}
              <span className="font-bold">เฉลย</span>
              <span className={isMyAnswerCorrect ? 'text-green-600' : 'text-red-600'}>
                {correctAnswer}
              </span>
            </div>
          )}
          <Button
            fullWidth
            // TODO: Waiting for Button design system - variant
            variant="default"
            disabled={shouldDisable}
            type="submit"
          >
            ส่งคำตอบ
          </Button>
        </form>
      </div>
    </QuizAccordion>
  )
}
