import { z } from 'zod'

import { LiveCoursePackageType } from '@luminate/database'

export const GetStudentsQueryParams = z.object({
  liveCourseId: z.string(),
})
export type GetStudentsQueryParams = z.infer<typeof GetStudentsQueryParams>

export const Student = z.object({
  user: z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
  }),
  package: z.object({
    id: z.string(),
    packageType: z.nativeEnum(LiveCoursePackageType),
    duration: z.number(),
    durationUnit: z.string(),
  }),
  receiveMethod: z.string(),
  shippingAddress: z.object({
    address: z.string(),
    postalCode: z.string(),
    province: z.string(),
    phone: z.string(),
    subdistrict: z.string(),
    district: z.string(),
  }),
})
export type Student = z.infer<typeof Student>

export const GetStudentsResponse = z.array(Student)
export type GetStudentsResponse = z.infer<typeof GetStudentsResponse>
