import { z } from 'zod'

import { TutorCardModel } from '@luminate/database'

export const GetTutorsResponse = z.array(
  z
    .object({
      name: z.string(),
      id: z.string(),
    })
    .nullable()
)
export type GetTutorsResponse = z.infer<typeof GetTutorsResponse>

export const GetTutorInfoPathParams = z.object({
  tutorId: z.string(),
})
export type GetTutorInfoPathParams = z.infer<typeof GetTutorInfoPathParams>

export const GetTutorInfoResponse = z.object({
  id: z.string(),
  name: z.string(),
  tutorIconUrl: z.string().nullable(),
  displayName: z.string().nullable(),
  experience: z.string().nullable(),
})
export type GetTutorInfoResponse = z.infer<typeof GetTutorInfoResponse>

export const GetTutorCardsResponse = z.array(
  TutorCardModel.omit({ createdAt: true, updatedAt: true })
)
export type GetTutorCardsResponse = z.infer<typeof GetTutorCardsResponse>

export const GetStudentGraphQuery = z.object({
  days: z.union([z.literal(1), z.literal(7), z.literal(30)]),
  endDate: z.coerce.date(),
})
export type GetStudentGraphQuery = z.infer<typeof GetStudentGraphQuery>

export const StudentGraphDataPoint = z.object({
  date: z.string(),
  newStudents: z.number(),
})
export type StudentGraphDataPoint = z.infer<typeof StudentGraphDataPoint>

export const GetStudentGraphResponse = z.object({
  startDate: z.string(),
  endDate: z.string(),
  newStudents: z.number(),
  newStudentsIncreasePercent: z.number(),
  totalStudents: z.number(),
  points: z.array(StudentGraphDataPoint),
})
export type GetStudentGraphResponse = z.infer<typeof GetStudentGraphResponse>

export const TutorUpcomingSession = z.object({
  courseId: z.string(),
  id: z.string(),
  name: z.string(),
  startTime: z.string(),
  endTime: z.string(),
})
export type TutorUpcomingSession = z.infer<typeof TutorUpcomingSession>

export const GetUpcomingSessionsResponse = z.array(TutorUpcomingSession)
export type GetUpcomingSessionsResponse = z.infer<typeof GetUpcomingSessionsResponse>
