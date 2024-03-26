import { memo, useCallback } from 'react'

import { faStar } from '@fortawesome/pro-regular-svg-icons'

import { LiveSessionQuizType } from '@luminate/database'
import { FontAwesomeIcon } from '@luminate/ui'

import { QuizMultipleChoice } from './components/quiz/multiple-choice'
import { QuizText } from './components/quiz/text'
import { useLiveSessionContext } from './provider/live-session'
import { QuizStudentProps } from './types'

const MemoizedQuizMultipleChoice = memo(QuizMultipleChoice)
const MemoizedQuizText = memo(QuizText)

export const QuizSection: React.FC = () => {
  const { studentScore, quizDataList, onSubmitAnswer } = useLiveSessionContext()

  const quizRenderer = useCallback(
    (quiz: QuizStudentProps) => {
      switch (quiz.type) {
        case LiveSessionQuizType.CHOICE:
          return (
            <MemoizedQuizMultipleChoice
              {...quiz.props}
              key={quiz.props.quizId}
              onSubmit={onSubmitAnswer}
            />
          )
        case LiveSessionQuizType.TEXT:
          return (
            <MemoizedQuizText {...quiz.props} key={quiz.props.quizId} onSubmit={onSubmitAnswer} />
          )
        default:
          return null
      }
    },
    [onSubmitAnswer]
  )

  return (
    <div className="flex flex-col gap-2 p-2 w-full">
      <div className="flex flex-row gap-2 items-center justify-center">
        <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
        <span className="font-light text-sm">{studentScore} คะแนน</span>
      </div>
      {quizDataList.map((quiz) => {
        return quizRenderer(quiz)
      })}
    </div>
  )
}
