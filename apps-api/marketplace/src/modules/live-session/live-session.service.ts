import { ApplicationLogger } from '@app/common/logger'
import { container } from '@app/container'
import { extendFields } from '@app/utils'
import { durationLimitCalc } from '@app/utils/duration-limit-calc'
import { RedisService } from '@softnetics/redis'
import DataLoader from 'dataloader'
import { addHours, isFuture } from 'date-fns'

import {
  LiveCoursePlaybackLimitType,
  LiveSession,
  LiveSessionQuiz,
  PrismaClient,
  StudentOnLiveSession,
} from '@luminate/database'
import { AuthorizationError, BadInputError } from '@luminate/error'
import {
  CloudflareLiveStreamLifeCycle,
  CmsQuizScoreUserScore,
  LiveSessionCreateInput,
  LiveSessionFindManyArgs,
  LiveSessionStatus,
  LiveSessionUpdateInput,
  LivingSession,
  UpcomingSession,
} from '@luminate/rest'

import { LiveSessionAdapter } from '.'
import { UserContext } from '../auth'
import { LiveCourseService } from '../live-course'
import { StreamService } from '../stream'
import { ITutorRepository } from '../tutor'
import { UserRepository } from '../user'
import { DurationLimit } from './types/limit.type'

export class LiveSessionService {
  constructor(
    private readonly adapter: LiveSessionAdapter,
    private readonly userRepository: UserRepository,
    private readonly tutorRepository: ITutorRepository,
    private readonly liveCourseService: LiveCourseService,
    private readonly streamService: StreamService,
    private readonly redisService: RedisService,
    private readonly logger: ApplicationLogger,
    private readonly prisma: PrismaClient
  ) {}

  async findUnique(liveSessionId: string) {
    return await this.prisma.liveSession.findUnique({
      where: { id: liveSessionId },
      include: {
        liveCourse: {
          select: {
            name: true,
            type: true,
            expiresAt: true,
          },
        },
      },
    })
  }

  async isTrialSession(userId: string, sessionId: string, liveCourseId: string): Promise<boolean> {
    const trialSession = await this.prisma.liveCourseTrialOnUser.findUnique({
      where: {
        userId_liveCourseId_trialSessionId: {
          liveCourseId,
          userId,
          trialSessionId: sessionId,
        },
      },
    })
    return !!trialSession
  }

  async findMany(args: LiveSessionFindManyArgs): Promise<LiveSession[]> {
    return await this.prisma.liveSession.findMany(this.adapter.findManyArgs(args))
  }

  async updatePlaybackTime(userId: string, liveSessionId: string): Promise<number | null> {
    const updatedPlaybackTime = await this.incrementPlaybackTime(userId, liveSessionId, 3)
    const videoDuration = await this.getPlaybackDuration(liveSessionId)
    if (!videoDuration) return null
    return videoDuration - updatedPlaybackTime.playbackDuration
  }

  async getRemainingPlaybackTime(
    userId: string,
    liveSession: Pick<LiveSession, 'id'>
  ): Promise<number | null> {
    const videoDuration = await this.getPlaybackDuration(liveSession.id)
    if (!videoDuration) return null
    try {
      const playbackTime = await this.prisma.studentOnLiveSession.findUniqueOrThrow({
        where: { studentId_liveSessionId: { studentId: userId, liveSessionId: liveSession.id } },
      })
      return videoDuration - playbackTime.playbackDuration
    } catch (error) {
      this.logger.warn('getRemainingPlaybackTime', error)
      return videoDuration
    }
  }

  private async getPlaybackDuration(liveSessionId: string): Promise<number | null> {
    const redisKey = `liveSession:playbackTime:${liveSessionId}`
    const cachedDuration = await this.redisService.get(redisKey)
    if (cachedDuration) {
      return +cachedDuration
    }

    const liveSession = await this.prisma.liveSession.findUniqueOrThrow({
      where: {
        id: liveSessionId,
      },
      include: {
        liveCourse: true,
      },
    })

    if (
      !liveSession.videoId ||
      !liveSession.liveCourse.playbackDurationLimit ||
      liveSession.liveCourse.limitType === LiveCoursePlaybackLimitType.NONE ||
      this.isNotEnd(liveSession)
    )
      return null

    const limit: DurationLimit = {
      limitType: liveSession.liveCourse.limitType,
      durationLimit: liveSession.liveCourse.playbackDurationLimit,
    }

    const videoDetail = await this.streamService.getVideoDetail(liveSession.videoId)
    const limitDuration = durationLimitCalc(videoDetail.duration / 60, limit)
    await this.redisService.set(redisKey, `${limitDuration}`, 60 * 1) // 1 hours
    return limitDuration
  }

