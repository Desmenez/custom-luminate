import { z } from 'zod'

import { LiveSessionQuizModel } from '@luminate/database'

export const CreateQuizInput = LiveSessionQuizModel.pick({
  type: true,
  config: true,
  solution: true,
  isAcceptingAnswers: true,
  liveSessionId: true,
})
export type CreateQuizInput = z.infer<typeof CreateQuizInput>

export const UpdateQuizInput = LiveSessionQuizModel.pick({
  isAcceptingAnswers: true,
})
export type UpdateQuizInput = z.infer<typeof UpdateQuizInput>

export const DeleteQuizInput = z.object({
  quizId: z.string(),
  liveSessionId: z.string(),
})
export type DeleteQuizInput = z.infer<typeof DeleteQuizInput>

export const RespondQuizInput = z.object({
  answer: z.unknown(),
})
export type RespondQuizInput = z.infer<typeof RespondQuizInput>
