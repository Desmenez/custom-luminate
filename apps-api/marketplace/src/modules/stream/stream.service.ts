import { environments } from '@app/common/env'
import { ApplicationLogger } from '@app/common/logger'
import { container } from '@app/container'
import { prisma } from '@app/database'
import { RedisService } from '@softnetics/redis'
import { webcrypto as crypto } from 'crypto'
import { addHours, isPast } from 'date-fns'

import { LiveSession } from '@luminate/database'

import {
  CloudFlareCreateStream,
  CloudFlareLifeCycle,
  CloudflareGenerateUploadURLResponse,
  CloudflareVideoDetail,
  CloudflareVideosDetailResponse,
} from './dto'
import { VideoDetailDtoResponse } from './dto/video.dto'

export class StreamService {
  private readonly cloudflareStreamApiUrl = 'https://api.cloudflare.com/client/v4/accounts'
  private readonly cloudflareAccountId = environments.CLOUDFLARE_ACCOUNT_ID
  private readonly cloudflareAPIToken = environments.CLOUDFLARE_API_TOKEN
  private readonly cloudflareStreamId = environments.CLOUDFLARE_STREAM_ID
  private readonly cloudflareStreamJwk = environments.CLOUDFLARE_STREAM_JWK
  private readonly cloudflareCustomerUrl = environments.CLOUDFLARE_CUSTOMER_URL

  constructor(
    private readonly redisService: RedisService,
    private readonly logger: ApplicationLogger
  ) {}

