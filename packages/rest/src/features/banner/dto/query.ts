import { z } from 'zod'

import { BannerModel } from '@luminate/database'

export const GetBannerOrderByInput = z.object({
  createdAt: z.enum(['asc', 'desc']).optional(),
  updatedAt: z.enum(['asc', 'desc']).optional(),
  isActive: z.enum(['asc', 'desc']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
})
export type GetBannerOrderByInput = z.infer<typeof GetBannerOrderByInput>

export const GetBannerWhereInput = z.object({
  name: z.string().optional(),
})
export type GetBannerWhereInput = z.infer<typeof GetBannerWhereInput>

export const GetBannerQueryParams = z.object({
  orderBy: GetBannerOrderByInput.optional(),
  where: GetBannerWhereInput.optional(),
})
export type GetBannerQueryParams = z.infer<typeof GetBannerQueryParams>

export const GetBannerResponse = z.array(BannerModel)
