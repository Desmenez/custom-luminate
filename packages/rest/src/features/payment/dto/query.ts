import { z } from 'zod'

import {
  LearningType,
  LiveCourseModel,
  LiveCourseType,
  PaymentMethod,
  PaymentStatus,
  ReceiveMethod,
  ShippingAddressModel,
} from '@luminate/database'

export const PaymentLiveCourseFeature = {
  LIVE: 'LIVE',
  ONSITE: 'ONSITE',
  ONLINE: 'ONLINE',
  FUNDAMENTAL: 'FUNDAMENTAL',
  RECORDING: 'RECORDING',
  EXERCISE: 'EXERCISE',
  EXAM: 'EXAM',
  QUIZ: 'QUIZ',
  SUBSCRIPTION: 'SUBSCRIPTION',
} as const
export type PaymentLiveCourseFeature =
  (typeof PaymentLiveCourseFeature)[keyof typeof PaymentLiveCourseFeature]

const PaymentPackageBaseOption = z.object({
  price: z.number(),
  features: z.array(z.nativeEnum(PaymentLiveCourseFeature)),
})
export const PaymentPackageOnlineOption = PaymentPackageBaseOption
export const PaymentPackageOnsiteOption = PaymentPackageBaseOption.extend({
  availableSeats: z.number(),
  onsiteAddress: z.string().nullable(),
})

const PaymentPackageAddonOption = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  durationDays: z.number(),
  features: z.array(z.nativeEnum(PaymentLiveCourseFeature)),
})

const PaymentShippingOption = z.object({
  price: z.number(),
})
const PaymentPickupOption = z.object({
  pickupAddress: z.string().nullable(),
})

export const PaymentPackageInfo = z.object({
  liveCourseId: z.string(),
  type: z.nativeEnum(LiveCourseType),
  name: z.string(),
  courseCoverUrl: z.string().nullable(),
  courseStickerUrl: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  registrationDeadline: z.string(),
  startingPrice: z.number(),
  learningTypeOptions: z.object({
    online: PaymentPackageOnlineOption.nullable(),
    onsite: PaymentPackageOnsiteOption.nullable(),
  }),
  addonOptions: z.array(PaymentPackageAddonOption),
  receiveMaterialOptions: z.object({
    shipping: PaymentShippingOption.nullable(),
    pickup: PaymentPickupOption.nullable(),
  }),
})
export type PaymentPackageInfo = z.infer<typeof PaymentPackageInfo>

export const PaymentBooking = z.object({
  id: z.string(),
  liveCourseId: z.string(),
  type: z.nativeEnum(LiveCourseType),
  name: z.string(),
  courseCoverUrl: z.string().nullable(),
  courseStickerUrl: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  registrationDeadline: z.string(),
  serverTime: z.string(),
  expiresAt: z.string(),
  basePrice: z.number(),
  addon: z
    .object({
      name: z.string(),
      price: z.number(),
    })
    .nullable(),
  receiveMethod: z.nativeEnum(ReceiveMethod).nullable(),
  shippingPrice: z.number(),
  subtotal: z.number(),
  charges: z.array(
    z.object({
      id: z.string(),
      status: z.nativeEnum(PaymentStatus),
    })
  ),
})
export type PaymentBooking = z.infer<typeof PaymentBooking>

const PaymentChargeAdditionalSteps = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(PaymentMethod.CREDIT_CARD),
    authorizeUrl: z.string().nullable(),
  }),
  z.object({
    type: z.literal(PaymentMethod.PROMPTPAY),
    qrCodeUrl: z.string(),
    expiresAt: z.string(),
  }),
  z.object({
    type: z.literal(PaymentMethod.TRUEMONEY),
    authorizeUrl: z.string(),
  }),
  z.object({
    type: z.literal(PaymentMethod.MOBILE_BANKING),
    authorizeUrl: z.string(),
  }),
])
export type PaymentChargeAdditionalSteps = z.infer<typeof PaymentChargeAdditionalSteps>

export const PaymentChargePending = z.object({
  type: z.literal(PaymentStatus.PENDING),
  additionalSteps: PaymentChargeAdditionalSteps,
})
export const PaymentChargeFailed = z.object({
  type: z.literal(PaymentStatus.FAILED),
})
export type PaymentChargeFailed = z.infer<typeof PaymentChargeFailed>
export const PaymentChargeSuccess = z.object({
  type: z.literal(PaymentStatus.SUCCESS),
  learningType: z.nativeEnum(LearningType),
  onsiteAddress: z.string().nullable(),
  addonName: z.string().nullable(),
  receiveMethod: z.nativeEnum(ReceiveMethod).nullable(),
  shippingAddress: ShippingAddressModel.nullable(),
  pickupAddress: z.string().nullable(),
  paymentMethod: z.nativeEnum(PaymentMethod),
  chargedCard: z
    .object({
      id: z.string(),
      lastDigits: z.string(),
      brand: z.string(),
      expirationMonth: z.number(),
      expirationYear: z.number(),
    })
    .nullable(),
})
export type PaymentChargeSuccess = z.infer<typeof PaymentChargeSuccess>

export const PaymentChargeStatus = z.discriminatedUnion('type', [
  PaymentChargePending,
  PaymentChargeFailed,
  PaymentChargeSuccess,
])
export type PaymentChargeStatus = z.infer<typeof PaymentChargeStatus>

export const PaymentCharge = z.object({
  id: z.string(),
  bookingId: z.string(),
  summary: z.object({
    basePrice: z.number(),
    addon: z
      .object({
        name: z.string(),
        price: z.number(),
      })
      .nullable(),
    shippingPrice: z.number(),
    amount: z.number(),
  }),
  status: PaymentChargeStatus,
  liveCourse: LiveCourseModel.pick({
    id: true,
    name: true,
    type: true,
    courseCoverUrl: true,
    courseStickerUrl: true,
    startDate: true,
    endDate: true,
    lastEnrollmentDate: true,
  }).extend({
    startDate: z.string(),
    endDate: z.string(),
    lastEnrollmentDate: z.string().nullable(),
  }),
  discountCode: z
    .object({
      code: z.string(),
      discount: z.number(),
    })
    .nullable(),
})
export type PaymentCharge = z.infer<typeof PaymentCharge>

export const CreditCard = z.object({
  id: z.string(),
  bank: z.string(),
  lastDigits: z.string(),
  brand: z.string(),
  expirationMonth: z.number(),
  expirationYear: z.number(),
  name: z.string(),
  securityCodeCheck: z.boolean(),
})
export type CreditCard = z.infer<typeof CreditCard>

export const GetCreditCardsResponse = z.object({
  defaultCard: z.string().nullable(),
  cards: z.array(CreditCard),
})
export type GetCreditCardsResponse = z.infer<typeof GetCreditCardsResponse>
