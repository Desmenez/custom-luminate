import { z } from 'zod'

import { LiveSessionQuizType } from '@luminate/database'
import {
  LiveSessionQuizForStudent,
  QuizChoiceSchema,
  QuizSchemas,
  QuizTextSchema,
} from '@luminate/rest'

export type QuizStudentAnswerType = {
  [LiveSessionQuizType.TEXT]: string
  [LiveSessionQuizType.CHOICE]: number
}

export type QuizStudentAnswerPayload = {
  [LiveSessionQuizType.TEXT]: z.infer<(typeof QuizSchemas)['TEXT']['answer']>
  [LiveSessionQuizType.CHOICE]: z.infer<(typeof QuizSchemas)['CHOICE']['answer']>
}

// ---------- Quiz Default Props ----------
export interface QuizDefaultProps<TType extends LiveSessionQuizType> {
  quizId: string
  quizNumber?: number
  totalQuiz?: number
  correctAnswer?: QuizStudentAnswerType[TType]
  myAnswer?: QuizStudentAnswerType[TType]
  isMyAnswerCorrect?: boolean
  isAcceptingAnswers?: boolean
  onSubmit?: (quizId: string, answerPayload: QuizStudentAnswerPayload[TType]) => void
}

// ---------- Quiz Text Props ----------
type QuizTextConfig = z.infer<(typeof QuizTextSchema)['config']>
export interface QuizTextProps extends QuizDefaultProps<'TEXT'>, QuizTextConfig {
  placeholder?: string
}

// ---------- Quiz Choice Props ----------
type QuizChoiceConfig = z.infer<(typeof QuizChoiceSchema)['config']>
export interface QuizMultipleChoiceProps extends QuizDefaultProps<'CHOICE'>, QuizChoiceConfig {}

// ---------- Quiz Union Props ----------
export type QuizStudentProps =
  | {
      type: typeof LiveSessionQuizType.CHOICE
      props: QuizMultipleChoiceProps
    }
  | {
      type: typeof LiveSessionQuizType.TEXT
      props: QuizTextProps
    }

// ---------- Quiz Student Data ----------
export interface QuizStudentData<
  TType extends LiveSessionQuizType,
  TConfig = z.infer<(typeof QuizSchemas)[TType]['config']>,
  TAnswer = z.infer<(typeof QuizSchemas)[TType]['answer']>,
  TSolution = z.infer<(typeof QuizSchemas)[TType]['solution']>,
> extends LiveSessionQuizForStudent {
  type: TType
  config: TConfig
  answer: TAnswer | null
  solution: TSolution | null
}
