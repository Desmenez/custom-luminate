import { z } from 'zod'

export const GetMockExamsResponse = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    mockExamGroupType: z.string(),
  })
)
export type GetMockExamsResponse = z.infer<typeof GetMockExamsResponse>