  private isNotEnd(liveSession: LiveSession): boolean {
    return isFuture(addHours(liveSession.endTime, 2))
  }

  private async incrementPlaybackTime(
    userId: string,
    liveSessionId: string,
    minute: number
  ): Promise<StudentOnLiveSession> {
    return await this.prisma.studentOnLiveSession.upsert({
      where: {
        studentId_liveSessionId: {
          studentId: userId,
          liveSessionId,
        },
      },
      create: {
        studentId: userId,
        liveSessionId,
        playbackDuration: minute,
      },
      update: {
        playbackDuration: {
          increment: minute,
        },
      },
    })
  }

  getLivingSessionByLiveCourseIdLoader = new DataLoader<string, LivingSession | null>(
    async (liveCourseIds) => {
      return this.getLivingSessionByLiveCourseIds(liveCourseIds)
    }
  )

  async getLivingSessionByLiveCourseId(liveCourseId: string): Promise<LivingSession | null> {
    const livingSession = await this.getLivingSessionByLiveCourseIdLoader.load(liveCourseId)
    return livingSession
  }

  async getLivingSessionByLiveCourseIds(
    liveCourseIds: readonly string[]
  ): Promise<LivingSession[]> {
    const sessions = await this.prisma.liveSession.findMany({
      where: { liveCourseId: { in: [...liveCourseIds] } },
      orderBy: { startTime: 'asc' },
    })
    const livingSessions = liveCourseIds.map((id) =>
      sessions
        .filter((session) => session.liveCourseId === id)
        .find(({ startTime, endTime }) => startTime < new Date() && endTime > new Date())
    )
    return livingSessions.map((session) => {
      if (!session) {
        return null
      }
      return {
        id: session.id,
        name: session.name,
        startTime: session.startTime,
      }
    })
  }

  getUpcomingSessionByLiveCourseIdLoader = new DataLoader<string, UpcomingSession | null>(
    async (liveCourseIds) => {
      return this.getUpcomingSessionsByLiveCourseIds(liveCourseIds)
    }
  )

  async getUpcomingSessionByLiveCourseId(liveCourseId: string) {
    const upcomingSession = await this.getUpcomingSessionByLiveCourseIdLoader.load(liveCourseId)
    return upcomingSession
  }

  async getUpcomingSessionsByLiveCourseIds(liveCourseIds: readonly string[]) {
    const sessions = await this.prisma.liveSession.findMany({
      where: { liveCourseId: { in: [...liveCourseIds] } },
      orderBy: { endTime: 'asc' },
    })
    const upcomingSessions = liveCourseIds.map((id) =>
      sessions
        .filter((session) => session.liveCourseId === id)
        .find(({ endTime }) => endTime > new Date())
    )
    return upcomingSessions.map((session) => {
      if (!session) {
        return null
      }
      return {
        id: session.id,
        name: session.name,
        startTime: session.startTime,
        isLiving: session.startTime < new Date() && session.endTime > new Date(),
      }
    })
  }

