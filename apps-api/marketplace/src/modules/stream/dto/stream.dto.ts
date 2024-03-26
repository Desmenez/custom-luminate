export interface CloudflareGenerateUploadURLResult {
  uploadURL: string
  uid: string
  watermark?: string
}

export interface CloudflareGenerateUploadURLResponse {
  result: CloudflareGenerateUploadURLResult
}

export interface CloudFlareLifeCycle {
  isInput: boolean
  videoUID: string | null
  live: boolean
  status: string
}

export interface GenerateTusUploadUrlResponse {
  uploadUrl: string
}

export interface CloudflareVideoDetailResponse {
  result: CloudflareVideoDetail
}

export interface CloudflareVideosDetailResponse {
  result: CloudflareVideoDetail[]
}
export interface CloudflareVideoDetail {
  allowedOrigins: string[]
  created: string
  duration: number
  input: {
    height: number
    width: number
  }
  maxDurationSeconds: number
  meta: Record<string, unknown>
  modified: string
  uploadExpiry: string
  playback: {
    hls: string
    dash: string
  }
  preview: string
  readyToStream: boolean
  requireSignedURLs: boolean
  size: number
  status: {
    state: string
    pctComplete: number
    errorReasonCode: string
    errorReasonText: string
  }
  thumbnail: string
  thumbnailTimestampPct: number
  uid: string
  creator: string
  liveInput: string
  uploaded: string
  watermark: {
    uid: string
    size: number
    height: number
    width: number
    created: string
    downloadedFrom: string
    name: string
    opacity: number
    padding: number
    scale: number
    position: string
  }
  nft: {
    contract: string
    token: number
  }
}

export interface Meta {
  name: string
}

export interface Recording {
  mode: string
  requireSignedURLs: boolean
  timeoutSeconds: number
}

export interface Rtmps {
  streamKey: string
  url: string
}

export interface RtmpsPlayback {
  streamKey: string
  url: string
}

export interface Srt {
  passphrase: string
  streamId: string
  url: string
}

export interface SrtPlayback {
  passphrase: string
  streamId: string
  url: string
}

export interface CloudFlareCreateStream {
  created: string
  meta: Meta
  modified: string
  recording: Recording
  rtmps: Rtmps
  rtmpsPlayback: RtmpsPlayback
  srt: Srt
  srtPlayback: SrtPlayback
  uid: string
}
