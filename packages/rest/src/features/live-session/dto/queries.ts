import { z } from 'zod'

import { LiveCourseModel, LiveSessionQuizModel } from '@luminate/database'

import { PaginationArgs } from '../../../common'

export const LiveSessionStatus = z.enum(['LIVE', 'ENDED', 'UPCOMING'])
export type LiveSessionStatus = z.infer<typeof LiveSessionStatus>

export const CmsQuizScoreQuiz = LiveSessionQuizModel.pick({
  id: true,
  correctChoice: true,
  numberOfChoice: true,
  question: true,
  userAnswersByChoice: z.array(
    z.object({
      choice: z.number(),
      numbersOfUserAnswers: z.number(),
    })
  ),
})
export type CmsQuizScoreQuiz = z.infer<typeof CmsQuizScoreQuiz>

export const CmsQuizScoreUserScore = z.object({
  score: z.number(),
  user: z.object({
    id: z.string(),
    displayName: z.string(),
    profileUrl: z.string(),
  }),
})
export type CmsQuizScoreUserScore = z.infer<typeof CmsQuizScoreUserScore>

export const CmsQuizScoreResponse = z.object({
  quizzes: z.array(CmsQuizScoreQuiz),
  userScores: z.array(CmsQuizScoreUserScore),
})
export type CmsQuizScoreResponse = z.infer<typeof CmsQuizScoreResponse>

export const LiveSessionFindManyWhereInput = z.object({
  name: z.string().optional(),
})

export const LiveSessionOrderByInput = z.object({
  startTime: z.enum(['asc', 'desc']).optional(),
  liveCourseName: z.enum(['asc', 'desc']).optional(),
  name: z.enum(['asc', 'desc']).optional(),
  tutorName: z.enum(['asc', 'desc']).optional(),
})

export const LiveSessionFindManyArgs = z
  .object({
    where: LiveSessionFindManyWhereInput.optional(),
    orderBy: LiveSessionOrderByInput.optional(),
  })
  .merge(PaginationArgs)
export type LiveSessionFindManyArgs = z.infer<typeof LiveSessionFindManyArgs>

export const LiveSessionForTutor = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  endTime: z.string(),
  streamInfo: z
    .object({
      streamKey: z.string(),
      streamUrl: z.string(),
    })
    .nullable(),
  liveCourse: LiveCourseModel.pick({
    name: true,
    type: true,
  }),
})
export type LiveSessionForTutor = z.infer<typeof LiveSessionForTutor>

export const LiveSessionForSchedule = z.object({
  id: z.string(),
  name: z.string(),
  status: LiveSessionStatus,
  startTime: z.date(),
  liveCourse: z.object({
    name: z.string(),
    tutor: z.object({
      name: z.string(),
    }),
  }),
})
export type LiveSessionForSchedule = z.infer<typeof LiveSessionForSchedule>

export const LiveSessionsForScheduleResponse = z.array(LiveSessionForSchedule)

export const CloudflareLiveStreamLifeCycle = z.object({
  isInput: z.boolean(),
  videoUID: z.string().nullable(),
  live: z.boolean(),
})
export type CloudflareLiveStreamLifeCycle = z.infer<typeof CloudflareLiveStreamLifeCycle>

export const LiveSessionVideoResource = z.object({
  name: z.string(),
  currentLiveVideoId: CloudflareLiveStreamLifeCycle.nullable(),
  remainingPlaybackTime: z.number().nullable(),
  index: z.number(),
  description: z.string(),
  liveCourse: z.object({
    name: z.string(),
    exercisesCourses: z.array(
      z.object({
        name: z.string(),
        id: z.string(),
        subject: z
          .object({
            code: z.string(),
          })
          .nullable(),
      })
    ),
    tutorId: z.string(),
  }),
})
export type LiveSessionVideoResource = z.infer<typeof LiveSessionVideoResource>

export const GetLiveSessionIndexQueryParam = z.object({
  id: z.string(),
})
export type GetLiveSessionIndexQueryParam = z.infer<typeof GetLiveSessionIndexQueryParam>

export const GetLiveSessionIndexResponse = z.object({
  index: z.number(),
})
export type GetLiveSessionIndexResponse = z.infer<typeof GetLiveSessionIndexResponse>
