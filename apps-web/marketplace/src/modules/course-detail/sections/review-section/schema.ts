import { z } from 'zod'

import { LiveCourseCommentCreateInput } from '@luminate/rest'
import { ValuesType } from '@luminate/types-utility'

export const ReviewFormMode = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
} as const
export type ReviewFormMode = ValuesType<typeof ReviewFormMode>

export const CreateReviewSchema = LiveCourseCommentCreateInput.omit({ liveCourseId: true }).merge(
  z.object({
    mode: z.literal(ReviewFormMode.CREATE),
  })
)
export type CreateReviewSchema = z.infer<typeof CreateReviewSchema>

export const UpdateReviewSchema = CreateReviewSchema.merge(
  z.object({
    mode: z.literal(ReviewFormMode.UPDATE),
  })
)
export type UpdateReviewSchema = z.infer<typeof UpdateReviewSchema>

export const ReviewFormSchema = z.discriminatedUnion('mode', [
  CreateReviewSchema,
  UpdateReviewSchema,
])
export type ReviewFormSchema = z.infer<typeof ReviewFormSchema>