  async getLiveSessionQuizUserScores(liveSessionId: string): Promise<CmsQuizScoreUserScore[]> {
    const results = await this.prisma.$queryRaw<{ student_id: string; score: string }[]>`
      SELECT
        student_on_live_session_quiz.student_id student_id,
        SUM(CASE WHEN live_session_quiz.correct_choice = student_on_live_session_quiz.selected_choice THEN 1 ELSE 0 END) score
      FROM
      student_on_live_session_quiz

      LEFT JOIN live_session_quiz ON
        live_session_quiz.id = student_on_live_session_quiz.live_session_quiz_id
      WHERE
        live_session_quiz.live_session_id = ${liveSessionId}
      GROUP BY
        student_on_live_session_quiz.student_id;
    `
    const userAnswers = results
      .sort((a, b) => Number(b.score) - Number(a.score))
      .map((o) => ({
        user: {
          id: o.student_id,
        },
        score: Number(o.score),
      }))

    const userIds = userAnswers.map(({ user: { id } }) => id)
    const users = await this.userRepository.findByIds(userIds)
    return userAnswers.map((userAnswer, idx) => {
      const user = users[idx]
      return {
        ...userAnswer,
        user: {
          ...userAnswer.user,
          displayName: user?.displayName ?? '',
          profileUrl: user?.profileUrl ?? '',
        },
      }
    })
  }

  async getLiveSessionQuizAnswersByChoice(liveSessionQuiz: Pick<LiveSessionQuiz, 'id'>) {
    const result = await this.prisma.$queryRaw<{ choice: string; answer: string }[]>`
      SELECT
        student_on_live_session_quiz.selected_choice choice,
        COUNT(*) answer
      FROM
        student_on_live_session_quiz
      LEFT JOIN live_session_quiz ON
        live_session_quiz.id = student_on_live_session_quiz.live_session_quiz_id
      WHERE
        live_session_quiz.id = ${liveSessionQuiz.id}
      GROUP BY student_on_live_session_quiz.selected_choice;
    `
    return result.map((item) => ({
      choice: Number(item.choice),
      numberOfUserAnswers: Number(item.answer),
    }))
  }

  async getLiveSessionsForSchedule(args: LiveSessionFindManyArgs) {
    const liveSessions = await this.prisma.liveSession.findMany({
      ...this.adapter.findManyArgs(args),
      select: {
        id: true,
        name: true,
        startTime: true,
        endTime: true,
        liveCourse: {
          select: {
            name: true,
            tutorId: true,
          },
        },
      },
    })
    return await extendFields(
      liveSessions,
      async (liveSession) => ({
        status: await this.getLiveSessionStatus(liveSession),
      }),
      async ({ liveCourse: { name, tutorId } }) => {
        const tutor = await this.tutorRepository.findById(tutorId)
        return {
          liveCourse: { name: name, tutor: { name: tutor!.name } },
        }
      }
    )
  }

  count(args: LiveSessionFindManyArgs): Promise<number> {
    return this.prisma.liveSession.count({ where: this.adapter.findManyArgs(args).where })
  }

  async create(data: LiveSessionCreateInput): Promise<LiveSession> {
    const stream = await this.streamService.createLiveStream(data.name)
    return this.prisma.liveSession.create({
      data: {
        name: data.name,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        liveCourse: {
          connect: { id: data.liveCourseId },
        },
        streamKey: stream.rtmps.streamKey,
        streamInputId: stream.uid,
      },
    })
  }

  async update(liveSessionId: string, data: LiveSessionUpdateInput): Promise<LiveSession> {
    return await this.prisma.liveSession.update({
      where: {
        id: liveSessionId,
      },
      data,
    })
  }

  async deleteLiveSession(liveSessionId: string) {
    await this.prisma.liveSession.delete({ where: { id: liveSessionId } })
  }

  async generateTusUploadVideoUrl(
    liveSessionId: string,
    uploadLength: string,
    uploadMetadata: string
  ): Promise<string> {
    const liveSession = await this.prisma.liveSession.findUniqueOrThrow({
      where: { id: liveSessionId },
    })

    const response = await this.streamService.generateTusUploadUrl(
      uploadLength,
      uploadMetadata,
      liveSession.name
    )

    if (response) {
      await this.prisma.liveSession.update({
        where: { id: liveSessionId },
        data: {
          videoId: response.result.uid,
        },
      })
    }

    return response.result.uploadURL
  }

  findLiveSessionQuizzes(liveSession: Pick<LiveSession, 'id'>): Promise<LiveSessionQuiz[]> {
    return this.prisma.liveSession
      .findUniqueOrThrow({
        where: { id: liveSession.id },
      })
      .quizzes()
  }