  async generateTusUploadUrl(
    uploadLength: string,
    uploadMetadata: string,
    videoName: string
  ): Promise<CloudflareGenerateUploadURLResponse> {
    const endpoint = `${this.cloudflareStreamApiUrl}/${this.cloudflareAccountId}/stream?direct_user=true`
    let finalVideoName: string
    if (!process.env.GATEWAY_BASE_URL?.includes('monkeyeveryday.com')) {
      finalVideoName = `STAGING-${videoName}`
    } else {
      finalVideoName = `PROD-${videoName}`
    }

    const videoNameBase64 = Buffer.from(finalVideoName).toString('base64')

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.cloudflareAPIToken}`,
        'Tus-Resumable': '1.0.0',
        'Upload-Length': uploadLength,
        'Upload-Metadata': `name ${videoNameBase64}, ${uploadMetadata}`,
      },
    })
    if (!response.ok) {
      this.logger.error('Cannot generate tus upload url: ' + (await response.text()))
      throw new Error('Cloudflare error')
    }

    return {
      result: {
        uid: response.headers.get('stream-media-id')!,
        uploadURL: response.headers.get('location')!,
      },
    }
  }

  async getVideoDetail(videoId: string): Promise<VideoDetailDtoResponse> {
    const redisKey = `cloudflare:video:${videoId}`
    const cachedVideoDetail = await this.redisService.getObject<VideoDetailDtoResponse>(redisKey)
    if (cachedVideoDetail) {
      return cachedVideoDetail
    }

    const url = `https://api.cloudflare.com/client/v4/accounts/${this.cloudflareAccountId}/stream/${videoId}`
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.cloudflareAPIToken}`,
      },
    })
    if (!response.ok) {
      this.logger.error('Cannot get video detail: ' + (await response.text()))
      throw new Error('Cloudflare error')
    }
    const data = (await response.json()) as { result: VideoDetailDtoResponse }
    await this.redisService.setObject(redisKey, data.result, 60 * 60 * 24) // 1 day
    return data.result
  }

  async getLiveStreamViewerCount(streamInput: string): Promise<number> {
    const cachedViewerCount = await this.redisService.get(streamInput)
    if (cachedViewerCount) {
      return Number(cachedViewerCount)
    }

    const signedToken = await this.streamSignedToken(streamInput)
    const url = `${this.cloudflareCustomerUrl}/${signedToken}/views`
    const response = await fetch(url)
    if (!response.ok) {
      this.logger.error('Cannot get views: ' + (await response.text()))
      throw new Error('Cloudflare error')
    }
    const data = (await response.json()) as { result: { liveViewers: number } }

    const viewerCount = data.result.liveViewers
    this.saveCache(streamInput, viewerCount.toString(), 30) // 1 minute
    return viewerCount
  }

  private async saveCache(key: string, value: string, ttl: number) {
    await this.redisService.set(key, value, ttl)
  }

  private async setVideoIdToLastVideoId(
    liveSessionId: string,
    streamInputId: string
  ): Promise<string> {
    const res = await this.getStreamVideosDetail(streamInputId)
    if (!res || !res[0]) {
      this.logger.warn(`Cannot find video id for ${streamInputId}`)
      return ''
    }
    const liveSession = await prisma.liveSession.update({
      where: {
        id: liveSessionId,
      },
      data: {
        videoId: res[0].uid,
      },
    })
    return liveSession.videoId!
  }

  async getVideoId(liveSession: LiveSession): Promise<string> {
    let videoId: string | null = null
    if (isPast(addHours(liveSession.endTime, 2))) {
      videoId = liveSession.videoId
      if (!videoId) {
        videoId = await this.setVideoIdToLastVideoId(liveSession.id, liveSession.streamInputId)
      }
    }
    if (!videoId) {
      videoId = liveSession.streamInputId
    }
    return videoId
  }

  async getCurrentLiveVideoId(liveSession: LiveSession): Promise<CloudFlareLifeCycle> {
    const videoId = await this.getVideoId(liveSession)
    const signedToken = await this.streamSignedToken(videoId)
    const response = await fetch(`${this.cloudflareCustomerUrl}/${signedToken}/lifecycle`, {
      headers: {
        Authorization: `Bearer ${this.cloudflareAPIToken}`,
      },
    })
    if (!response.ok) {
      this.logger.error('Cannot get lifecycle: ' + (await response.text()))
      throw new Error('Cloudflare error')
    }
    const data = (await response.json()) as CloudFlareLifeCycle

    if (data.videoUID) {
      data.videoUID = await this.streamSignedToken(data.videoUID)
    }
    return data
  }

  async getStreamVideosDetail(uid: string): Promise<CloudflareVideoDetail[]> {
    const signedToken = uid
    const response = await fetch(
      `${this.cloudflareStreamApiUrl}/${this.cloudflareAccountId}/stream/live_inputs/${signedToken}/videos`,
      {
        headers: {
          Authorization: `Bearer ${this.cloudflareAPIToken}`,
        },
      }
    )
    if (!response.ok) {
      this.logger.error('Cannot get stream videos detail: ' + (await response.text()))
      throw new Error('Cloudflare error')
    }
    const data = (await response.json()) as CloudflareVideosDetailResponse

    const token = await this.streamSignedToken(uid)
    return data.result.map((video) => {
      const tmp = structuredClone(video)
      tmp.thumbnail = tmp.thumbnail.replace(uid, token)
      tmp.playback.hls = tmp.playback.hls.replace(uid, token)
      tmp.playback.dash = tmp.playback.dash.replace(uid, token)
      return tmp
    })
  }

  async createLiveStream(name: string): Promise<CloudFlareCreateStream> {
    const url = `https://api.cloudflare.com/client/v4/accounts/${this.cloudflareAccountId}/stream/live_inputs`

    const allowedOrigins = ['*.monkeyeveryday.com']
    if (!process.env.GATEWAY_BASE_URL?.includes('monkeyeveryday.com')) {
      allowedOrigins.push(
        'marketplace-staging.vercel.app',
        '*.staging.lrean.com',
        'localhost:4200',
        'localhost:4201',
        'localhost:3000'
      )
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.cloudflareAPIToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        meta: {
          name,
        },
        recording: {
          mode: 'automatic',
          allowedOrigins,
        },
      }),
    })
    if (!response.ok) {
      this.logger.error('Cannot create live stream: ' + (await response.text()))
      throw new Error('Cloudflare error')
    }
    const data = (await response.json()) as { result: CloudFlareCreateStream }

    return data.result
  }

  private async streamSignedToken(videoId: string) {
    const encoder = new TextEncoder()
    const expiresIn = Math.floor(addHours(Date.now(), 2).getTime() / 1000)
    const headers = {
      alg: 'RS256',
      kid: this.cloudflareStreamId,
    }
    const data = {
      sub: videoId,
      kid: this.cloudflareStreamId,
      exp: expiresIn,
      downloadable: false,
    }

    const token = `${this.objectToBase64url(headers)}.${this.objectToBase64url(data)}`

    const jwk = JSON.parse(Buffer.from(this.cloudflareStreamJwk, 'base64').toString())

    const key = await crypto.subtle.importKey(
      'jwk',
      jwk,
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256',
      },
      false,
      ['sign']
    )

    const signature = await crypto.subtle.sign(
      { name: 'RSASSA-PKCS1-v1_5' },
      key,
      encoder.encode(token)
    )

    const signedToken = `${token}.${this.arrayBufferToBase64Url(signature)}`

    return signedToken
  }

  // Utilities functions
  private arrayBufferToBase64Url(buffer: ArrayBuffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }

  private objectToBase64url(payload: unknown) {
    return this.arrayBufferToBase64Url(new TextEncoder().encode(JSON.stringify(payload)))
  }
}

container.registerSingleton<StreamService, StreamService>()
