import { COMMON_BAD_INPUT_ERROR_CODE } from './common'
import { ErrorInterfaceDetail } from './types'

export const BAD_INPUT_MARKETPLACE_ERROR_CODE = {
  ...COMMON_BAD_INPUT_ERROR_CODE,
  INVALID_DISCOUNT_CODE: {
    code: 'MARKETPLACE_INVALID_DISCOUNT_CODE',
    message: 'Invalid discount code',
  },
  INVALID_INFLUENCER_CODE_USAGE: {
    code: 'MARKETPLACE_INVALID_INFLUENCER_CODE_USAGE',
    message: 'Invalid influencer code usage',
  },
  INVALID_CHARGE_LIVE_COURSE_PARAMS: {
    code: 'MARKETPLACE_INVALID_CHARGE_LIVE_COURSE_PARAMS',
    message: 'Invalid charge live course params',
  },
  CREATE_CHARGE_ERROR: {
    code: 'MARKETPLACE_CREATE_CHARGE_ERROR',
    message: 'Create charge error',
  },
  INVALID_TRIAL_LIVE_COURSE: {
    code: 'MARKETPLACE_INVALID_TRIAL_LIVE_COURSE',
    message: 'Invalid trial live course',
  },
  LIVE_NOT_STARTED: {
    code: 'MARKETPLACE_LIVE_NOT_STARTED',
    message: 'Live not started',
  },
  ALREADY_RESPONSED: {
    code: 'MARKETPLACE_ALREADY_RESPONSED',
    message: 'You already responded',
  },
  NOT_ACCEPTING_ANSWERS: {
    code: 'MARKETPLACE_NOT_ACCEPTING_ANSWERS',
    message: 'This quiz is not accepting answers',
  },
  ALREADY_UPDATED: {
    code: 'MARKETPLACE_ALREADY_UPDATED',
    message: 'You already updated',
  },
  CANNOT_DELETE_LIVE_COURSE_WITH_REGISTERED_STUDENT: {
    code: 'MARKETPLACE_CANNOT_DELETE_LIVE_COURSE_WITH_REGISTERED_STUDENT',
    message: 'Cannot delete live course with registered student',
  },
  LIVE_COURSE_NOT_FOUND: {
    code: 'MARKETPLACE_LIVE_COURSE_NOT_FOUND',
    message: 'Live course not found',
  },
  TUTOR_NOT_FOUND: {
    code: 'MARKETPLACE_TUTOR_NOT_FOUND',
    message: 'Tutor not found',
  },
  LIVE_SESSION_NOT_FOUND: {
    code: 'MARKETPLACE_LIVE_SESSION_NOT_FOUND',
    message: 'Live session not found',
  },
  LIVE_SESSION_ENDED: {
    code: 'MARKETPLACE_LIVE_SESSION_ENDED',
    message: 'Live session ended',
  },
  QUIZ_NOT_FOUND: {
    code: 'MARKETPLACE_QUIZ_NOT_FOUND',
    message: 'Quiz not found',
  },
  ADDON_NOT_FOUND: {
    code: 'MARKETPLACE_ADDON_NOT_FOUND',
    message: 'Live course addon not found',
  },
  INVALID_LEARNING_TYPE: {
    code: 'MARKETPLACE_INVALID_LEARNING_TYPE',
    message: 'Invalid learning type',
  },
  NO_AVAILABLE_SEATS: {
    code: 'MARKETPLACE_NO_AVAILABLE_SEATS',
    message: 'No available seats',
  },
  INVALID_RECEIVE_METHOD: {
    code: 'MARKETPLACE_INVALID_RECEIVE_METHOD',
    message: 'Invalid receive method',
  },
  MISSING_SHIPPING_ADDRESS: {
    code: 'MARKETPLACE_MISSING_SHIPPING_ADDRESS',
    message: 'Missing shipping address',
  },
  BOOKING_NOT_FOUND: {
    code: 'MARKETPLACE_BOOKING_NOT_FOUND',
    message: 'Booking not found',
  },
  INVALID_BOOKING_STATUS: {
    code: 'MARKETPLACE_INVALID_BOOKING_STATUS',
    message: 'Invalid booking status',
  },
  CHARGE_NOT_FOUND: {
    code: 'MARKETPLACE_CHARGE_NOT_FOUND',
    message: 'Charge not found',
  },
  INVALID_WEBHOOK_BODY: {
    code: 'MARKETPLACE_INVALID_WEBHOOK_BODY',
    message: 'Invalid webhook body',
  },
  ALREADY_HAS_COURSE: {
    code: 'MARKETPLACE_ALREADY_HAS_COURSE',
    message: 'Already has course',
  },
  INVALID_FUNDAMENTAL_COURSE: {
    code: 'MARKETPLACE_INVALID_FUNDAMENTAL_COURSE',
    message: 'Invalid fundamental course',
  },
  INVALID_MOCK_EXAM: {
    code: 'MARKETPLACE_INVALID_MOCK_EXAM',
    message: 'Invalid mock exam',
  },
  INVALID_EXAM: {
    code: 'MARKETPLACE_INVALID_EXAM',
    message: 'Invalid exam',
  },
  LIVE_COURSE_EXPIRED: {
    code: 'MARKETPLACE_LIVE_COURSE_EXPIRED',
    message: 'Live course expired',
  },
}

