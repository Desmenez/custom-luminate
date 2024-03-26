import { StorageOptions } from '@google-cloud/storage'

export type BucketStorageConfig = StorageOptions & { bucketName: string }

export interface FileServiceOptions {
  publicStorageOption?: BucketStorageConfig & { cdnBaseUrl?: string }
  privateStorageOption?: BucketStorageConfig & {
    privateCdnBaseUrl?: string
    privateCdnSignedUrlKey?: string
    privateCdnSignedUrlKeyName?: string
  }
  transcoderStorageOption?: BucketStorageConfig
}

export interface ICacheService {
  getObject<T>(key: string): Promise<T | null>
  del(key: string): Promise<number>
  setObject<T>(key: string, value: T, ttl?: number): Promise<string | null>
}
