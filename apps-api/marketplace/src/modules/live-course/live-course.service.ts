import { deduplicateArray } from '@app/common/deduplicate-array'
import {
  liveCourseCoverPath,
  liveCourseHeroMobilePath,
  liveCourseHeroPath,
  liveCourseImageDescriptionPath,
  liveCourseStickerPath,
  liveCourseThumbnailPath,
  liveSessionSheetPath,
} from '@app/constants/bucket-path'
import { messagePattern } from '@app/constants/message-pattern'
import { container } from '@app/container'
import { extendFields, extendFieldsItem } from '@app/utils'
import { FileService } from '@softnetics/gcp-storage'
import assert from 'assert'
import { isPast, isSameDay } from 'date-fns'

import {
  LiveCourse,
  LiveCourseChatRoom,
  LiveCourseType,
  LiveCoursesOnUsers,
  LiveSession,
  PrismaClient,
} from '@luminate/database'
import { BadInputError } from '@luminate/error'
import {
  AddLiveCourseExamBody,
  AddLiveCourseExamTutorialBody,
  AddLiveCourseExerciseBody,
  AddLiveCourseFundamentalCourseBody,
  AddLiveCourseMockExamBody,
  AdminLiveCourseResponse,
  CreateLiveCourseChatRoomBody,
  CreateLiveCourseResponse,
  DeleteLiveCourseChatRoomBody,
  FindManyLiveCourseAdminQueryParams,
  FindManyLiveCourseQueryParams,
  GetTutorCoursesQueryParams,
  GetTutorCoursesResponse,
  LiveCourseDeleteArgs,
  LiveCourseInformationUpdateArgs,
  LiveSessionCreateInput,
  LiveSessionVideoResource,
  PaymentLiveCourseFeature,
  RemoveLiveCourseExamBody,
  RemoveLiveCourseExamTutorialBody,
  RemoveLiveCourseExerciseBody,
  RemoveLiveCourseFundamentalCourseBody,
  RemoveLiveCourseMockExamBody,
  TutorCourseDetail,
  UpdateLiveCourseChatRoomBody,
} from '@luminate/rest'
import { LiveCourseCreateArgs } from '@luminate/rest'

import { LiveCourseAdapter } from '.'
import { UserContext } from '../auth'
import { ExamRepository } from '../exam'
import { IExamTutorialRepository } from '../exam-tutorial'
import { ExerciseRepository } from '../exercise/exercise.repository'
import { FundamentalCourseRepository } from '../fundamental-course'
import { LiveSessionService } from '../live-session/live-session.service'
import { IMockExamRepository } from '../mock-exam'
import { PaymentInfoService } from '../payment'
import { StreamService } from '../stream'
import { ISubjectRepository } from '../subject'
import { ITutorRepository } from '../tutor'
import { ImageDescriptionService } from './image-description.service'

export type LiveSessionCreateInputWithStreamKey = Omit<LiveSessionCreateInput, 'liveCourseId'> & {
  streamInputId: string
  streamKey: string
}

export type LiveCourseCreateArgsWithStreamKey = LiveCourseCreateArgs & {
  liveSessions: LiveSessionCreateInputWithStreamKey[]
}

export type MyLiveCourse = LiveCourse & {
  isMyCourse: true
  recentLiveSessionId: string | null
  recentLiveSessionTimestampSeconds: number | null
  recentLiveSessionVideoLengthSeconds: number | null
}

export type NotMyLiveCourse = LiveCourse & {
  isMyCourse: false
}

function isMyLiveCourse(liveCourse: MyLiveCourse | NotMyLiveCourse): liveCourse is MyLiveCourse {
  return liveCourse.isMyCourse
}

function isNotMyLiveCourse(
  liveCourse: MyLiveCourse | NotMyLiveCourse
): liveCourse is NotMyLiveCourse {
  return !liveCourse.isMyCourse
}

export class LiveCourseService {
  constructor(
    private tutorRepository: ITutorRepository,
    private subjectRepository: ISubjectRepository,
    private liveSessionService: LiveSessionService,
    private liveCourseAdapter: LiveCourseAdapter,
    private exerciseRepository: ExerciseRepository,
    private fileService: FileService,
    private prisma: PrismaClient,
    private streamService: StreamService,
    private paymentInfoService: PaymentInfoService,
    private fundamentalCourseRepository: FundamentalCourseRepository,
    private examRepository: ExamRepository,
    private examTutorialRepository: IExamTutorialRepository,
    private mockExamRepository: IMockExamRepository,
    private imageDescriptionService: ImageDescriptionService
  ) {}

