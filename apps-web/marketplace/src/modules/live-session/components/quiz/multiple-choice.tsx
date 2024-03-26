import { FormEventHandler, useId, useState } from 'react'

import { Button, RadioGroup, toast } from '@luminate/ui'

import { QuizMultipleChoiceProps } from '../../types'
import { QuizAccordion } from './base'
import { QuizChoiceOption } from './option'

export const QuizMultipleChoice: React.FC<QuizMultipleChoiceProps> = (props) => {
  const {
    quizId,
    quizNumber,
    totalQuiz,
    numberOfChoice,
    onSubmit: _onSubmit,
    correctAnswer,
    myAnswer,
    isAcceptingAnswers,
  } = props

  const key = `quiz-${quizId}-choice`
  const shouldDisable = !!myAnswer || !isAcceptingAnswers
  const toastId = useId()

  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(myAnswer)

  const getQuizChoiceIndex = (_index: number) => {
    const index = _index + 1
    return index.toString()
  }

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    if (!selectedAnswer) {
      toast.error('กรุณาเลือกคำตอบ', { id: toastId })
      return
    }
    _onSubmit?.(quizId, { choice: selectedAnswer })
  }

  return (
    <QuizAccordion quizId={quizId} quizNumber={quizNumber} totalQuiz={totalQuiz}>
      <form className="bg-gray-800 flex flex-col gap-3 px-3 pt-3" onSubmit={onSubmit}>
        <RadioGroup
          className="grid grid-cols-2 gap-2"
          defaultValue={myAnswer?.toString()}
          onValueChange={(value) => {
            setSelectedAnswer(parseInt(value))
          }}
        >
          {Array.from({ length: numberOfChoice }).map((_, index) => (
            <QuizChoiceOption
              key={`${key}-${getQuizChoiceIndex(index)}`}
              id={`${key}-${getQuizChoiceIndex(index)}`}
              value={getQuizChoiceIndex(index)}
              disabled={shouldDisable}
              checked={selectedAnswer?.toString() === getQuizChoiceIndex(index)}
              isCorrect={correctAnswer?.toString() === getQuizChoiceIndex(index)}
            />
          ))}
        </RadioGroup>
        <Button fullWidth variant="default" disabled={shouldDisable} type="submit">
          ส่งคำตอบ
        </Button>
      </form>
    </QuizAccordion>
  )
}
