import { z } from 'zod'

import { OnFileUploadCompleteBody } from '.'
import { contract } from '../../contracts'

export * from './dto'

export const fileStorageContract = contract.router({
  onFileUploadComplete: {
    method: 'POST',
    path: '/on-complete',
    body: OnFileUploadCompleteBody,
    responses: {
      200: z.literal('ok'),
    },
  },
})
