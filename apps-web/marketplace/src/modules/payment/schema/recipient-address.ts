import { z } from 'zod'

import { LearningType } from '../constants/learning-type'
import { ReceiveMaterialMethodType } from '../constants/receive-material-method'

const DEFAULT_ERROR_MESSAGE = 'กรุณาใส่รายละเอียดให้ครบถ้วน'

export const ShippingAddressSchema = z.object({
  name: z.string({ required_error: DEFAULT_ERROR_MESSAGE }).nonempty(DEFAULT_ERROR_MESSAGE),
  telephone: z
    .string({ required_error: DEFAULT_ERROR_MESSAGE })
    .nonempty(DEFAULT_ERROR_MESSAGE)
    .transform((val) => {
      return val.replace(/\D/g, '')
    }),
  address: z.string({ required_error: DEFAULT_ERROR_MESSAGE }).nonempty(DEFAULT_ERROR_MESSAGE),
  province: z.string({ required_error: DEFAULT_ERROR_MESSAGE }).nonempty(DEFAULT_ERROR_MESSAGE),
  district: z.string({ required_error: DEFAULT_ERROR_MESSAGE }).nonempty(DEFAULT_ERROR_MESSAGE),
  subDistrict: z.string({ required_error: DEFAULT_ERROR_MESSAGE }).nonempty(DEFAULT_ERROR_MESSAGE),
  postalCode: z.string({ required_error: DEFAULT_ERROR_MESSAGE }).nonempty(DEFAULT_ERROR_MESSAGE),
})

export type ShippingAddressSchema = z.infer<typeof ShippingAddressSchema>

const PaymentPackageSelectionGeneral = z.object({
  learningType: z.nativeEnum(LearningType, {
    required_error: DEFAULT_ERROR_MESSAGE,
  }),
  addonId: z.string().optional(),
})

export const PaymentPackageSelectionForShipping = PaymentPackageSelectionGeneral.merge(
  z.object({
    receiveMaterialMethodType: z.literal(ReceiveMaterialMethodType.SHIPPING),
    shippingAddress: ShippingAddressSchema,
  })
)
export type PaymentPackageSelectionForShipping = z.infer<typeof PaymentPackageSelectionForShipping>

export const PaymentPackageSelectionForPickup = PaymentPackageSelectionGeneral.merge(
  z.object({
    receiveMaterialMethodType: z.literal(ReceiveMaterialMethodType.PICKUP),
  })
)
export type PaymentPackageSelectionForPickup = z.infer<typeof PaymentPackageSelectionForPickup>

export const PaymentPackageSelectionForNone = PaymentPackageSelectionGeneral.merge(
  z.object({
    receiveMaterialMethodType: z.literal(ReceiveMaterialMethodType.NONE),
  })
)
export type PaymentPackageSelectionForNone = z.infer<typeof PaymentPackageSelectionForNone>

export const PaymentPackageSelectionSchema = z.discriminatedUnion('receiveMaterialMethodType', [
  PaymentPackageSelectionForPickup,
  PaymentPackageSelectionForShipping,
  PaymentPackageSelectionForNone,
])

export type PaymentPackageSelectionSchema = z.infer<typeof PaymentPackageSelectionSchema>
