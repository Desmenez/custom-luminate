import { z } from 'zod'

import { BasePlanType } from '@luminate/database'

export const GetBasePlansWhereInput = z.object({
  ids: z.array(z.string()).optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
  subjectId: z.string().optional(),
  basePlanTypes: z.array(z.nativeEnum(BasePlanType)).optional(),
  basePlanStyle: z.nativeEnum(BasePlanType).optional(),
  basePlanClassType: z.nativeEnum(BasePlanType).optional(),
  basePlanStudyMajor: z.nativeEnum(BasePlanType).optional(),
  basePlanStudyYear: z.nativeEnum(BasePlanType).optional(),
  basePlanStudySemester: z.nativeEnum(BasePlanType).optional(),
  school: z.string().optional(),
  basePlanTcasExamSubjects: z.array(z.string()).optional(),
  tutorIds: z.array(z.string()).optional(),
  grades: z.array(z.number()).optional(),
  semester: z.array(z.number()).optional(),
  subjectIds: z.array(z.string()).optional(),
  isSuggested: z.boolean().optional(),
})
export type GetBasePlansWhereInput = z.infer<typeof GetBasePlansWhereInput>

export const GetBasePlansOrderByInput = z.object({
  name: z.enum(['asc', 'desc']).optional(),
  description: z.enum(['asc', 'desc']).optional(),
  isActive: z.enum(['asc', 'desc']).optional(),
  createdAt: z.enum(['asc', 'desc']).optional(),
  updatedAt: z.enum(['asc', 'desc']).optional(),
  deletedAt: z.enum(['asc', 'desc']).optional(),
})
export type GetBasePlansOrderByInput = z.infer<typeof GetBasePlansOrderByInput>

export const GetBasePlansQueryParams = z.object({
  where: GetBasePlansWhereInput.optional(),
  orderBy: GetBasePlansOrderByInput.optional(),
})
export type GetBasePlansQueryParams = z.infer<typeof GetBasePlansQueryParams>

export const GetBasePlansResponse = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    subject: z.object({
      id: z.string(),
      name: z.string(),
    }),
  })
)
export type GetBasePlansResponse = z.infer<typeof GetBasePlansResponse>
