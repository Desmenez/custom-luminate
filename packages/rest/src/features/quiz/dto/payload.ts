import { AnyZodObject, z } from 'zod'

import { LiveSessionQuizType } from '@luminate/database'

interface QuizSchema<
  T extends LiveSessionQuizType,
  TConfig extends AnyZodObject,
  TSolution extends AnyZodObject,
  TAnswer extends AnyZodObject,
> {
  type: T
  config: TConfig
  solution: TSolution
  answer: TAnswer
}

function defineQuizSchema<
  TSchema extends QuizSchema<LiveSessionQuizType, AnyZodObject, AnyZodObject, AnyZodObject>,
>(schema: TSchema): TSchema {
  return schema
}

export const QuizTextSchema = defineQuizSchema({
  type: LiveSessionQuizType.TEXT,
  config: z.object({}),
  solution: z.object({
    correctAnswer: z.string(),
  }),
  answer: z.object({
    answer: z.string(),
  }),
})

export const QuizChoiceSchema = defineQuizSchema({
  type: LiveSessionQuizType.CHOICE,
  config: z.object({
    numberOfChoice: z.number().min(2).max(6),
  }),
  solution: z.object({
    correctChoice: z.number(),
  }),
  answer: z.object({
    choice: z.number(),
  }),
})

export const QuizSchemas = {
  [LiveSessionQuizType.TEXT]: QuizTextSchema,
  [LiveSessionQuizType.CHOICE]: QuizChoiceSchema,
}

function parseQuizPayload<
  TType extends LiveSessionQuizType,
  TTarget extends 'config' | 'solution' | 'answer',
>(type: TType, target: TTarget, payload: unknown): z.infer<(typeof QuizSchemas)[TType][TTarget]> {
  const schema = QuizSchemas[type][target]
  return schema.parse(payload)
}

export function parseQuizConfig<TType extends keyof typeof QuizSchemas>(
  type: TType,
  payload: unknown
) {
  return parseQuizPayload(type, 'config', payload)
}

export function parseQuizSolution<TType extends keyof typeof QuizSchemas>(
  type: TType,
  payload: unknown
) {
  return parseQuizPayload(type, 'solution', payload)
}

export function parseQuizAnswer<TType extends keyof typeof QuizSchemas>(
  type: TType,
  payload: unknown
) {
  return parseQuizPayload(type, 'answer', payload)
}
