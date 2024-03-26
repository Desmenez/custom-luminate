import { z } from 'zod'

import { LiveSessionQuizModel, StudentOnLiveSessionQuizModel } from '@luminate/database'

import { LiveSessionQuizForStudent } from './queries'

// ---------------------------- Server Student Quiz Events ----------------------------
export const QuizServerStudentEventType = {
  QUIZ_UPDATE: 'SERVER_QUIZ_UPDATE',
  SHOW_RANK: 'SERVER_SHOW_RANK',
} as const
export type QuizServerStudentEventType =
  (typeof QuizServerStudentEventType)[keyof typeof QuizServerStudentEventType]

export const QuizServerStudentQuizUpdate = z.object({
  type: z.literal(QuizServerStudentEventType.QUIZ_UPDATE),
  liveSession: z.object({
    endTime: z.string(),
    isQuizClosed: z.boolean(),
  }),
  updates: z.array(
    z.object({
      quizId: z.string(),
      quiz: LiveSessionQuizModel.extend({
        studentAnswers: z.array(StudentOnLiveSessionQuizModel),
      }).nullable(),
    })
  ),
})
export type QuizServerStudentQuizUpdate = z.infer<typeof QuizServerStudentQuizUpdate>

export const QuizServerStudentShowRank = z.object({
  type: z.literal(QuizServerStudentEventType.SHOW_RANK),
  scores: z.array(
    z.object({
      studentId: z.string(),
      score: z.number(),
      rank: z.number(),
      student: z
        .object({
          displayName: z.string(),
          profileUrl: z.string().nullable(),
        })
        .nullable(),
    })
  ),
})
export type QuizServerStudentShowRank = z.infer<typeof QuizServerStudentShowRank>

export const QuizServerStudentEvent = z.discriminatedUnion('type', [
  QuizServerStudentQuizUpdate,
  QuizServerStudentShowRank,
])
export type QuizServerStudentEvent = z.infer<typeof QuizServerStudentEvent>
// -------------------------- End Server Student Quiz Events --------------------------

// ---------------------------- Client Student Quiz Events ----------------------------
export const QuizClientStudentEventType = {
  QUIZ_UPDATE: 'CLIENT_QUIZ_UPDATE',
  SHOW_RANK: 'CLIENT_SHOW_RANK',
} as const
export type QuizClientStudentEventType =
  (typeof QuizClientStudentEventType)[keyof typeof QuizClientStudentEventType]

export const QuizClientStudentQuizUpdate = z.object({
  type: z.literal(QuizClientStudentEventType.QUIZ_UPDATE),
  updates: z.array(
    z.object({
      quizId: z.string(),
      quiz: LiveSessionQuizForStudent.nullable(),
    })
  ),
})
export type QuizClientStudentQuizUpdate = z.infer<typeof QuizClientStudentQuizUpdate>

export const QuizClientStudentShowRank = z.object({
  type: z.literal(QuizClientStudentEventType.SHOW_RANK),
  rank: z.number(),
  student: z
    .object({
      displayName: z.string(),
      profileUrl: z.string().nullable(),
    })
    .nullable(),
})
export type QuizClientStudentShowRank = z.infer<typeof QuizClientStudentShowRank>

export const QuizClientStudentEvent = z.discriminatedUnion('type', [
  QuizClientStudentQuizUpdate,
  QuizClientStudentShowRank,
])
export type QuizClientStudentEvent = z.infer<typeof QuizClientStudentEvent>
// -------------------------- End Client Student Quiz Events --------------------------

// ---------------------------- Tutor Quiz Events ----------------------------
export const QuizTutorEventType = {
  LEADERBOARD_UPDATE: 'LEADERBOARD_UPDATE',
  QUIZ_UPDATE: 'QUIZ_UPDATE',
} as const
export type QuizTutorEventType = (typeof QuizTutorEventType)[keyof typeof QuizTutorEventType]

export const QuizTutorLeaderboardUpdate = z.object({
  type: z.literal(QuizTutorEventType.LEADERBOARD_UPDATE),
  scores: z.array(
    z.object({
      studentId: z.string(),
      score: z.number(),
      rank: z.number(),
      student: z
        .object({
          displayName: z.string(),
          profileUrl: z.string().nullable(),
        })
        .nullable(),
    })
  ),
})
export type QuizTutorLeaderboardUpdate = z.infer<typeof QuizTutorLeaderboardUpdate>

export const QuizTutorQuizUpdate = z.object({
  type: z.literal(QuizTutorEventType.QUIZ_UPDATE),
  updates: z.array(
    z.object({
      quizId: z.string(),
      quiz: LiveSessionQuizModel.extend({
        studentAnswers: z.array(StudentOnLiveSessionQuizModel),
      }).nullable(),
    })
  ),
})
export type QuizTutorQuizUpdate = z.infer<typeof QuizTutorQuizUpdate>

export const QuizTutorEvent = z.discriminatedUnion('type', [
  QuizTutorLeaderboardUpdate,
  QuizTutorQuizUpdate,
])
export type QuizTutorEvent = z.infer<typeof QuizTutorEvent>
// -------------------------- End Tutor Quiz Events --------------------------
