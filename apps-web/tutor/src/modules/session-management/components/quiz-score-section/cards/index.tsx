import { TutorQuizScore } from '@app/modules/session-management/providers/quiz/types'
import { convertIndexToAlphabet } from '@app/modules/session-management/utils/convert-index-to-alphabet'
import { faCheck } from '@fortawesome/pro-solid-svg-icons'

import { LiveSessionQuizType } from '@luminate/database'
import { useResetInTime } from '@luminate/react-hooks'
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FontAwesomeIcon,
  Separator,
} from '@luminate/ui'

import { QuestionAnswerBar } from '../bar'
import { QuizScoreCardBase } from './base'

type QuizScoreCardProps = TutorQuizScore & {
  index: number
  isLatest?: boolean
  onDelete?: () => void
  onToggleIsAcceptingAnswers?: () => void
  disabledIsAcceptingAnswers?: boolean
}

export const QuizScoreCard: React.FC<QuizScoreCardProps> = ({
  index,
  isLatest,
  onDelete,
  onToggleIsAcceptingAnswers,
  disabledIsAcceptingAnswers,
  ...props
}) => {
  const [isHighlight] = useResetInTime(isLatest, false, 5000)

  return (
    <QuizScoreCardBase.Root isHighlight={isHighlight}>
      <QuizScoreCardBase.Header
        title={`คำถามที่ ${index}`}
        type={props.type}
        totalStudent={props.totalStudentsAnswered}
        onDelete={onDelete}
      />
      <QuizScoreCardBase.Content>
        {props.type === LiveSessionQuizType.CHOICE &&
          Array.from({ length: props.answersCount.length }).map((_, index) => {
            const numberOfAnswers = props.answersCount[index]
            return (
              <QuestionAnswerBar
                key={`choice-${index}`}
                label={convertIndexToAlphabet(index)}
                amountOfAnswers={numberOfAnswers}
                percent={numberOfAnswers > 0 ? numberOfAnswers / props.totalStudentsAnswered : 0}
                isCorrect={index === props.correctAnswerIndex}
                className="col-span-1"
              />
            )
          })}
        {props.type === LiveSessionQuizType.TEXT && (
          <QuestionAnswerBar
            label={props.correctAnswerText}
            amountOfAnswers={props.numberOfCorrectAnswers}
            percent={props.numberOfCorrectAnswers > 0 ? 1 : 0}
            isCorrect={true}
          />
        )}
      </QuizScoreCardBase.Content>

      {props.type === LiveSessionQuizType.TEXT && (
        <div className="mx-auto">
          <Dialog>
            <DialogTrigger asChild>
              <div className="text-yellow-400 text-base font-semibold hover:text-yellow-200 cursor-pointer">
                ดูคำตอบทั้งหมด
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-center">คำตอบทั้งหมด</DialogTitle>
              </DialogHeader>
              <Separator />
              <div className="flex flex-col gap-2">
                <div className="block lg:hidden">
                  <QuizScoreCardBase.TotalStudent totalStudent={props.totalStudentsAnswered} />
                </div>
                <div className="flex gap-1 items-center text-green-500">
                  <FontAwesomeIcon icon={faCheck} className="h-4 w-4 lg:h-5 lg:w-5" />
                  {`${props.correctAnswerText} (${props.numberOfCorrectAnswers} คน)`}
                  <div className="hidden lg:block ml-auto text-gray-50">
                    <QuizScoreCardBase.TotalStudent totalStudent={props.totalStudentsAnswered} />
                  </div>
                </div>
                {props.answers.map((answer, index) => {
                  if (answer === props.correctAnswerText) return null
                  return (
                    <span key={index} className="text-gray-500">
                      {answer}
                    </span>
                  )
                })}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {onToggleIsAcceptingAnswers && (
        <QuizScoreCardBase.Footer>
          <Button
            variant="outline"
            onClick={onToggleIsAcceptingAnswers}
            className="md:min-w-[200px] px-8"
            disabled={disabledIsAcceptingAnswers}
          >
            เฉลย
          </Button>
        </QuizScoreCardBase.Footer>
      )}
    </QuizScoreCardBase.Root>
  )
}
