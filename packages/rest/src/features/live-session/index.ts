import { z } from 'zod'

import { LiveSessionModel } from '@luminate/database'

import { contract } from '../../contracts'
import {
  CmsQuizScoreResponse,
  GetLiveSessionIndexQueryParam,
  GetLiveSessionIndexResponse,
  LiveSessionCreateInput,
  LiveSessionFindManyArgs,
  LiveSessionForTutor,
  LiveSessionUpdateInput,
  LiveSessionVideoResource,
  LiveSessionsForScheduleResponse,
  UpdateRecentLiveSessionTimestampQueryParams,
} from './dto'

export * from './dto'

export const liveSessionContract = contract.router({
  getQuizScoreForCms: {
    method: 'GET',
    path: '/:liveSessionId/cms/quiz-score',
    responses: {
      200: CmsQuizScoreResponse,
    },
  },
  getLiveSessionForTutor: {
    method: 'GET',
    path: '/:liveSessionId/for-tutor',
    responses: {
      200: LiveSessionForTutor,
    },
  },
  getLiveSessionsForSchedule: {
    method: 'GET',
    path: '/for-schedule',
    query: LiveSessionFindManyArgs,
    responses: {
      200: LiveSessionsForScheduleResponse,
    },
  },
  getLiveSessionsCount: {
    method: 'GET',
    path: '/count',
    query: LiveSessionFindManyArgs,
    responses: {
      200: z.number(),
    },
  },
  getVideoResource: {
    method: 'GET',
    path: '/:liveSessionId/video-resource',
    responses: {
      200: LiveSessionVideoResource,
      400: null,
    },
  },
  getRemainingPlaybackTime: {
    method: 'GET',
    path: '/:liveSessionId/remaining-playback-time',
    responses: {
      200: z.number().nullable(),
      400: null,
    },
  },
  updatePlaybackTime: {
    method: 'POST',
    path: '/:liveSessionId/update-playback-time',
    body: null,
    responses: {
      200: z.number().nullable(),
      400: null,
    },
  },
  createLiveSession: {
    method: 'POST',
    path: '/',
    body: LiveSessionCreateInput,
    responses: {
      200: LiveSessionModel,
    },
  },
  updateLiveSession: {
    method: 'PATCH',
    path: '/:liveSessionId',
    body: LiveSessionUpdateInput,
    responses: {
      200: LiveSessionModel,
    },
  },
  deleteLiveSession: {
    method: 'DELETE',
    path: '/:liveSessionId',
    body: null,
    responses: {
      200: null,
    },
  },
  getLiveSessionIndex: {
    method: 'GET',
    path: '/index',
    query: GetLiveSessionIndexQueryParam,
    responses: {
      200: GetLiveSessionIndexResponse,
    },
  },
  updateRecentLiveSessionTimestamp: {
    method: 'POST',
    path: '/update-recent',
    body: UpdateRecentLiveSessionTimestampQueryParams,
    responses: {
      200: null,
    },
  },
})