export type BadInputMarketplaceErrorCodeType = keyof typeof BAD_INPUT_MARKETPLACE_ERROR_CODE

export function badInputMarketplaceErrorDetail(
  code: BadInputMarketplaceErrorCodeType
): ErrorInterfaceDetail {
  return BAD_INPUT_MARKETPLACE_ERROR_CODE[code]
}

export const UNAUTHORIZED_MARKETPLACE_ERROR_CODE = {
  FORBIDDEN_NOT_PURCHASED_COURSE: {
    code: 'MARKETPLACE_FORBIDDEN_NOT_PURCHASED_COURSE',
    message: 'Course not purchased yet',
  },
  FORBIDDEN_NO_REMAINING_PLAYBACK_TIME: {
    code: 'FORBIDDEN_NO_REMAINING_PLAYBACK_TIME',
    message: 'Session has no remaining playback time',
  },
  INVALID_TOKEN_TYPE: {
    code: 'COMMON_INVALID_TOKEN_TYPE',
    message: 'Invalid token type',
  },
  INVALID_TOKEN: {
    code: 'COMMON_INVALID_TOKEN',
    message: 'Invalid token',
    description: `This user's credential isn't valid for this operation.`,
  },
  INSUFFICIENT_PERMISSIONS: {
    code: 'COMMON_INSUFFICIENT_PERMISSIONS',
    message: 'Insufficient permissions',
    description: `This user doesn't have permission to perform this operation.`,
  },
  INVALID_CREDENTIALS: {
    code: 'USER_INVALID_CREDENTIALS',
    message: 'Invalid credentials',
    display: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
  },
  INACTIVE_USER: {
    code: 'USER_INACTIVE_USER',
    message: 'User is inactive',
    description: 'User is existed but is in inactive state',
    display: 'บัญชีของคุณถูกระงับการใช้งาน',
  },
  MISMATCH_PASSWORD: {
    code: 'USER_MISMATCH_PASSWORD',
    message: 'Old password does not match',
    display: 'รหัสผ่านเดิมไม่ถูกต้อง',
  },
  PHONE_VERIFICATION_FAILED: {
    code: 'USER_PHONE_VERIFICATION_FAILED',
    message: 'This phone number does not verify OTP',
    display: 'การยืนยันหมายเลขโทรศัพท์ผ่าน OTP ล้มเหลว',
  },
  INVALID_AUDIENCE: {
    code: 'USER_INVALID_AUDIENCE',
    message: 'Invalid audience',
    display: `This user's credential isn't valid for this operation.`,
  },
}

export type UnauthorizedMarketplaceErrorCodeType = keyof typeof UNAUTHORIZED_MARKETPLACE_ERROR_CODE

export function unauthorizedMarketplaceErrorDetail(
  code: UnauthorizedMarketplaceErrorCodeType
): ErrorInterfaceDetail {
  return UNAUTHORIZED_MARKETPLACE_ERROR_CODE[code]
}