  #extendLiveCourseFieldResolvers = [
    async (_liveCourse: MyLiveCourse | NotMyLiveCourse) => ({
      // TODO: uncomment when we can connect to everyday
      // tutor: await this.tutorRepository.findById(liveCourse.tutorId),
      //
      // use mock data for now
      tutor: {
        tutorIconUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144567104289382410/tutor-icon.png?width=100&height=96',
        displayName: 'พี่เต้ Chemistae',
      },
    }),
    async (liveCourse: MyLiveCourse | NotMyLiveCourse) => ({
      subject: await this.subjectRepository.findById(liveCourse.subjectId),
    }),
  ] as const

  #extendMyCourseOnlyFieldResolvers = [
    async (liveCourse: MyLiveCourse) => ({
      recentLiveSessionName: liveCourse.recentLiveSessionId
        ? (
            await this.prisma.liveSession.findUnique({
              where: { id: liveCourse.recentLiveSessionId },
            })
          )?.name ?? null
        : null,
    }),
    async (liveCourse: MyLiveCourse) => ({
      upcomingSession: await this.liveSessionService.getUpcomingSessionByLiveCourseId(
        liveCourse.id
      ),
    }),
  ] as const

  #mockUploadDetail = {
    url: 'https://example.com/mock-upload-url',
    token: 'some token',
  }

  #generateThumbnailUploadUrl = async (liveCourse: Pick<LiveCourse, 'id'>) => {
    const { url, token } = await this.fileService.getPublicUploadFileUrl(
      liveCourseThumbnailPath(liveCourse.id),
      messagePattern.LiveCourse.ON_UPLOAD_THUMBNAIL_COMPLETE,
      { id: liveCourse.id }
    )
    return { url, token }
  }

  #generateCoverUploadUrl = async (liveCourse: Pick<LiveCourse, 'id'>) => {
    const { url, token } = await this.fileService.getPublicUploadFileUrl(
      liveCourseCoverPath(liveCourse.id),
      messagePattern.LiveCourse.ON_UPLOAD_COVER_COMPLETE,
      { id: liveCourse.id }
    )
    return { url, token }
  }

  #generateStickerUploadUrl = async (liveCourse: Pick<LiveCourse, 'id'>) => {
    const { url, token } = await this.fileService.getPublicUploadFileUrl(
      liveCourseStickerPath(liveCourse.id),
      messagePattern.LiveCourse.ON_UPLOAD_STICKER_COMPLETE,
      { id: liveCourse.id }
    )
    return { url, token }
  }

  #generateHeroUploadUrl = async (liveCourse: Pick<LiveCourse, 'id'>) => {
    const { url, token } = await this.fileService.getPublicUploadFileUrl(
      liveCourseHeroPath(liveCourse.id),
      messagePattern.LiveCourse.ON_UPLOAD_HERO_COMPLETE,
      { id: liveCourse.id }
    )
    return { url, token }
  }

  #generateHeroMobileUploadUrl = async (liveCourse: Pick<LiveCourse, 'id'>) => {
    const { url, token } = await this.fileService.getPublicUploadFileUrl(
      liveCourseHeroMobilePath(liveCourse.id),
      messagePattern.LiveCourse.ON_UPLOAD_HERO_MOBILE_COMPLETE,
      { id: liveCourse.id }
    )
    return { url, token }
  }

  #generateSheetUploadUrl = async (liveSession: Pick<LiveSession, 'id'>) => {
    const { url, token } = await this.fileService.getPrivateUploadFileUrl(
      liveSessionSheetPath(liveSession.id),
      messagePattern.LiveSession.ON_UPLOAD_SHEET_COMPLETE,
      { id: liveSession.id }
    )
    return { url, token }
  }

  #generateImageDescriptionUrl = async (liveCourseImageDescriptionId: string) => {
    const { url, token } = await this.fileService.getPublicUploadFileUrl(
      liveCourseImageDescriptionPath(liveCourseImageDescriptionId),
      messagePattern.LiveCourseImageDescription.ON_UPLOAD_IMAGE_COMPLETE,
      { id: liveCourseImageDescriptionId }
    )
    return { url, token }
  }

  #extendLiveCoursesFields = async (liveCourses: (MyLiveCourse | NotMyLiveCourse)[]) => {
    const notMyCourses = liveCourses.filter<NotMyLiveCourse>(isNotMyLiveCourse)
    const myCourses = liveCourses.filter<MyLiveCourse>(isMyLiveCourse)

    const extendedNotMyCourses = await this.#extendNotMyLiveCoursesFields(notMyCourses)
    const extendedMyCourses = await this.#extendMyLiveCoursesFields(myCourses)

    let notMyCourseIndex = 0
    let myCourseIndex = 0
    return liveCourses.map((liveCourse) => {
      if (isMyLiveCourse(liveCourse)) {
        return extendedMyCourses[myCourseIndex++]
      }
      return extendedNotMyCourses[notMyCourseIndex++]
    })
  }

  #extendMyLiveCoursesFields = async (liveCourses: MyLiveCourse[]) => {
    return extendFields(
      liveCourses,
      ...this.#extendLiveCourseFieldResolvers,
      ...this.#extendMyCourseOnlyFieldResolvers
    )
  }

  #extendNotMyLiveCoursesFields = async (liveCourses: NotMyLiveCourse[]) => {
    return extendFields(liveCourses, ...this.#extendLiveCourseFieldResolvers)
  }

  getLiveCourseById = async (id: string, userContext: UserContext | null) => {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: {
        id,
        OR: [{ lastEnrollmentDate: { gte: new Date() } }, { lastEnrollmentDate: null }],
      },
      include: {
        suggestedNextCourses: true,
        suggestedPrerequisiteCourses: true,
        fundamentalCourses: true,
        liveSessions: true,
        chatRooms: true,
        liveCourseImageDescription: true,
        mockExams: true,
      },
    })
    if (!liveCourse) return null

    const liveCourseOnUser = userContext?.id
      ? await this.prisma.liveCoursesOnUsers.findUnique({
          where: { userId_liveCourseId: { userId: userContext.id, liveCourseId: id } },
          include: {
            shippingAddress: true,
          },
        })
      : null
    if (
      liveCourse.lastEnrollmentDate &&
      isPast(liveCourse.lastEnrollmentDate) &&
      liveCourseOnUser === null
    ) {
      // after last enrollment date the course will only be visible to enrolled users
      return null
    }

    const [tutor] = await this.tutorRepository.findByIds([liveCourse.tutorId])
    const [subject] = await this.subjectRepository.findByIds([liveCourse.subjectId])
    const upcomingSession = await this.liveSessionService.getUpcomingSessionByLiveCourseId(
      liveCourse.id
    )
    const baseFeatures = this.paymentInfoService.getBaseFeatures(liveCourse)
    const learningTypeFeaturesMapping = {
      [LiveCourseType.LIVE]: [PaymentLiveCourseFeature.LIVE],
      [LiveCourseType.FUSION]: (() => {
        switch (liveCourseOnUser?.learningType) {
          case 'ONLINE':
            return [PaymentLiveCourseFeature.LIVE]
          case 'ONSITE':
            return [PaymentLiveCourseFeature.ONSITE]
          default:
            return [PaymentLiveCourseFeature.LIVE, PaymentLiveCourseFeature.ONSITE]
        }
      })(),
      [LiveCourseType.TAPE]: [PaymentLiveCourseFeature.ONLINE],
      [LiveCourseType.ONSITE]: [PaymentLiveCourseFeature.ONSITE],
    }
    const addonFeatures =
      !liveCourseOnUser || userContext?.identity === 'premium'
        ? this.paymentInfoService.getAddonFeatures(liveCourse)
        : []
    const features = deduplicateArray([
      ...learningTypeFeaturesMapping[liveCourse.type],
      ...baseFeatures,
      ...addonFeatures,
    ])
    const suggestedNextCourses = await this.#extendNotMyLiveCoursesFields(
      liveCourse.suggestedNextCourses.map((liveCourse) => ({
        ...liveCourse,
        isMyCourse: false as const,
      }))
    )
    const suggestedPrerequisiteCourses = await this.#extendNotMyLiveCoursesFields(
      liveCourse.suggestedPrerequisiteCourses.map((liveCourse) => ({
        ...liveCourse,
        isMyCourse: false as const,
      }))
    )
    const fundamentalCourses = await this.fundamentalCourseRepository.extendFields(
      liveCourse.fundamentalCourses
    )
    const exams = await this.examRepository.findByIds(liveCourse.examIds)
    const examTutorials = await this.examTutorialRepository.findByIds(liveCourse.examTutorialIds)
    const mockExams = await this.mockExamRepository.extendFields(liveCourse.mockExams)
    const liveSessionsWithExerciseAndTimestamp = await Promise.all(
      liveCourse.liveSessions.map(async (liveSession) => {
        const exercise = liveSession.exerciseId
          ? (await this.exerciseRepository.findByIds([liveSession.exerciseId]))[0]
          : null
        let timestampSeconds: number | null = null
        let videoLengthSeconds: number | null = null
        if (userContext?.id) {
          const studentsOnLiveSessions = await this.prisma.studentOnLiveSession.findUnique({
            where: {
              studentId_liveSessionId: {
                studentId: userContext?.id ?? '',
                liveSessionId: liveSession.id,
              },
            },
          })
          timestampSeconds = studentsOnLiveSessions?.timestampSeconds ?? null
          videoLengthSeconds = studentsOnLiveSessions?.videoLengthSeconds ?? null
        }
        return {
          ...liveSession,
          startTime: liveSession.startTime.toISOString(),
          endTime: liveSession.endTime.toISOString(),
          exercise,
          timestampSeconds,
          videoLengthSeconds,
        }
      })
    )
    const liveTrialSession = await this.prisma.liveCourseTrialOnUser.findUnique({
      where: {
        userId_liveCourseId: {
          userId: userContext?.id ?? '',
          liveCourseId: liveCourse.id,
        },
      },
    })
    return {
      ...liveCourse,
      expiresAt: liveCourse.expiresAt?.toISOString() ?? null,
      startDate: liveCourse.startDate.toISOString(),
      endDate: liveCourse.endDate.toISOString(),
      lastEnrollmentDate: liveCourse.lastEnrollmentDate?.toISOString() ?? null,
      liveCourseOnUser,
      suggestedNextCourses,
      suggestedPrerequisiteCourses,
      upcomingSession,
      tutor,
      subject,
      features,
      fundamentalCourses,
      exams,
      examTutorials,
      mockExams,
      liveSessions: liveSessionsWithExerciseAndTimestamp,
      liveTrialSessionId: liveTrialSession?.trialSessionId ?? null,
    }
  }

  getLiveCourses = async (args: FindManyLiveCourseQueryParams, userId: string | undefined) => {
    const liveCourses = await this.prisma.liveCourse.findMany(
      this.liveCourseAdapter.findManyArgs(args)
    )
    let myCoursesIdsMap: Map<string, LiveCoursesOnUsers>
    if (userId) {
      const liveCoursesOnUsers = await this.prisma.liveCoursesOnUsers.findMany({
        where: { userId },
        include: {
          liveCourse: true,
        },
      })
      myCoursesIdsMap = new Map<string, LiveCoursesOnUsers>(
        liveCoursesOnUsers.map((liveCoursesOnUser) => [
          liveCoursesOnUser.liveCourseId,
          liveCoursesOnUser,
        ])
      )
    }
    const extendedLiveCourses = liveCourses.map((liveCourse) => {
      if (userId && myCoursesIdsMap.has(liveCourse.id)) {
        const {
          recentLiveSessionId,
          recentLiveSessionTimestampSeconds,
          recentLiveSessionVideoLengthSeconds,
          updatedAt,
        } = myCoursesIdsMap.get(liveCourse.id)!
        return {
          ...liveCourse,
          isMyCourse: true as const,
          recentLiveSessionId,
          recentLiveSessionTimestampSeconds,
          recentLiveSessionVideoLengthSeconds,
          updatedAt,
        }
      }
      return {
        ...liveCourse,
        isMyCourse: false as const,
      }
    })
    return this.#extendLiveCoursesFields(extendedLiveCourses)
  }

  createLiveCourse = async (args: LiveCourseCreateArgs): Promise<CreateLiveCourseResponse> => {
    const { liveSessions } = args
    this.assertLiveCoursePrice(args)
    const argsWithStreamKey: LiveCourseCreateArgsWithStreamKey = {
      ...args,
      liveSessions: await Promise.all(
        liveSessions.map<Promise<LiveSessionCreateInputWithStreamKey>>(async (liveSession) => {
          const v = await this.streamService.createLiveStream(liveSession.name)
          return {
            ...liveSession,
            streamKey: v.rtmps.streamKey,
            streamInputId: v.uid,
          }
        })
      ),
    }
    const liveCourse = await this.prisma.liveCourse.create(
      this.liveCourseAdapter.createLiveCourseArgs(argsWithStreamKey)
    )
    return extendFieldsItem(
      liveCourse,
      async (liveCourse) => ({
        courseThumbnailUploadUrl: await this.#generateThumbnailUploadUrl(liveCourse),
      }),
      async (liveCourse) => ({
        courseCoverUploadUrl: await this.#generateCoverUploadUrl(liveCourse),
      }),
      async (liveCourse) => ({
        courseSticketUploadUrl: await this.#generateStickerUploadUrl(liveCourse),
      }),
      async (liveCourse) => ({
        courseHeroUploadUrl: await this.#generateHeroUploadUrl(liveCourse),
      }),
      async (liveCourse) => ({
        courseHeroMobileUploadUrl: await this.#generateHeroMobileUploadUrl(liveCourse),
      }),
      async (liveCourse) => ({
        liveSessions: await Promise.all(
          liveCourse.liveSessions.map(async (liveSession) => ({
            id: liveSession.id,
            sheetUploadUrl: await this.#generateSheetUploadUrl(liveSession),
          }))
        ),
      }),
      async (liveCourse) => ({
        liveCourseImageDescription: await Promise.all(
          liveCourse.liveCourseImageDescription.map(async (imageDescription) => ({
            id: imageDescription.id,
            order: imageDescription.order,
            imageUploadUrl: await this.#generateImageDescriptionUrl(imageDescription.id),
          }))
        ),
      })
    )
  }

  private assertLiveCoursePrice(
    liveCourse: Pick<LiveCourseCreateArgs, 'type' | 'onlinePrice' | 'onsitePrice'>
  ) {
    const { type, onlinePrice, onsitePrice } = liveCourse
    switch (type) {
      case LiveCourseType.LIVE: {
        assert(typeof onlinePrice === 'number', 'onlinePrice must be a number')
        return
      }
      case LiveCourseType.FUSION: {
        assert(
          typeof onlinePrice === 'number' || typeof onsitePrice === 'number',
          'onlinePrice or onsitePrice must be a number'
        )
        return
      }
      case LiveCourseType.TAPE: {
        assert(typeof onsitePrice === 'number', 'onsitePrice must be a number')
        return
      }
      case LiveCourseType.ONSITE: {
        assert(typeof onsitePrice === 'number', 'onsitePrice must be a number')
        return
      }
    }
  }

  updateLiveCourse = (args: LiveCourseInformationUpdateArgs) => {
    return this.prisma.liveCourse.update(this.liveCourseAdapter.updateInformationArgs(args))
  }

  deleteLiveCourse = async (args: LiveCourseDeleteArgs) => {
    const registeredStudents = await this.prisma.liveCoursesOnUsers.findMany({
      where: { liveCourseId: args.id },
    })
    if (registeredStudents.length > 0) {
      throw new Error('Cannot delete live course that has registered students')
    }
    return this.prisma.liveCourse.delete(this.liveCourseAdapter.deleteLiveCourseArgs(args))
  }

  async isUserJoinedLiveCourse(userId: string, liveCourseId: string): Promise<boolean> {
    const res = await this.prisma.liveCoursesOnUsers.findUnique({
      where: { userId_liveCourseId: { userId, liveCourseId } },
    })
    return !!res
  }

  async redeemTrialLiveCourse(userId: string, liveSessionId: string): Promise<LiveSession> {
    try {
      const liveCourse = await this.prisma.liveSession
        .findUnique({ where: { id: liveSessionId } })
        .liveCourse()
      if (!liveCourse) throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
      const trialSession = await this.prisma.liveCourseTrialOnUser
        .create({
          data: {
            trialSessionId: liveSessionId,
            liveCourseId: liveCourse.id,
            userId,
          },
        })
        .trialSession()
      if (!trialSession) throw new BadInputError('marketplace', 'INVALID_TRIAL_LIVE_COURSE')
      return trialSession
    } catch (error) {
      throw new BadInputError('marketplace', 'INVALID_TRIAL_LIVE_COURSE')
    }
  }

  addFundamentalCourse(args: AddLiveCourseFundamentalCourseBody): Promise<LiveCourse> {
    return this.prisma.liveCourse.update(this.liveCourseAdapter.addFundamentalCourseArgs(args))
  }

  async removeFundamentalCourse(args: RemoveLiveCourseFundamentalCourseBody) {
    return this.prisma.fundamentalCourse.delete({
      where: {
        liveCourseId: args.liveCourseId,
        id: args.fundamentalCourseId,
      },
    })
  }

  addExercise(args: AddLiveCourseExerciseBody): Promise<LiveCourse> {
    return this.prisma.liveCourse.update(this.liveCourseAdapter.addExerciseArgs(args))
  }

  async removeExercise(args: RemoveLiveCourseExerciseBody): Promise<LiveCourse> {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: { id: args.liveCourseId },
    })
    if (!liveCourse) throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
    const exerciseIds = liveCourse.exerciseIds.filter((id) => id !== args.exerciseId)
    return this.prisma.liveCourse.update({
      where: { id: args.liveCourseId },
      data: { exerciseIds },
    })
  }

  addExam(args: AddLiveCourseExamBody): Promise<LiveCourse> {
    return this.prisma.liveCourse.update(this.liveCourseAdapter.addExamArgs(args))
  }

  async removeExam(args: RemoveLiveCourseExamBody): Promise<LiveCourse> {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: { id: args.liveCourseId },
    })
    if (!liveCourse) throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
    const examIds = liveCourse.examIds.filter((id) => id !== args.examId)
    return this.prisma.liveCourse.update({
      where: { id: args.liveCourseId },
      data: { examIds },
    })
  }

  addExamTutorial(args: AddLiveCourseExamTutorialBody): Promise<LiveCourse> {
    return this.prisma.liveCourse.update(this.liveCourseAdapter.addExamTutorialArgs(args))
  }

  async removeExamTutorial(args: RemoveLiveCourseExamTutorialBody): Promise<LiveCourse> {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: { id: args.liveCourseId },
    })
    if (!liveCourse) throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
    const examTutorialIds = liveCourse.examTutorialIds.filter((id) => id !== args.examTutorialId)
    return this.prisma.liveCourse.update({
      where: { id: args.liveCourseId },
      data: { examTutorialIds },
    })
  }

  addMockExam(args: AddLiveCourseMockExamBody): Promise<LiveCourse> {
    return this.prisma.liveCourse.update(this.liveCourseAdapter.addMockExamArgs(args))
  }

  async removeMockExam(args: RemoveLiveCourseMockExamBody) {
    this.prisma.mockExam.deleteMany({
      where: {
        mockExamGroupId: args.mockExamId,
        liveCourseId: args.liveCourseId,
      },
    })
  }

  createChatRoom(args: CreateLiveCourseChatRoomBody): Promise<LiveCourseChatRoom[]> {
    return this.prisma.liveCourse
      .update(this.liveCourseAdapter.createChatRoomArgs(args))
      .chatRooms()
  }

  updateChatRoom(args: UpdateLiveCourseChatRoomBody): Promise<LiveCourseChatRoom[]> {
    return this.prisma.liveCourse
      .update(this.liveCourseAdapter.updateChatRoomArgs(args))
      .chatRooms()
  }

  deleteChatRoom(args: DeleteLiveCourseChatRoomBody): Promise<LiveCourseChatRoom[]> {
    return this.prisma.liveCourse
      .update(this.liveCourseAdapter.deleteChatRoomArgs(args))
      .chatRooms()
  }

  async getLiveCourseForVideoResource(
    liveCourseId: string
  ): Promise<LiveSessionVideoResource['liveCourse']> {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: { id: liveCourseId },
    })
    if (!liveCourse) throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
    return {
      name: liveCourse.name,
      exercisesCourses: await this.exerciseRepository.findByIds(liveCourse.exerciseIds),
      tutorId: liveCourse.tutorId,
    }
  }

  async getSuggestedLiveCourses(userId: string | undefined) {
    let liveCourses = await this.prisma.liveCourse.findMany({
      where: {
        isRecommended: true,
        lastEnrollmentDate: {
          gte: new Date(),
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    if (userId) {
      const userCourses = await this.prisma.liveCoursesOnUsers.findMany({
        where: { userId },
      })
      const userCourseIdsSet = new Set(userCourses.map(({ liveCourseId }) => liveCourseId))
      liveCourses = liveCourses.filter(({ id }) => !userCourseIdsSet.has(id))
    }
    return await this.#extendNotMyLiveCoursesFields(
      liveCourses.map((liveCourse) => ({ ...liveCourse, isMyCourse: false }))
    )
  }

  async getMyCourses(userId: string, take?: number) {
    const liveCoursesOnUsers = await this.prisma.liveCoursesOnUsers.findMany({
      where: {
        userId,
        OR: [
          {
            expiresAt: { gte: new Date() },
          },
          {
            expiresAt: null,
          },
        ],
      },
      take,
      include: {
        liveCourse: true,
      },
    })
    const myCourses = liveCoursesOnUsers.map(
      ({
        liveCourse,
        recentLiveSessionId,
        recentLiveSessionTimestampSeconds,
        recentLiveSessionVideoLengthSeconds,
        updatedAt,
      }) => ({
        ...liveCourse,
        isMyCourse: true as const,
        recentLiveSessionId,
        recentLiveSessionTimestampSeconds,
        recentLiveSessionVideoLengthSeconds,
        updatedAt,
      })
    )
    const myCoursesWithFields = await this.#extendMyLiveCoursesFields(myCourses)
    return myCoursesWithFields.sort((a, b) => {
      // sort by living first
      if (a.upcomingSession?.isLiving && !b.upcomingSession?.isLiving) return -1
      if (!a.upcomingSession?.isLiving && b.upcomingSession?.isLiving) return 1
      // then liveCourse with recentLiveSessionTimestampSeconds first
      if (a.recentLiveSessionTimestampSeconds && !b.recentLiveSessionTimestampSeconds) return -1
      if (!a.recentLiveSessionTimestampSeconds && b.recentLiveSessionTimestampSeconds) return 1
      // then sort by enrolledAt
      return b.updatedAt.getTime() - a.updatedAt.getTime()
    })
  }

  async getMyExpiredCourses(userId: string) {
    const liveCoursesOnUser = await this.prisma.liveCoursesOnUsers.findMany({
      where: { userId, expiresAt: { lt: new Date() } },
      include: {
        liveCourse: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return liveCoursesOnUser.map(({ liveCourse }) => liveCourse)
  }

  getAllLiveCourses = async (args: FindManyLiveCourseAdminQueryParams) => {
    const [liveCourses, count] = await Promise.all([
      this.prisma.liveCourse.findMany({
        ...args,
        where: args?.where
          ? {
              name: args.where.name
                ? { contains: args.where.name, mode: 'insensitive' }
                : undefined,
              type: args.where.liveCourseType,
              isRecommended: args.where.isRecommended,
            }
          : undefined,
      }),
      this.prisma.liveCourse.count({
        where: args?.where
          ? {
              name: args.where.name
                ? { contains: args.where.name, mode: 'insensitive' }
                : undefined,
              type: args.where.liveCourseType,
              isRecommended: args.where.isRecommended,
            }
          : undefined,
      }),
    ])
    return {
      count,
      liveCourses: await extendFields(liveCourses, async (course) => ({
        tutor: await this.tutorRepository.findById(course.tutorId),
      })),
    }
  }

  async getTutorCourses(
    query: GetTutorCoursesQueryParams,
    tutorId: string
  ): Promise<GetTutorCoursesResponse> {
    const tutorCourses = await this.prisma.liveCourse.findMany({
      where: {
        tutorId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: query.take,
      skip: query.skip,
    })
    const total = await this.prisma.liveCourse.count({
      where: {
        tutorId,
      },
    })
    const tutorCoursesWithFields = await Promise.all(
      tutorCourses.map(async (tutorCourse) => {
        const enrolledStudent = await this.prisma.liveCoursesOnUsers.findMany({
          where: {
            liveCourseId: tutorCourse.id,
          },
          select: {
            createdAt: true,
          },
        })
        const enrolled = enrolledStudent.length
        const dailyEnrolled = enrolledStudent.filter(({ createdAt }) =>
          isSameDay(createdAt, new Date())
        ).length
        const dailyChangePercent = (() => {
          if (dailyEnrolled === 0) return 0
          if (enrolled === 0) return 100
          return (dailyEnrolled / enrolled) * 100
        })()
        return {
          ...tutorCourse,
          isActive:
            tutorCourse.isActive &&
            (!tutorCourse.lastEnrollmentDate ||
              tutorCourse.lastEnrollmentDate.getTime() > Date.now()),
          createdAt: tutorCourse.createdAt.toISOString(),
          startDate: tutorCourse.startDate.toISOString(),
          endDate: tutorCourse.endDate.toISOString(),
          enrolled,
          dailyChangePercent,
        }
      })
    )
    return {
      total,
      courses: tutorCoursesWithFields,
    }
  }
  async getTutorCourseDetail(tutorId: string, courseId: string): Promise<TutorCourseDetail | null> {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: {
        id: courseId,
        tutorId,
      },
      include: {
        liveSessions: true,
      },
    })
    if (liveCourse === null) return null
    const mappedSessions = liveCourse.liveSessions.map((session) => ({
      ...session,
      startTime: session.startTime.toISOString(),
      endTime: session.endTime.toISOString(),
    }))
    const sessionsWithVideoDuration = await extendFields(mappedSessions, async (session) => {
      if (session.videoId === null) return { videoDuration: null }
      const videoDetail = await this.streamService.getVideoDetail(session.videoId)
      return { videoDuration: videoDetail.duration }
    })
    return {
      ...liveCourse,
      startDate: liveCourse.startDate.toISOString(),
      endDate: liveCourse.endDate.toISOString(),
      liveSessions: sessionsWithVideoDuration,
    }
  }

  getAdminLiveCourseDetail = async (id: string) => {
    const liveCourse = await this.prisma.liveCourse.findUnique({
      where: {
        id,
      },
      include: {
        liveSessions: true,
        liveCourseImageDescription: true,
        chatRooms: true,
        addons: true,
        fundamentalCourses: true,
        mockExams: true,
        suggestedNextCourses: true,
        suggestedPrerequisiteCourses: true,
      },
    })
    if (!liveCourse) {
      throw new BadInputError('marketplace', 'LIVE_COURSE_NOT_FOUND')
    }
    const [
      courseThumbnailUploadUrl,
      courseCoverUploadUrl,
      courseStickerUploadUrl,
      courseHeroUploadUrl,
      courseHeroMobileUploadUrl,
      tutor,
      subject,
      fundamentalCourses,
      exams,
      examTutorials,
      mockExams,
      imageDescriptions,
      liveSessionWithUploadUrl,
    ] = await Promise.all([
      this.#generateThumbnailUploadUrl(liveCourse),
      this.#generateCoverUploadUrl(liveCourse),
      this.#generateStickerUploadUrl(liveCourse),
      this.#generateHeroUploadUrl(liveCourse),
      this.#generateHeroMobileUploadUrl(liveCourse),
      this.tutorRepository.findById(liveCourse.tutorId),
      this.subjectRepository.findById(liveCourse.subjectId),
      this.fundamentalCourseRepository.extendFields(liveCourse.fundamentalCourses),
      this.examRepository.findByIds(liveCourse.examIds),
      this.examTutorialRepository.findByIds(liveCourse.examTutorialIds),
      this.mockExamRepository.extendFields(liveCourse.mockExams),
      Promise.all(
        liveCourse.liveCourseImageDescription.map(async (imageDescription) => ({
          ...imageDescription,
          imageUploadUrl: await this.#generateImageDescriptionUrl(imageDescription.id),
        }))
      ),
      Promise.all(
        liveCourse.liveSessions.map(async (liveSession) => ({
          ...liveSession,
          sheetUploadUrl: await this.#generateSheetUploadUrl(liveSession),
        }))
      ),
    ])

    return {
      ...liveCourse,
      liveSessions: liveSessionWithUploadUrl,
      courseThumbnailUploadUrl,
      courseCoverUploadUrl,
      courseStickerUploadUrl,
      courseHeroUploadUrl,
      courseHeroMobileUploadUrl,
      tutor,
      subject,
      fundamentalCourses,
      exams,
      examTutorials,
      mockExams,
      imageDescriptions,
    } satisfies AdminLiveCourseResponse
  }
  onUploadThumbnailComplete = async (id: string) => {
    const bucketPath = liveCourseThumbnailPath(id)
    await this.fileService.ensurePublicFile(bucketPath)
    return this.prisma.liveCourse.update({
      where: { id },
      data: { courseThumbnailUrl: await this.fileService.getPublicUrl(bucketPath) },
    })
  }

  onUploadCoverComplete = async (id: string) => {
    const bucketPath = liveCourseCoverPath(id)
    await this.fileService.ensurePublicFile(bucketPath)
    return this.prisma.liveCourse.update({
      where: { id },
      data: { courseCoverUrl: await this.fileService.getPublicUrl(bucketPath) },
    })
  }

  onUploadStickerComplete = async (id: string) => {
    const bucketPath = liveCourseStickerPath(id)
    await this.fileService.ensurePublicFile(bucketPath)
    return this.prisma.liveCourse.update({
      where: { id },
      data: { courseStickerUrl: await this.fileService.getPublicUrl(bucketPath) },
    })
  }

  onUploadHeroComplete = async (id: string) => {
    const bucketPath = liveCourseHeroPath(id)
    await this.fileService.ensurePublicFile(bucketPath)
    return this.prisma.liveCourse.update({
      where: { id },
      data: { courseHeroUrl: await this.fileService.getPublicUrl(bucketPath) },
    })
  }

  onUploadHeroMobileComplete = async (id: string) => {
    const bucketPath = liveCourseHeroMobilePath(id)
    await this.fileService.ensurePublicFile(bucketPath)
    return this.prisma.liveCourse.update({
      where: { id },
      data: { courseHeroMobileUrl: await this.fileService.getPublicUrl(bucketPath) },
    })
  }

  onUploadSheetComplete = async (id: string) => {
    const bucketPath = liveSessionSheetPath(id)
    await this.fileService.ensurePrivateFile(bucketPath)
    return this.prisma.liveSession.update({
      where: { id },
      data: { sheetUrl: await this.fileService.getPrivateUrl(bucketPath) },
    })
  }
}

container.registerSingleton<LiveCourseService>()
