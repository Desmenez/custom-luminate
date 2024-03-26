export interface VideoDetailDtoResponse {
  allowedOrigins: string[]
  created: string
  creator: string
  duration: number
  input: InputDto
  liveInput: string
  maxDurationSeconds: number
  meta: MetaDto
  modified: string
  playback: PlaybackDto
  preview: string
  readyToStream: boolean
  requireSignedURLs: boolean
  size: number
  status: StatusDto
  thumbnail: string
  thumbnailTimestampPct: number
  uid: string
  uploadExpiry: string
  uploaded: string
  watermark: WatermarkDto
}

export interface InputDto {
  height: number
  width: number
}

export interface MetaDto {
  name: string
}

export interface PlaybackDto {
  dash: string
  hls: string
}

export interface StatusDto {
  errorReasonCode: string
  errorReasonText: string
  pctComplete: string
  state: string
}

export interface WatermarkDto {
  created: string
  downloadedFrom: string
  height: number
  name: string
  opacity: number
  padding: number
  position: string
  scale: number
  size: number
  uid: string
  width: number
}
