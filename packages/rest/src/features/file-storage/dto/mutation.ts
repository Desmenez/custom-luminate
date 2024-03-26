import { z } from 'zod'

export const OnFileUploadCompleteBody = z.object({
  token: z.string(),
})
export type OnFileUploadCompleteBody = z.infer<typeof OnFileUploadCompleteBody>
