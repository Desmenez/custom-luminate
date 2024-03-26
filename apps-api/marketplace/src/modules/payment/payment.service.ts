import { calculateShelfLife } from '@app/common/calculate-shelf-life'
import { container } from '@app/container'
import { DiscountCodeValidateError, validateDiscountCode } from '@app/utils/discountCodeValidator'
import cuid from 'cuid'
import { addMinutes, isAfter, min } from 'date-fns'
import Omise from 'omise'

import {
  DiscountCode,
  LearningType,
  LiveCourseCharge,
  LiveCourseType,
  PaymentMethod,
  PaymentStatus,
  PrismaClient,
  ReceiveMethod,
} from '@luminate/database'
import { BadInputError } from '@luminate/error'
import {
  CreateOmisePaymentHistoryRequest,
  CreateOmisePaymentHistoryResponse,
  LuminateGatewayServiceClient,
  OmiseStatus,
  UpdateOmisePaymentHistoryRequest,
} from '@luminate/grpc'
import {
  AddCardInput,
  BookingCreateInput,
  ChargeCreateInput,
  ChargeSource,
  CreditCard,
  PaymentBooking,
  PaymentCharge,
  PaymentChargeAdditionalSteps,
  PaymentChargeStatus,
  PaymentChargeSuccess,
} from '@luminate/rest'

import { OmiseService } from '../omise'
import { PaymentInfoService } from './info.service'

const BOOKING_EXPIRE_DISPLAY_MINS = 10
const BOOKING_EXPIRE_MINS = BOOKING_EXPIRE_DISPLAY_MINS + 3

