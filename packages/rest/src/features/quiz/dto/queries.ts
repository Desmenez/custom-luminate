import { z } from 'zod'

import { LiveSessionQuizType } from '@luminate/database'

export const LiveSessionQuizForStudent = z.object({
  id: z.string(),
  liveSessionId: z.string(),
  type: z.nativeEnum(LiveSessionQuizType),
  config: z.unknown(),
  solution: z.unknown().nullable(),
  myAnswer: z.unknown().nullable(),
  isAcceptingAnswers: z.boolean(),
  isMyAnswerCorrect: z.boolean().nullable(),
  createdAt: z.date(),
})
export type LiveSessionQuizForStudent = z.infer<typeof LiveSessionQuizForStudent>
