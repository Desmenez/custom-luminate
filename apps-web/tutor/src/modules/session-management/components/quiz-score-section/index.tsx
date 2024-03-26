import React from 'react'

import { addHours, isPast } from 'date-fns'

import { LiveCourseType } from '@luminate/database'

import { useTutorQuizContext } from '../../providers/quiz'
import { EmptyCard } from '../empty-card'
import { QuizScoreCard } from './cards'

interface QuizScoreSectionProps {
  liveSessonEndTime: string
  liveCourseType: LiveCourseType
}

export const QuizScoreSection: React.FC<QuizScoreSectionProps> = ({
  liveSessonEndTime,
  liveCourseType,
}) => {
  const { tutorQuizScores, deleteQuizMutate, setIsAcceptingAnswersMutate } = useTutorQuizContext()

  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      {tutorQuizScores.length === 0 && <EmptyCard />}
      {tutorQuizScores.map((tutorQuiz, index) => {
        const hasLive =
          liveCourseType === LiveCourseType.LIVE || liveCourseType === LiveCourseType.FUSION

        const isLiveEnded = isPast(addHours(new Date(liveSessonEndTime), 2))

        const computeOnDelete = () => {
          // Diable delete button when live course is live and session is ended
          if (hasLive && isLiveEnded) {
            return undefined
          }
          return () => deleteQuizMutate(tutorQuiz.id)
        }

        const computeOnToggleIsAcceptingAnswers = () => {
          // Disable toggle button when live course is live and session is ended
          if (hasLive && isLiveEnded) {
            return undefined
          }
          // Disable toggle button when the course is online course
          if (liveCourseType === LiveCourseType.TAPE) {
            return undefined
          }
          return () => setIsAcceptingAnswersMutate(tutorQuiz.id, !tutorQuiz.isAcceptingAnswers)
        }

        const onDelete = computeOnDelete()
        const onToggleIsAcceptingAnswers = computeOnToggleIsAcceptingAnswers()

        return (
          <QuizScoreCard
            key={tutorQuiz.id}
            index={tutorQuizScores.length - index}
            isLatest={index === 0}
            {...tutorQuiz}
            onDelete={onDelete}
            onToggleIsAcceptingAnswers={onToggleIsAcceptingAnswers}
            disabledIsAcceptingAnswers={!tutorQuiz.isAcceptingAnswers}
          />
        )
      })}
    </section>
  )
}
