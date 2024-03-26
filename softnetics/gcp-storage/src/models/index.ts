export interface FileUploadCacheObject<T = unknown> {
  callbackMessagePattern: string
  payload: T
}

export interface FileUploadDetails {
  url: string
  token: string
}
