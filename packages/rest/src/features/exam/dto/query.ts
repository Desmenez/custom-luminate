import { z } from 'zod'

export const GetExamsWhereInput = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
  isActive: z.boolean().optional(),
  isMockExam: z.boolean().optional(),
  isPremium: z.boolean().optional(),
  isComingSoon: z.boolean().optional(),
  examSubjectId: z.string().optional(),
  examGroupId: z.string().optional(),
  examEducationLevelId: z.string().optional(),
  subjectName: z.string().optional(),
  mode: z.enum(['PAPER_BASED', 'COMPUTER_BASED']),
  lowerSublevelBound: z.number().optional(),
  upperSublevelBound: z.number().optional(),
  lowerExamineeDifficulty: z.number().optional(),
  upperExamineeDifficulty: z.number().optional(),
})
export type GetExamsWhereInput = z.infer<typeof GetExamsWhereInput>

export const GetExamsOrderByInput = z.object({
  createdAt: z.enum(['asc', 'desc']).optional(),
  updatedAt: z.enum(['asc', 'desc']).optional(),
  deletedAt: z.enum(['asc', 'desc']).optional(),
  name: z.enum(['asc', 'desc']).optional(),
  code: z.enum(['asc', 'desc']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
  isActive: z.enum(['asc', 'desc']).optional(),
  isMockExam: z.enum(['asc', 'desc']).optional(),
  timeLimit: z.enum(['asc', 'desc']).optional(),
  issueDate: z.enum(['asc', 'desc']).optional(),
  announcementDate: z.enum(['asc', 'desc']).optional(),
  isExamFileUploaded: z.enum(['asc', 'desc']).optional(),
  isAnswerSheetUploaded: z.enum(['asc', 'desc']).optional(),
  isDocumentUploaded: z.enum(['asc', 'desc']).optional(),
  isPremium: z.enum(['asc', 'desc']).optional(),
  isComingSoon: z.enum(['asc', 'desc']).optional(),
  attemptLimit: z.enum(['asc', 'desc']).optional(),
  lowerSublevelBound: z.enum(['asc', 'desc']).optional(),
  upperSublevelBound: z.enum(['asc', 'desc']).optional(),
  lowerExamineeDifficulty: z.enum(['asc', 'desc']).optional(),
  upperExamineeDifficulty: z.enum(['asc', 'desc']).optional(),
})
export type GetExamsOrderByInput = z.infer<typeof GetExamsOrderByInput>

export const GetExamsQueryParams = z.object({
  where: GetExamsWhereInput.optional(),
  orderBy: GetExamsOrderByInput.optional(),
})
export type GetExamsQueryParams = z.infer<typeof GetExamsQueryParams>

export const Exam = z.object({
  id: z.string(),
  name: z.string(),
  examSubject: z.object({
    id: z.string(),
    name: z.string(),
  }),
})
export type Exam = z.infer<typeof Exam>

export const GetExamsResponse = z.array(Exam)
export type GetExamsResponse = z.infer<typeof GetExamsResponse>
