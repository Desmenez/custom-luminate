import { container } from '@app/container'
import assert from 'assert'
import { addDays } from 'date-fns'

import {
  FundamentalCourse,
  LearningType,
  LiveCourse,
  LiveCourseType,
  LiveSession,
  MockExam,
  PaymentStatus,
  PrismaClient,
} from '@luminate/database'
import { BadInputError } from '@luminate/error'
import { PaymentLiveCourseFeature, PaymentPackageInfo } from '@luminate/rest'

export const BOOKING_EXPIRE_DISPLAY_MINS = 10
export const BOOKING_EXPIRE_MINS = BOOKING_EXPIRE_DISPLAY_MINS + 3

export class PaymentInfoService {
  constructor(private readonly prisma: PrismaClient) {}

  async getPackageInfo(liveCourseId: string): Promise<PaymentPackageInfo> {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: {
        id: liveCourseId,
      },
      include: {
        addons: true,
        fundamentalCourses: true,
        liveSessions: true,
        mockExams: true,
      },
    })
    if (!liveCourse) {
      throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
    }
    const baseFeatures = this.getBaseFeatures(liveCourse)
    const onlineFeatures =
      liveCourse.type === LiveCourseType.TAPE ? [] : [PaymentLiveCourseFeature.LIVE]
    const onlineOption = this.canBuyOnline(liveCourse)
      ? { price: liveCourse.onlinePrice!, features: [...onlineFeatures, ...baseFeatures] }
      : null
    const onsiteOption = this.canBuyOnsite(liveCourse)
      ? {
          price: liveCourse.onsitePrice!,
          features: [PaymentLiveCourseFeature.ONSITE, ...baseFeatures],
          availableSeats: await this.getOnsiteAvailableSeats(liveCourse),
          onsiteAddress: liveCourse.onsiteAddress,
        }
      : null
    const addonFeatures = this.getAddonFeatures(liveCourse)
    const addonOptions = liveCourse.addons.map((addon) => ({ ...addon, features: addonFeatures }))
    const shippingOption = liveCourse.hasShipping ? { price: liveCourse.shippingPrice } : null
    const pickupOption = liveCourse.hasPickUp ? { pickupAddress: liveCourse.pickupAddress } : null
    return {
      liveCourseId: liveCourse.id,
      type: liveCourse.type,
      name: liveCourse.name,
      courseCoverUrl: liveCourse.courseCoverUrl,
      courseStickerUrl: liveCourse.courseStickerUrl,
      startDate: liveCourse.startDate.toISOString(),
      endDate: liveCourse.endDate.toISOString(),
      registrationDeadline: this.getRegistrationDeadline(liveCourse).toISOString(),
      startingPrice: this.getStartingPrice(liveCourse),
      learningTypeOptions: {
        online: onlineOption,
        onsite: onsiteOption,
      },
      addonOptions,
      receiveMaterialOptions: {
        shipping: shippingOption,
        pickup: pickupOption,
      },
    }
  }

  async getOnsiteAvailableSeats(liveCourse: LiveCourse) {
    const reservedSeats = await this.prisma.liveCourseBooking.count({
      where: {
        liveCourseId: liveCourse.id,
        learningType: LearningType.ONSITE,
        OR: [
          {
            status: PaymentStatus.SUCCESS,
          },
          {
            status: PaymentStatus.PENDING,
            expiresAt: {
              gt: new Date(),
            },
          },
        ],
      },
    })
    return liveCourse.onsiteMaxSeats - reservedSeats
  }

  getBaseFeatures(
    liveCourse: LiveCourse & {
      fundamentalCourses: FundamentalCourse[]
      liveSessions: LiveSession[]
      mockExams: MockExam[]
    }
  ): PaymentLiveCourseFeature[] {
    const features: PaymentLiveCourseFeature[] = []
    if (
      liveCourse.fundamentalCourses.length > 0 &&
      !liveCourse.fundamentalCourseRequiresSubscription
    ) {
      features.push(PaymentLiveCourseFeature.FUNDAMENTAL)
    }
    if (liveCourse.enableRecordingPlayback && !liveCourse.recordingRequiresSubscription) {
      features.push(PaymentLiveCourseFeature.RECORDING)
    }
    if (
      liveCourse.liveSessions.some((liveSession) => !!liveSession.exerciseId) &&
      !liveCourse.exerciseRequiresSubscription
    ) {
      features.push(PaymentLiveCourseFeature.EXERCISE)
    }
    const hasExamTutorial =
      liveCourse.examTutorialIds.length > 0 && !liveCourse.examRequiresSubscription
    const hasExam = liveCourse.examIds.length > 0 && !liveCourse.examRequiresSubscription
    const hasMockExam = liveCourse.mockExams.length > 0 && !liveCourse.examRequiresSubscription
    if (hasExamTutorial || hasExam || hasMockExam) {
      features.push(PaymentLiveCourseFeature.EXAM)
    }
    if (liveCourse.hasQuiz) {
      features.push(PaymentLiveCourseFeature.QUIZ)
    }
    return features
  }

  getAddonFeatures(
    liveCourse: LiveCourse & {
      fundamentalCourses: FundamentalCourse[]
      liveSessions: LiveSession[]
      mockExams: MockExam[]
    }
  ): PaymentLiveCourseFeature[] {
    const features: PaymentLiveCourseFeature[] = []
    if (liveCourse.fundamentalCourses.length > 0) {
      features.push(PaymentLiveCourseFeature.FUNDAMENTAL)
    }
    if (liveCourse.enableRecordingPlayback) {
      features.push(PaymentLiveCourseFeature.RECORDING)
    }
    if (liveCourse.liveSessions.some((liveSession) => !!liveSession.exerciseId)) {
      features.push(PaymentLiveCourseFeature.EXERCISE)
    }
    const hasExamTutorial = liveCourse.examTutorialIds.length > 0
    const hasExam = liveCourse.examIds.length > 0
    const hasMockExam = liveCourse.mockExams.length > 0
    if (hasExamTutorial || hasExam || hasMockExam) {
      features.push(PaymentLiveCourseFeature.EXAM)
    }
    return features
  }

  getStartingPrice(liveCourse: LiveCourse): number {
    switch (liveCourse.type) {
      case LiveCourseType.LIVE:
        assert(liveCourse.onlinePrice !== null, 'onlinePrice must not be null')
        return liveCourse.onlinePrice
      case LiveCourseType.FUSION:
        assert(
          liveCourse.onlinePrice !== null || liveCourse.onsitePrice !== null,
          'onlinePrice or onsitePrice must not be null'
        )
        return Math.min(liveCourse.onlinePrice ?? Infinity, liveCourse.onsitePrice ?? Infinity)
      case LiveCourseType.TAPE:
        assert(liveCourse.onlinePrice !== null, 'onlinePrice must not be null')
        return liveCourse.onlinePrice
      case LiveCourseType.ONSITE:
        assert(liveCourse.onsitePrice !== null, 'onsitePrice must not be null')
        return liveCourse.onsitePrice
    }
  }

  canBuyOnline(liveCourse: LiveCourse): liveCourse is LiveCourse & { onlinePrice: number } {
    switch (liveCourse.type) {
      case LiveCourseType.LIVE:
      case LiveCourseType.TAPE:
        return true
      case LiveCourseType.FUSION:
        return liveCourse.onlinePrice !== null
      case LiveCourseType.ONSITE:
        return false
    }
  }

  canBuyOnsite(liveCourse: LiveCourse): liveCourse is LiveCourse & { onsitePrice: number } {
    switch (liveCourse.type) {
      case LiveCourseType.LIVE:
      case LiveCourseType.TAPE:
        return false
      case LiveCourseType.FUSION:
        return liveCourse.onsitePrice !== null
      case LiveCourseType.ONSITE:
        return true
    }
  }

  getBasePrice(liveCourse: LiveCourse, learningType: LearningType): number {
    switch (learningType) {
      case LearningType.ONLINE:
        assert(this.canBuyOnline(liveCourse), 'cannot buy online')
        return liveCourse.onlinePrice
      case LearningType.ONSITE:
        assert(this.canBuyOnsite(liveCourse), 'cannot buy onsite')
        return liveCourse.onsitePrice
    }
  }

  getRegistrationDeadline(liveCourse: LiveCourse): Date {
    switch (liveCourse.type) {
      case LiveCourseType.LIVE:
      case LiveCourseType.FUSION: {
        // TODO: when to disable on-site for fusion?
        return addDays(liveCourse.endDate, 7)
      }
      case LiveCourseType.TAPE: {
        // TODO: allow config from cms
        throw new Error('not implemented')
      }
      case LiveCourseType.ONSITE: {
        return liveCourse.endDate
      }
    }
  }
}

container.registerSingleton<PaymentInfoService, PaymentInfoService>()
