import { COMMON_BAD_INPUT_ERROR_CODE } from './common'
import { ErrorInterfaceDetail } from './types'

export const BAD_INPUT_SITE_CONTENT_ERROR_CODE = {
  ...COMMON_BAD_INPUT_ERROR_CODE,
  ON_UPLOAD_COMPLETE_FAILED: {
    code: 'SITE_CONTENT_ON_UPLOAD_COMPLETE_FAILED',
    message: 'Failed to handle on upload complete event',
  },
}

export type BadInputSiteContentErrorCodeType = keyof typeof BAD_INPUT_SITE_CONTENT_ERROR_CODE

export function badInputUserErrorDetail(
  code: BadInputSiteContentErrorCodeType
): ErrorInterfaceDetail {
  return BAD_INPUT_SITE_CONTENT_ERROR_CODE[code]
}
