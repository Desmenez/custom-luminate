import { z } from 'zod'

import { LiveSessionQuizType } from '@luminate/database'

export const MultipleChoiceSchema = z.object({
  type: z.literal(LiveSessionQuizType.CHOICE),
  config: z.object({
    numberOfChoice: z.coerce.string().refine((value) => {
      const number = parseInt(value)
      return number >= 2 && number <= 6
    }),
  }),
  solution: z.object({
    correctChoice: z.string(),
  }),
  isAcceptingAnswers: z.coerce.boolean().default(true),
})

export type MultipleChoiceSchema = z.infer<typeof MultipleChoiceSchema>

export const ShortTextSchema = z.object({
  type: z.literal(LiveSessionQuizType.TEXT),
  config: z.object({}).default({}),
  solution: z.object({
    correctAnswer: z.string().nonempty(),
  }),
  isAcceptingAnswers: z.coerce.boolean().default(true),
})
export type ShortTextSchema = z.infer<typeof ShortTextSchema>

export const CreateQuizSchema = z
  .discriminatedUnion('type', [MultipleChoiceSchema, ShortTextSchema])
  .refine((value) => {
    if (value.type === LiveSessionQuizType.CHOICE) {
      return value.config.numberOfChoice >= value.solution.correctChoice
    }
    return true
  })
export type CreateQuizSchema = z.infer<typeof CreateQuizSchema>
