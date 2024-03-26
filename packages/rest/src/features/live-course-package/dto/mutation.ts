import { z } from 'zod'

import { LiveCoursePackageModel } from '@luminate/database'

export const CreateLiveCoursePackageBody = LiveCoursePackageModel.pick({
  liveCourseId: true,
  title: true,
  description: true,
  price: true,
  duration: true,
  durationUnit: true,
  packageType: true,
})
export type CreateLiveCoursePackageBody = z.infer<typeof CreateLiveCoursePackageBody>

export const UpdateLiveCoursePackageBody = LiveCoursePackageModel.pick({
  id: true,
  title: true,
  description: true,
  price: true,
  duration: true,
  durationUnit: true,
  packageType: true,
})
  .partial()
  .required({ id: true })
export type UpdateLiveCoursePackageBody = z.infer<typeof UpdateLiveCoursePackageBody>

export const DeleteLiveCoursePackageBody = z.object({
  id: z.string(),
})
export type DeleteLiveCoursePackageBody = z.infer<typeof DeleteLiveCoursePackageBody>
