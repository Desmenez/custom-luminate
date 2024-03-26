import { Controller } from '@app/common/controller'
import { container } from '@app/container'
import { prisma } from '@app/database'
import { extendFields } from '@app/utils'
import { addHours, isPast } from 'date-fns'

import { AuthorizationError, BadInputError } from '@luminate/error'
import { mainContract } from '@luminate/rest'

import { LiveSessionService } from './live-session.service'

export class LiveSessionController extends Controller {
  constructor(private readonly liveSessionService: LiveSessionService) {
    super()

    this.register(mainContract.liveSession, {
      getQuizScoreForCms: async ({ params: { liveSessionId } }) => {
        const quizzes = await prisma.liveSessionQuiz.findMany({
          where: {
            liveSessionId,
          },
        })
        const quizzesWithChoiceAnswers = await extendFields(quizzes, async (quiz) => ({
          userAnswersByChoice: await this.liveSessionService.getLiveSessionQuizAnswersByChoice(
            quiz
          ),
        }))
        const userScores = await this.liveSessionService.getLiveSessionQuizUserScores(liveSessionId)
        return {
          status: 200,
          body: {
            quizzes: quizzesWithChoiceAnswers,
            userScores: userScores,
          },
        }
      },
      getLiveSessionForTutor: async ({ params: { liveSessionId }, request }) => {
        await request.auth.requirePermissions('live-session.live-session.get-key')
        const liveSession = await this.liveSessionService.findUnique(liveSessionId)
        if (!liveSession) {
          return {
            status: 404,
            body: null,
          }
        }
        const isEnded = isPast(addHours(liveSession.endTime, 2))
        const streamInfo = !isEnded
          ? {
              streamUrl: await this.liveSessionService.getStreamUrl(),
              streamKey: liveSession.streamKey,
            }
          : null
        return {
          status: 200,
          body: {
            ...liveSession,
            endTime: liveSession.endTime.toISOString(),
            streamInfo,
          },
        }
      },
      getLiveSessionsForSchedule: async ({ query }) => {
        const liveSessions = await this.liveSessionService.getLiveSessionsForSchedule(query)
        return {
          status: 200,
          body: liveSessions,
        }
      },
      getLiveSessionsCount: async ({ query }) => {
        const count = await this.liveSessionService.count(query)
        return {
          status: 200,
          body: count,
        }
      },
      getVideoResource: async ({ params: { liveSessionId }, request }) => {
        const userContext = await request.auth.requireUserContext()
        const liveSession = await this.liveSessionService.findUnique(liveSessionId)
        if (!liveSession) {
          throw new BadInputError('marketplace', 'LIVE_SESSION_NOT_FOUND')
        }
        const [liveCourseOnUser, liveCourseTrialOnUser] = await Promise.all([
          this.liveSessionService.getLiveCourseOnUser({
            liveCourseId: liveSession.liveCourseId,
            userId: userContext.id,
          }),
          this.liveSessionService.getLiveCourseTrialOnUser({
            liveCourseId: liveSession.liveCourseId,
            userId: userContext.id,
          }),
        ])
        if (!liveCourseOnUser && !liveCourseTrialOnUser) {
          throw new AuthorizationError('marketplace', 'FORBIDDEN_NOT_PURCHASED_COURSE')
        }
        if (
          (liveCourseOnUser?.expiresAt && isPast(liveCourseOnUser.expiresAt)) ||
          (liveSession.liveCourse.expiresAt && isPast(liveSession.liveCourse.expiresAt))
        ) {
          throw new BadInputError('marketplace', 'LIVE_COURSE_EXPIRED')
        }
        const [liveCourse, index, currentLiveVideoId, remainingPlaybackTime] = await Promise.all([
          this.liveSessionService.getLiveCourseForVideoResource(liveSession.liveCourseId),
          this.liveSessionService.getLiveSessionIndex(liveSession.id),
          liveCourseOnUser?.learningType === 'ONSITE'
            ? null
            : this.liveSessionService.getCurrentLiveVideoId(liveSession, userContext),
          liveCourseOnUser?.learningType === 'ONSITE'
            ? null
            : this.liveSessionService.getRemainingPlaybackTime(userContext.id, liveSession),
        ])
        return {
          status: 200,
          body: {
            ...liveSession,
            liveCourse,
            index,
            currentLiveVideoId,
            remainingPlaybackTime,
          },
        }
      },
      getRemainingPlaybackTime: async ({ params: { liveSessionId }, request }) => {
        const userContext = await request.auth.requireUserContext()
        const liveSession = await this.liveSessionService.findUnique(liveSessionId)
        if (!liveSession) {
          return {
            status: 404,
            body: null,
          }
        }
        const remainingPlaybackTime = await this.liveSessionService.getRemainingPlaybackTime(
          userContext.id,
          liveSession
        )
        return {
          status: 200,
          body: remainingPlaybackTime,
        }
      },
      updatePlaybackTime: async ({ params: { liveSessionId }, request }) => {
        const userContext = await request.auth.requireUserContext()
        const liveSession = await this.liveSessionService.findUnique(liveSessionId)
        if (!liveSession) {
          return {
            status: 404,
            body: null,
          }
        }
        const updatedPlaybackTime = await this.liveSessionService.updatePlaybackTime(
          userContext.id,
          liveSession.id
        )
        return {
          status: 200,
          body: updatedPlaybackTime,
        }
      },
      createLiveSession: async ({ body, request }) => {
        await request.auth.requirePermissions('live-session.live-session.create')
        const liveSession = await this.liveSessionService.create(body)
        return {
          status: 200,
          body: liveSession,
        }
      },
      updateLiveSession: async ({ params: { liveSessionId }, body, request }) => {
        await request.auth.requirePermissions('live-session.live-session.update')
        const liveSession = await this.liveSessionService.update(liveSessionId, body)
        return {
          status: 200,
          body: liveSession,
        }
      },
      deleteLiveSession: async ({ params: { liveSessionId }, request }) => {
        await request.auth.requirePermissions('live-session.live-session.delete')
        await this.liveSessionService.deleteLiveSession(liveSessionId)
        return {
          status: 200,
          body: null,
        }
      },
      getLiveSessionIndex: async ({ query: { id } }) => {
        const index = await this.liveSessionService.getLiveSessionIndex(id)
        return {
          status: 200,
          body: {
            index,
          },
        }
      },
      updateRecentLiveSessionTimestamp: async ({
        body: { liveSessionId, seconds, videoLengthSeconds },
        request,
      }) => {
        const userContext = await request.auth.requireUserContext()
        const liveSession = await this.liveSessionService.findUnique(liveSessionId)
        if (!liveSession) {
          return {
            status: 404,
            body: null,
          }
        }
        await this.liveSessionService.updateRecentLiveSessionTimestamp({
          userId: userContext.id,
          liveSessionId,
          seconds,
          liveCourseId: liveSession.liveCourseId,
          videoLengthSeconds: videoLengthSeconds,
        })
        return {
          status: 200,
          body: null,
        }
      },
    })
  }
}

container.registerSingleton<LiveSessionController, LiveSessionController>()