export class PaymentService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly infoService: PaymentInfoService,
    private readonly omiseService: OmiseService,
    private readonly grpcClient: LuminateGatewayServiceClient,
    private readonly luminateGatewayServiceClient: LuminateGatewayServiceClient
  ) {}

  async getPackageInfo(userId: string, liveCourseId: string) {
    const liveCourseOnUser = await this.prisma.liveCoursesOnUsers.findUnique({
      where: {
        userId_liveCourseId: {
          liveCourseId,
          userId,
        },
      },
    })
    if (liveCourseOnUser) {
      throw new BadInputError('marketplace', 'ALREADY_HAS_COURSE')
    }

    return await this.infoService.getPackageInfo(liveCourseId)
  }

  async createBooking(userId: string, input: BookingCreateInput) {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: {
        id: input.liveCourseId,
      },
      include: {
        addons: true,
      },
    })
    if (!liveCourse) {
      throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
    }

    const liveCourseOnUser = await this.prisma.liveCoursesOnUsers.findUnique({
      where: {
        userId_liveCourseId: {
          liveCourseId: input.liveCourseId,
          userId,
        },
      },
    })
    if (liveCourseOnUser) {
      throw new BadInputError('marketplace', 'ALREADY_HAS_COURSE')
    }

    const addon = liveCourse.addons.find((addon) => addon.id === input.addonId)
    if (input.addonId && addon?.id !== input.addonId) {
      // user specified an addon, but not found
      throw new BadInputError('marketplace', 'ADDON_NOT_FOUND')
    }
    if (input.learningType === LearningType.ONLINE && !this.infoService.canBuyOnline(liveCourse)) {
      // user want to buy online, but course is only onsite
      throw new BadInputError('marketplace', 'INVALID_LEARNING_TYPE')
    }
    if (input.learningType === LearningType.ONSITE && !this.infoService.canBuyOnsite(liveCourse)) {
      // user want to buy onsite, but course is only online
      throw new BadInputError('marketplace', 'INVALID_LEARNING_TYPE')
    }
    if (input.learningType === LearningType.ONSITE) {
      // check if there is available seats
      const availableSeats = await this.infoService.getOnsiteAvailableSeats(liveCourse)
      if (availableSeats < 1) {
        throw new BadInputError('marketplace', 'NO_AVAILABLE_SEATS')
      }
    }
    if (input.receiveMethod === null && (liveCourse.hasShipping || liveCourse.hasPickUp)) {
      // needs to specify receive method if course has shipping or pickup
      throw new BadInputError('marketplace', 'INVALID_RECEIVE_METHOD')
    }
    if (input.receiveMethod === ReceiveMethod.SHIPPING && !liveCourse.hasShipping) {
      // users want to receive by shipping, but course has no shipping
      throw new BadInputError('marketplace', 'INVALID_RECEIVE_METHOD')
    }
    if (input.receiveMethod === ReceiveMethod.PICKUP && !liveCourse.hasPickUp) {
      // users want to receive by pickup, but course has no pickup
      throw new BadInputError('marketplace', 'INVALID_RECEIVE_METHOD')
    }
    if (input.receiveMethod === ReceiveMethod.SHIPPING && !input.shippingAddress) {
      // needs shipping address if method is shipping
      throw new BadInputError('marketplace', 'MISSING_SHIPPING_ADDRESS')
    }

    const basePrice = this.infoService.getBasePrice(liveCourse, input.learningType)
    const addonPrice = addon ? addon.price : 0
    const shippingPrice =
      input.receiveMethod === ReceiveMethod.SHIPPING ? liveCourse.shippingPrice : 0
    const subtotal = basePrice + addonPrice + shippingPrice

    const booking = await this.prisma.liveCourseBooking.create({
      data: {
        liveCourse: {
          connect: {
            id: liveCourse.id,
          },
        },
        userId,
        learningType: input.learningType,
        receiveMethod: input.receiveMethod,
        shippingAddress:
          input.receiveMethod === ReceiveMethod.SHIPPING
            ? {
                create: {
                  // data: {
                  userId: userId,
                  name: input.shippingAddress!.name,
                  phone: input.shippingAddress!.telephone,
                  address: input.shippingAddress!.address,
                  province: input.shippingAddress!.province,
                  district: input.shippingAddress!.district,
                  subdistrict: input.shippingAddress!.subDistrict,
                  postalCode: input.shippingAddress!.postalCode,
                  // }
                },
              }
            : undefined,
        basePrice,
        shippingPrice,
        addonName: addon?.name,
        addonPrice: addon?.price,
        addonDurationDays: addon?.durationDays,
        subtotal,
        status: PaymentStatus.PENDING,
        displayExpiresAt: addMinutes(new Date(), BOOKING_EXPIRE_DISPLAY_MINS),
        expiresAt: addMinutes(new Date(), BOOKING_EXPIRE_MINS),
      },
    })

    if (input.learningType === LearningType.ONSITE) {
      const availableSeats = await this.infoService.getOnsiteAvailableSeats(liveCourse)
      if (availableSeats < 0) {
        await this.prisma.liveCourseBooking.update({
          where: {
            id: booking.id,
          },
          data: {
            status: PaymentStatus.FAILED,
          },
        })
        throw new BadInputError('marketplace', 'NO_AVAILABLE_SEATS')
      }
    }

    return booking
  }

  async getBooking(userId: string, bookingId: string): Promise<PaymentBooking | null> {
    const booking = await this.prisma.liveCourseBooking.findUnique({
      where: {
        id: bookingId,
      },
      include: {
        liveCourse: true,
        charges: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    })
    if (!booking || booking.userId !== userId) {
      return null
    }
    const { liveCourse } = booking
    return {
      id: booking.id,
      liveCourseId: booking.liveCourseId,
      type: liveCourse.type,
      name: liveCourse.name,
      courseCoverUrl: liveCourse.courseCoverUrl,
      courseStickerUrl: liveCourse.courseStickerUrl,
      startDate: liveCourse.startDate.toISOString(),
      endDate: liveCourse.endDate.toISOString(),
      registrationDeadline: this.infoService.getRegistrationDeadline(liveCourse).toISOString(),
      serverTime: new Date().toISOString(),
      expiresAt: booking.displayExpiresAt.toISOString(),
      basePrice: booking.basePrice,
      addon: booking.addonName
        ? {
            name: booking.addonName,
            price: booking.addonPrice!,
          }
        : null,
      receiveMethod: booking.receiveMethod,
      shippingPrice: booking.shippingPrice,
      subtotal: booking.subtotal,
      charges: booking.charges,
    }
  }

  async checkDiscountCode(userId: string, bookingId: string, code: string) {
    const booking = await this.prisma.liveCourseBooking.findUnique({
      where: { id: bookingId },
      select: {
        userId: true,
        liveCourseId: true,
      },
    })
    if (!booking || booking.userId !== userId) {
      return null
    }
    const discountCode = await this.prisma.discountCode.findUnique({
      where: { code },
      include: {
        liveCourses: {
          select: { id: true },
        },
      },
    })
    if (!discountCode) {
      return null
    }
    try {
      validateDiscountCode(discountCode, booking.liveCourseId)
    } catch (e) {
      if (e instanceof DiscountCodeValidateError) {
        return null
      } else {
        throw e
      }
    }
    return {
      code: discountCode.code,
      discount: discountCode.discount,
    }
  }

  async createCharge(userId: string, input: ChargeCreateInput) {
    const booking = await this.prisma.liveCourseBooking.findUnique({
      where: {
        id: input.bookingId,
      },
      include: {
        liveCourse: true,
        charges: true,
      },
    })
    if (!booking || booking.userId !== userId) {
      throw new BadInputError('marketplace', 'BOOKING_NOT_FOUND')
    }
    if (booking.status !== PaymentStatus.PENDING || isAfter(new Date(), booking.displayExpiresAt)) {
      throw new BadInputError('marketplace', 'INVALID_BOOKING_STATUS')
    }
    const liveCourseOnUser = await this.prisma.liveCoursesOnUsers.findUnique({
      where: {
        userId_liveCourseId: {
          liveCourseId: booking.liveCourseId,
          userId,
        },
      },
    })
    if (liveCourseOnUser) {
      throw new BadInputError('marketplace', 'ALREADY_HAS_COURSE')
    }

    const sourceParams = JSON.stringify(input.source)
    const existingCharge = booking.charges.find(
      (charge) => charge.status === PaymentStatus.PENDING && charge.sourceParams === sourceParams
    )
    if (existingCharge) {
      return existingCharge
    }

    let discountCode: (DiscountCode & { liveCourses: Array<{ id: string }> }) | null = null
    if (input.discountCode) {
      discountCode = await this.prisma.discountCode.findUnique({
        where: { code: input.discountCode },
        include: {
          liveCourses: {
            select: { id: true },
          },
        },
      })
      if (!discountCode) {
        throw new BadInputError('marketplace', 'INVALID_DISCOUNT_CODE')
      }
      try {
        validateDiscountCode(discountCode, booking.liveCourseId)
      } catch (e) {
        if (e instanceof DiscountCodeValidateError) {
          throw new BadInputError('marketplace', 'INVALID_DISCOUNT_CODE')
        } else {
          throw e
        }
      }
    }

    const discountAmount = discountCode?.discount ?? 0
    const amount = booking.subtotal - discountAmount

    let description = booking.liveCourse.name
    if (booking.addonName) {
      description += ` + ${booking.addonName}`
    }
    const chargeId = cuid()
    const metadata: Record<string, unknown> = {
      chargeId,
      createdBy: 'LUMINATE',
      bookingId: booking.id,
      liveCourseId: booking.liveCourseId,
      userId: booking.userId,
    }
    const omiseCharge = await this.createOmiseCharge(
      chargeId,
      userId,
      input.source,
      description,
      amount,
      booking.expiresAt,
      metadata
    )

    //TODO: add discount code in metadata
    const paymentHistory = await this.createPaymentHistoryOnEveryday(
      {
        amount: amount,
        status: OmiseStatus.PENDING,
        userId: userId,
        chargeId: omiseCharge.id,
        netAmount: amount,
        topupDays: booking.addonDurationDays ? booking.addonDurationDays : undefined,
      },
      {
        booking: booking,
        discountCode: discountCode?.code ?? null,
        discountCodeId: discountCode?.id ?? null,
      }
    )

    return await this.prisma.liveCourseCharge.create({
      data: {
        id: chargeId,
        omiseChargeId: omiseCharge.id,
        userId: userId,
        paymentMethod: input.source.type,
        sourceParams: sourceParams,
        amount: amount,
        discountCodeId: discountCode?.id ?? null,
        status: PaymentStatus.PENDING,
        bookingId: booking.id,
        paymentId: paymentHistory.paymentHistoryId,
      },
    })
  }

  async createOmiseCharge(
    chargeId: string,
    userId: string,
    source: ChargeSource,
    description: string,
    amount: number,
    expiresAt: Date,
    metadata: Record<string, unknown>
  ) {
    switch (source.type) {
      case PaymentMethod.CREDIT_CARD: {
        const { customerId } = await this.luminateGatewayServiceClient.getOmiseCustomerId({
          userId,
        })
        return await this.omiseService.createCharge({
          amount: amount * 100,
          currency: 'THB',
          customer: customerId,
          card: source.cardId,
          expires_at: expiresAt.toISOString(),
          description,
          metadata,
        })
      }
      case PaymentMethod.PROMPTPAY: {
        const omiseSource = await this.omiseService.retrieveSource(source.sourceId)
        if (omiseSource.type !== 'promptpay') {
          throw new Error('invalid source')
        }
        return await this.omiseService.createCharge({
          amount: amount * 100,
          currency: 'THB',
          source: source.sourceId,
          expires_at: expiresAt.toISOString(),
          description,
          metadata,
        })
      }
      case PaymentMethod.TRUEMONEY: {
        const omiseSource = await this.omiseService.retrieveSource(source.sourceId)
        if (omiseSource.type !== 'truemoney') {
          throw new Error('invalid source')
        }
        return await this.omiseService.createCharge({
          amount: amount * 100,
          currency: 'THB',
          source: source.sourceId,
          return_uri: `${source.returnUrl}/${chargeId}`,
          expires_at: expiresAt.toISOString(),
          description,
          metadata,
        })
      }
      case PaymentMethod.MOBILE_BANKING: {
        const omiseSource = await this.omiseService.retrieveSource(source.sourceId)
        if (
          omiseSource.type !== 'mobile_banking_bay' &&
          omiseSource.type !== 'mobile_banking_kbank' &&
          omiseSource.type !== 'mobile_banking_scb'
        ) {
          throw new Error('invalid source')
        }
        return await this.omiseService.createCharge({
          amount: amount * 100,
          currency: 'THB',
          source: source.sourceId,
          return_uri: `${source.returnUrl}/${chargeId}`,
          expires_at: expiresAt.toISOString(),
          description,
          metadata,
        })
      }
      default: {
        throw new Error('not implemented')
      }
    }
  }

  async handleChargeStatusChanged(omiseCharge: Omise.Charges.ICharge) {
    switch (omiseCharge.status) {
      case 'successful':
        await this.handleChargeSuccess(omiseCharge)
        break
      case 'failed':
        await this.handleChargeFailed(omiseCharge)
        break
    }
  }

  private async handleChargeSuccess(omiseCharge: Omise.Charges.ICharge) {
    const charge = await this.prisma.liveCourseCharge.findUnique({
      where: {
        omiseChargeId: omiseCharge.id,
      },
      include: {
        booking: {
          include: {
            liveCourse: true,
          },
        },
      },
    })
    if (!charge || charge.status !== 'PENDING') {
      return
    }
    const expiresAt = (() => {
      if (charge.booking.liveCourse.type === LiveCourseType.TAPE) {
        return calculateShelfLife({
          purchaseDateTime: new Date(),
          shelfLifeDuration: charge.booking.liveCourse.shelfLifeDuration!,
          shelfLifeDurationUnit: charge.booking.liveCourse.shelfLifeUnit!,
        })
      }
      return charge.booking.liveCourse.expiresAt
    })()
    await this.updatePaymentHistoryOnEveryday({
      paymentHistoryId: charge.paymentId,
      status: OmiseStatus.SUCCESS,
    })
    await this.prisma.$transaction([
      this.prisma.liveCourseCharge.update({
        where: {
          omiseChargeId: omiseCharge.id,
        },
        data: {
          status: PaymentStatus.SUCCESS,
          booking: {
            update: {
              status: PaymentStatus.SUCCESS,
            },
          },
        },
      }),
      this.prisma.liveCoursesOnUsers.create({
        data: {
          userId: charge.userId,
          liveCourse: { connect: { id: charge.booking.liveCourseId } },
          charge: { connect: { id: charge.id } },
          receiveMethod: charge.booking.receiveMethod,
          shippingAddress: charge.booking.shippingAddressId
            ? { connect: { id: charge.booking.shippingAddressId } }
            : undefined,
          expiresAt,
          learningType: charge.booking.learningType,
        },
      }),
      this.prisma.liveCourse.update({
        where: {
          id: charge.booking.liveCourseId,
        },
        data: {
          enrolled: {
            increment: 1,
          },
        },
      }),
      ...(charge.discountCodeId
        ? [
            this.prisma.discountCode.update({
              where: { id: charge.discountCodeId },
              data: { usageCount: { increment: 1 } },
            }),
          ]
        : []),
    ])
  }

  private async handleChargeFailed(omiseCharge: Omise.Charges.ICharge) {
    const charge = await this.prisma.liveCourseCharge.update({
      where: {
        omiseChargeId: omiseCharge.id,
      },
      data: {
        status: PaymentStatus.FAILED,
      },
    })
    await this.updatePaymentHistoryOnEveryday({
      paymentHistoryId: charge.paymentId,
      status: OmiseStatus.FAILED,
    })
  }

  async getCharge(userId: string, chargeId: string): Promise<PaymentCharge> {
    const charge = await this.prisma.liveCourseCharge.findUnique({
      where: {
        id: chargeId,
      },
      include: {
        booking: {
          include: {
            liveCourse: true,
          },
        },
        discountCode: true,
      },
    })
    if (!charge || charge.userId !== userId) {
      throw new BadInputError('marketplace', 'CHARGE_NOT_FOUND')
    }
    let status: PaymentChargeStatus
    switch (charge.status) {
      case PaymentStatus.PENDING: {
        const omiseCharge = await this.omiseService.retrieveCharge(charge.omiseChargeId)
        this.handleChargeStatusChanged(omiseCharge)
        status = {
          type: PaymentStatus.PENDING,
          additionalSteps: this.mapAdditionalSteps(omiseCharge, charge.booking.displayExpiresAt),
        }
        break
      }
      case PaymentStatus.FAILED: {
        status = {
          type: PaymentStatus.FAILED,
        }
        break
      }
      case PaymentStatus.SUCCESS: {
        status = await this.getSuccessChargeStatus(charge)
        break
      }
    }
    return {
      id: charge.id,
      bookingId: charge.bookingId,
      summary: {
        basePrice: charge.booking.basePrice,
        addon: charge.booking.addonName
          ? { name: charge.booking.addonName, price: charge.booking.addonPrice! }
          : null,
        shippingPrice: charge.booking.shippingPrice,
        amount: charge.amount,
      },
      status: status,
      liveCourse: {
        id: charge.booking.liveCourseId,
        name: charge.booking.liveCourse.name,
        type: charge.booking.liveCourse.type,
        courseCoverUrl: charge.booking.liveCourse.courseCoverUrl,
        courseStickerUrl: charge.booking.liveCourse.courseStickerUrl,
        startDate: charge.booking.liveCourse.startDate.toISOString(),
        endDate: charge.booking.liveCourse.endDate.toISOString(),
        lastEnrollmentDate: charge.booking.liveCourse.lastEnrollmentDate?.toISOString() ?? null,
      },
      discountCode: charge.discountCode
        ? {
            code: charge.discountCode.code,
            discount: charge.discountCode.discount,
          }
        : null,
    }
  }

  private async getSuccessChargeStatus(charge: LiveCourseCharge): Promise<PaymentChargeSuccess> {
    const booking = await this.prisma.liveCourseBooking.findUniqueOrThrow({
      where: {
        id: charge.bookingId,
      },
      include: {
        liveCourse: true,
        shippingAddress: true,
      },
    })
    let chargedCard: PaymentChargeSuccess['chargedCard'] = null
    if (charge.paymentMethod === PaymentMethod.CREDIT_CARD) {
      const omiseCharge = await this.omiseService.retrieveCharge(charge.omiseChargeId)
      if (omiseCharge.card) {
        chargedCard = this.mapOmiseCard(omiseCharge.card)
      }
    }
    return {
      type: PaymentStatus.SUCCESS,
      learningType: booking.learningType,
      onsiteAddress:
        booking.learningType === LearningType.ONSITE ? booking.liveCourse.onsiteAddress : null,
      addonName: booking.addonName,
      receiveMethod: booking.receiveMethod,
      shippingAddress:
        booking.receiveMethod === ReceiveMethod.SHIPPING ? booking.shippingAddress : null,
      pickupAddress:
        booking.receiveMethod === ReceiveMethod.PICKUP ? booking.liveCourse.pickupAddress : null,
      paymentMethod: charge.paymentMethod,
      chargedCard: chargedCard,
    }
  }

  private async createPaymentHistoryOnEveryday(
    payload: Omit<CreateOmisePaymentHistoryRequest, 'metadata'>,
    metadata: Record<string, unknown> = {}
  ): Promise<CreateOmisePaymentHistoryResponse> {
    return await this.grpcClient.createOmisePaymentHistory({
      ...payload,
      metadata: JSON.stringify({ ...metadata, createdBy: 'LUMINATE' }),
    })
  }

  private async updatePaymentHistoryOnEveryday(
    payload: UpdateOmisePaymentHistoryRequest
  ): Promise<void> {
    await this.grpcClient.updateOmisePaymentHistory(payload)
  }

  private mapAdditionalSteps(
    charge: Omise.Charges.ICharge,
    displayExpiresAt: Date
  ): PaymentChargeAdditionalSteps {
    if (charge.card) {
      return {
        type: PaymentMethod.CREDIT_CARD,
        authorizeUrl: charge.authorize_uri,
      }
    }
    if (!charge.source) {
      throw new Error('invalid charge')
    }
    switch (charge.source?.type) {
      case 'promptpay': {
        const expiresAt = min([displayExpiresAt, new Date(charge.expires_at)])
        return {
          type: PaymentMethod.PROMPTPAY,
          qrCodeUrl: charge.source.scannable_code!.image!.download_uri,
          expiresAt: expiresAt.toISOString(),
        }
      }
      case 'truemoney': {
        return {
          type: PaymentMethod.TRUEMONEY,
          authorizeUrl: charge.authorize_uri!,
        }
      }
      case 'mobile_banking_bay':
      case 'mobile_banking_kbank':
      case 'mobile_banking_scb': {
        return {
          type: PaymentMethod.MOBILE_BANKING,
          authorizeUrl: charge.authorize_uri!,
        }
      }
      default: {
        throw new Error('Unsupported source type')
      }
    }
  }

  async getCreditCards(userId: string) {
    const { customerId } = await this.luminateGatewayServiceClient.getOmiseCustomerId({
      userId,
    })
    const customer = await this.omiseService.retrieveCustomer(customerId)
    return {
      defaultCard: customer.default_card,
      cards: customer.cards.data.map((card) => this.mapOmiseCard(card)),
    }
  }

  async addCreditCard(userId: string, input: AddCardInput) {
    const { customerId } = await this.luminateGatewayServiceClient.getOmiseCustomerId({
      userId,
    })
    let cardId: string | null = null
    if (input.useAsDefault) {
      const token = await this.omiseService.retrieveToken(input.cardToken)
      cardId = token.card.id ?? null
    }
    let customer = await this.omiseService.addCard(customerId, input.cardToken)
    if (cardId) {
      customer = await this.omiseService.updateDefaultCard(customerId, cardId)
    }
    return {
      defaultCard: customer.default_card,
      cards: customer.cards.data.map((card) => this.mapOmiseCard(card)),
    }
  }

  private mapOmiseCard(card: Omise.Cards.ICard): CreditCard {
    return {
      id: card.id,
      bank: card.bank,
      lastDigits: card.last_digits,
      brand: card.brand,
      expirationMonth: card.expiration_month,
      expirationYear: card.expiration_year,
      name: card.name,
      securityCodeCheck: card.security_code_check,
    }
  }
}

container.registerSingleton<PaymentService, PaymentService>()
