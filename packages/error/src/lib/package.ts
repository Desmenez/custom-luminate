import { COMMON_BAD_INPUT_ERROR_CODE } from './common'

export const BAD_INPUT_PACKAGE_ERROR_CODE = {
  ...COMMON_BAD_INPUT_ERROR_CODE,
  CAMPAIGN_NOT_FOUND: {
    code: 'PACKAGE_CAMPAIGN_NOT_FOUND',
    message: 'Campaign not found',
  },
  PACKAGE_NOT_FOUND: {
    code: 'PACKAGE_PACKAGE_NOT_FOUND',
    message: 'Package not found',
  },
  INVALID_PACKAGE_PARAMS: {
    code: 'PACKAGE_INVALID_PACKAGE_PARAMS',
    message: 'Invalid package parameters',
  },
  CANNOT_DELETE_PACKAGE: {
    code: 'PACKAGE_CANNOT_DELETE_PACKAGE',
    message: 'Cannot delete package that is in used',
  },
  PROMOTION_NOT_FOUND: {
    code: 'PACKAGE_PROMOTION_NOT_FOUND',
    message: 'Promotion not found',
  },
  INVALID_PROMOTION_PARAMS: {
    code: 'PACKAGE_INVALID_PROMOTION_PARAMS',
    message: 'Invalid promotion parameters',
  },
  CANNOT_DELETE_PROMOTION: {
    code: 'PACKAGE_CANNOT_DELETE_PROMOTION',
    message: 'Cannot delete promotion that is in used',
  },
  CANNOT_DELETE_PROMOTION_GROUP: {
    code: 'PACKAGE_CANNOT_DELETE_PROMOTION_GROUP',
    message: 'Cannot delete promotion group with promotion(s)',
  },
  INVALID_PACKAGE_TYPE: {
    code: 'PACKAGE_INVALID_PACKAGE_TYPE',
    message: 'Invalid package type',
  },
  USER_HAS_TOP_UP_PACKAGE: {
    code: 'PACKAGE_USER_HAS_TOP_UP_PACKAGE',
    message: 'User already has top up package',
  },
  USER_HAS_RECURRING_PACKAGE: {
    code: 'PACKAGE_USER_HAS_RECURRING_PACKAGE',
    message: 'User already has recurring package',
  },
  USER_NOT_HAVE_RECURRING_PACKAGE: {
    code: 'PACKAGE_USER_NOT_HAVE_RECURRING_PACKAGE',
    message: 'User does not have recurring package',
  },
  INVALID_PROMOTION_USAGE: {
    code: 'PACKAGE_INVALID_PROMOTION_USAGE',
    message: 'Invalid promotion usage',
  },
  INVALID_ADD_TOP_UP_PACKAGE_PARAMS: {
    code: 'PACKAGE_INVALID_ADD_TOP_UP_PACKAGE_PARAMS',
    message: 'Invalid add top up package parameters',
  },
  CREATE_CHARGE_ERROR: {
    code: 'PACKAGE_CREATE_CHARGE_ERROR',
    message: 'Create charge error',
  },
  INVALID_PACKAGE_USAGE: {
    code: 'PACKAGE_INVALID_PACKAGE_USAGE',
    message: 'Invalid package usage',
  },
  INFLUENCER_CODE_NOT_FOUND: {
    code: 'PACKAGE_INFLUENCER_CODE_NOT_FOUND',
    message: 'Influencer code not found',
  },
  CANNOT_DELETE_INFLUENCER_CODE: {
    code: 'PACKAGE_CANNOT_DELETE_INFLUENCER_CODE',
    message: 'Cannot delete influencer code that is in used',
  },
  CANNOT_UPDATE_INFLUENCER_CODE: {
    code: 'PACKAGE_CANNOT_UPDATE_INFLUENCER_CODE',
    message: 'Cannot delete influencer code that is in used',
  },
  INFLUENCER_CODE_GROUP_NOT_FOUND: {
    code: 'PACKAGE_INFLUENCER_CODE_GROUP_NOT_FOUND',
    message: 'Influencer code group not found',
  },
  CANNOT_DELETE_INFLUENCER_CODE_GROUP: {
    code: 'PACKAGE_CANNOT_DELETE_INFLUENCER_CODE_GROUP',
    message: 'Cannot delete influencer code group that contain influencer code(s)',
  },
  INVALID_INFLUENCER_CODE_USAGE: {
    code: 'PACKAGE_INVALID_INFLUENCER_CODE_USAGE',
    message: 'Invalid influencer code usage',
  },
  REFERRER_USER_NOT_FOUND: {
    code: 'PACKAGE_REFERRER_USER_NOT_FOUND',
    message: 'Referrer user not found',
  },
  REFERRER_USER_NOT_ACTIVE: {
    code: 'PACKAGE_REFERRER_USER_NOT_ACTIVE',
    message: 'Referrer user is not active',
  },
  CANNOT_USE_MULTIPLE_USER_REFERENCE: {
    code: 'PACKAGE_CANNOT_USE_MULTIPLE_USER_REFERENCE',
    message: 'Cannot use multiple user reference',
  },
  REFERRER_USER_SAME_AS_USER: {
    code: 'PACKAGE_REFERRER_USER_SAME_AS_USER',
    message: 'Referrer user is same as user',
  },
  CANNOT_USE_CASH_PAYMENT_CHANNEL: {
    code: 'PACKAGE_PAYMENT_CANNOT_USE_CASH_PAYMENT_CHANNEL',
    message: 'Cash payment is not supported',
  },
  CANNOT_USE_CASH_CARD_PAYMENT_CHANNEL: {
    code: 'PACKAGE_PAYMENT_CANNOT_USE_CASH_CARD_PAYMENT_CHANNEL',
    message: 'Cash card payment is not supported',
  },
  CANNOT_USE_LIVE_COURSE_PRODUCT_TYPE: {
    code: 'PACKAGE_PAYMENT_CANNOT_USE_LIVE_COURSE_PRODUCT_TYPE',
    message: 'Live course payment is not supported',
  },
}

export type BadInputPackageErrorCodeType = keyof typeof BAD_INPUT_PACKAGE_ERROR_CODE
