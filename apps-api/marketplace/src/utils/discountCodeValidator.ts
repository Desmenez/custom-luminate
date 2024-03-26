import { isFuture, isPast } from 'date-fns'

import { type DiscountCode, DiscountCodeScope } from '@luminate/database'

export type DiscountCodeValidateErrorType = 'INVALID_DISCOUNT_CODE'

export class DiscountCodeValidateError extends Error {
  constructor(
    public readonly type: DiscountCodeValidateErrorType,
    message?: string
  ) {
    super(message)
  }
}

export type DiscountCodeValidatorArgs = Pick<
  DiscountCode,
  'code' | 'scope' | 'limit' | 'usageCount' | 'isActive' | 'startDate' | 'endDate'
> & {
  liveCourses: Array<{ id: string }>
}

export function validateDiscountCode(
  discountCode: DiscountCodeValidatorArgs,
  liveCourseId?: string
): void {
  if (
    !(
      discountCode.scope === DiscountCodeScope.SPECIFIC_LIVE_COURSE ||
      discountCode.scope === DiscountCodeScope.ANY_LIVE_COURSE ||
      discountCode.scope === DiscountCodeScope.ALL
    )
  ) {
    throw new DiscountCodeValidateError(
      'INVALID_DISCOUNT_CODE',
      `Discount code ${discountCode.code} has invalid scope`
    )
  }
  if (!discountCode.isActive) {
    throw new DiscountCodeValidateError(
      'INVALID_DISCOUNT_CODE',
      `Discount code ${discountCode.code} is not active`
    )
  }

  if (discountCode.limit && discountCode.usageCount >= discountCode.limit) {
    throw new DiscountCodeValidateError(
      'INVALID_DISCOUNT_CODE',
      `Discount code ${discountCode.code} has been used up`
    )
  }
  if (discountCode.startDate && isFuture(discountCode.startDate)) {
    throw new DiscountCodeValidateError(
      'INVALID_DISCOUNT_CODE',
      `Discount code ${discountCode.code} is not in active duration`
    )
  }
  if (discountCode.endDate && isPast(discountCode.endDate)) {
    throw new DiscountCodeValidateError(
      'INVALID_DISCOUNT_CODE',
      `Discount code ${discountCode.code} is not in active duration`
    )
  }

  if (discountCode.scope === DiscountCodeScope.SPECIFIC_LIVE_COURSE) {
    if (!liveCourseId) {
      throw new DiscountCodeValidateError(
        'INVALID_DISCOUNT_CODE',
        `Discount code ${discountCode.code} has invalid`
      )
    }
    if (!discountCode.liveCourses.some((liveCourse) => liveCourse.id === liveCourseId)) {
      throw new DiscountCodeValidateError(
        'INVALID_DISCOUNT_CODE',
        `Discount code ${discountCode.code} has invalid`
      )
    }
  }
}