  async countLiveSessionQuizzes(liveSession: Pick<LiveSession, 'id'>): Promise<number> {
    const session = await this.prisma.liveSession.findUniqueOrThrow({
      select: {
        _count: {
          select: {
            quizzes: true,
          },
        },
      },
      where: { id: liveSession.id },
    })
    return session._count.quizzes
  }

  private async getLiveSessionStatus({
    startTime,
    endTime,
  }: Pick<LiveSession, 'startTime' | 'endTime'>) {
    if (startTime > new Date()) {
      return LiveSessionStatus.Values.UPCOMING
    }
    if (endTime < new Date()) {
      return LiveSessionStatus.Values.ENDED
    }
    return LiveSessionStatus.Values.LIVE
  }

  async getCurrentLiveVideoId(
    liveSession: LiveSession,
    user: UserContext
  ): Promise<CloudflareLiveStreamLifeCycle> {
    if (
      !(await this.liveCourseService.isUserJoinedLiveCourse(user.id, liveSession.liveCourseId)) &&
      !(await this.isTrialSession(user.id, liveSession.id, liveSession.liveCourseId))
    ) {
      throw new AuthorizationError('marketplace', 'FORBIDDEN_NOT_PURCHASED_COURSE', 'not purchased')
    }
    const remainingPlaybackTime = await this.getRemainingPlaybackTime(user.id, liveSession)
    if (remainingPlaybackTime !== null && remainingPlaybackTime <= 0) {
      throw new AuthorizationError(
        'marketplace',
        'FORBIDDEN_NO_REMAINING_PLAYBACK_TIME',
        'no remaining playback time'
      )
    }

    return this.streamService.getCurrentLiveVideoId(liveSession)
  }

  async getStreamUrl() {
    return 'rtmps://live.cloudflare.com:443/live/'
  }

  async getLiveCourseForVideoResource(liveCourseId: string) {
    return this.liveCourseService.getLiveCourseForVideoResource(liveCourseId)
  }

  async getLiveSessionIndex(liveSessionId: string) {
    const liveSession = await this.prisma.liveSession.findUnique({
      where: { id: liveSessionId },
    })
    if (!liveSession) {
      throw new BadInputError('marketplace', 'LIVE_SESSION_NOT_FOUND')
    }
    const liveSessions = await this.prisma.liveSession.findMany({
      where: { liveCourseId: liveSession.liveCourseId },
      orderBy: { startTime: 'asc' },
    })
    return liveSessions.findIndex((session) => session.id === liveSessionId)
  }

  async updateRecentLiveSessionTimestamp({
    userId,
    liveSessionId,
    seconds,
    liveCourseId,
    videoLengthSeconds,
  }: {
    userId: string
    liveSessionId: string
    liveCourseId: string
    seconds: number
    videoLengthSeconds: number
  }) {
    await this.prisma.liveCoursesOnUsers.update({
      where: {
        userId_liveCourseId: {
          userId,
          liveCourseId,
        },
      },
      data: {
        recentLiveSessionId: liveSessionId,
        recentLiveSessionTimestampSeconds: seconds,
        recentLiveSessionVideoLengthSeconds: videoLengthSeconds,
      },
    })
    await this.prisma.studentOnLiveSession.update({
      where: {
        studentId_liveSessionId: {
          studentId: userId,
          liveSessionId,
        },
      },
      data: {
        timestampSeconds: seconds,
        videoLengthSeconds: videoLengthSeconds,
      },
    })
  }

  getLiveCourseOnUser({ liveCourseId, userId }: { liveCourseId: string; userId: string }) {
    return this.prisma.liveCoursesOnUsers.findUnique({
      where: {
        userId_liveCourseId: {
          userId,
          liveCourseId,
        },
      },
    })
  }

  getLiveCourseTrialOnUser({ liveCourseId, userId }: { liveCourseId: string; userId: string }) {
    return this.prisma.liveCourseTrialOnUser.findUnique({
      where: {
        userId_liveCourseId: {
          userId,
          liveCourseId,
        },
      },
    })
  }
}

container.registerSingleton<LiveSessionService, LiveSessionService>()
