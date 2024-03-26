import { LiveSessionQuizType } from '@luminate/database'
import { LiveSessionQuizForStudent, QuizSchemas } from '@luminate/rest'
import { removeUndefined } from '@luminate/utils'

import { QuizStudentData, QuizStudentProps } from '../types'

export function parseQuizForStudent<TType extends LiveSessionQuizType>(
  type: TType,
  quiz: LiveSessionQuizForStudent
): QuizStudentData<TType> {
  return {
    ...quiz,
    type: type,
    config: QuizSchemas[type].config.parse(quiz.config),
    answer: quiz.myAnswer ? QuizSchemas[type].answer.parse(quiz.myAnswer) : null,
    solution: quiz.solution ? QuizSchemas[type].solution.parse(quiz.solution) : null,
  }
}

export function parseQuizForStudentToProps(
  type: LiveSessionQuizType,
  quiz: LiveSessionQuizForStudent
): QuizStudentProps {
  switch (type) {
    case LiveSessionQuizType.TEXT: {
      const parsedQuiz = parseQuizForStudent(type, quiz)
      return {
        type: LiveSessionQuizType.TEXT,
        props: removeUndefined({
          quizId: parsedQuiz.id,
          correctAnswer: parsedQuiz.solution?.correctAnswer,
          myAnswer: parsedQuiz.answer?.answer,
          placeholder: 'กรุณาตอบคำถาม...', // TODO: preventing hardcode
          isAcceptingAnswers: parsedQuiz.isAcceptingAnswers,
          isMyAnswerCorrect: parsedQuiz.isMyAnswerCorrect ?? undefined,
        }),
      }
    }
    case LiveSessionQuizType.CHOICE: {
      const parsedQuiz = parseQuizForStudent(type, quiz)
      return {
        type: LiveSessionQuizType.CHOICE,
        props: removeUndefined({
          quizId: parsedQuiz.id,
          numberOfChoice: parsedQuiz.config?.numberOfChoice ?? 2,
          correctAnswer: parsedQuiz.solution?.correctChoice,
          myAnswer: parsedQuiz.answer?.choice,
          isAcceptingAnswers: parsedQuiz.isAcceptingAnswers,
          isMyAnswerCorrect: parsedQuiz.isMyAnswerCorrect ?? undefined,
        }),
      }
    }
    default: {
      throw new Error('Invalid quiz type')
    }
  }
}
