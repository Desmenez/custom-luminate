import { Bucket, Storage } from '@google-cloud/storage'
import { addHours, addMinutes } from 'date-fns'
import { nanoid } from 'nanoid'

import { FileError } from './errors'
import { FileUploadCacheObject, FileUploadDetails } from './models'
import type { FileServiceOptions, ICacheService } from './types'

export * from './types'
export * from './errors'
export * from './models'

export class FileService {
  protected readonly privateBucket!: Bucket
  protected readonly publicBucket!: Bucket
  protected readonly transcoderBucket!: Bucket
  protected readonly cdnBaseUrl!: string
  protected readonly privateCdnBaseUrl!: string
  protected readonly privateCdnSignedUrlKey!: string
  protected readonly privateCdnSignedUrlKeyName!: string

  constructor(
    { publicStorageOption, privateStorageOption, transcoderStorageOption }: FileServiceOptions,
    private readonly cacheService: ICacheService
  ) {
    if (privateStorageOption) {
      const {
        bucketName: privateBucketName,
        privateCdnBaseUrl,
        privateCdnSignedUrlKey,
        privateCdnSignedUrlKeyName,
        ...privateStorage
      } = privateStorageOption

      if (privateStorage && privateBucketName) {
        this.privateBucket = new Storage(privateStorage).bucket(privateBucketName)
      }

      if (privateCdnBaseUrl) {
        this.privateCdnBaseUrl = privateCdnBaseUrl
      }
      if (privateCdnSignedUrlKey) {
        this.privateCdnSignedUrlKey = privateCdnSignedUrlKey
      }
      if (privateCdnSignedUrlKeyName) {
        this.privateCdnSignedUrlKeyName = privateCdnSignedUrlKeyName
      }
    }
    if (publicStorageOption) {
      const { bucketName: publicBucketName, cdnBaseUrl, ...publicStorage } = publicStorageOption
      if (publicStorage && publicBucketName) {
        this.publicBucket = new Storage(publicStorage).bucket(publicBucketName)
      }
      if (transcoderStorageOption) {
        const { bucketName: transcoderBucketName, ...transcoderStorage } = transcoderStorageOption
        if (transcoderStorage && transcoderBucketName) {
          this.transcoderBucket = new Storage(transcoderStorage).bucket(transcoderBucketName)
        }
      }

      if (cdnBaseUrl) {
        this.cdnBaseUrl = cdnBaseUrl
      }
    }
  }

  getPublicUploadFileUrl(
    bucketPath: string,
    messagePatternCallbackName: string,
    payload: unknown
  ): Promise<FileUploadDetails> {
    return this.getUploadFileUrl(bucketPath, true, messagePatternCallbackName, payload)
  }

  getPrivateUploadFileUrl(
    bucketPath: string,
    messagePatternCallbackName: string,
    payload: unknown
  ): Promise<FileUploadDetails> {
    return this.getUploadFileUrl(bucketPath, false, messagePatternCallbackName, payload)
  }

  async getPublicUrl(bucketPath: string): Promise<string> {
    if (this.cdnBaseUrl) {
      return this.cdnBaseUrl + `/${bucketPath}`
    } else {
      const file = this.publicBucket.file(bucketPath)
      return file.publicUrl()
    }
  }

  async getPrivateUrl(bucketPath: string): Promise<string> {
    const file = this.privateBucket.file(bucketPath)
    const [signedUrl] = await file.getSignedUrl({
      action: 'read',
      expires: addHours(new Date(), 1),
      version: 'v4',
    })
    return signedUrl
  }

  async deletePublicFile(bucketPath: string): Promise<void> {
    await this.deleteFile(bucketPath, true)
  }

  async deletePrivateFile(bucketPath: string): Promise<void> {
    await this.deleteFile(bucketPath, false)
  }

  async copyPublicFile(src: string, dest: string): Promise<void> {
    await this.copyFile(src, dest, true)
  }

  async copyPrivateFile(src: string, dest: string): Promise<void> {
    await this.copyFile(src, dest, false)
  }

  listPublicFile(prefix: string): Promise<string[]> {
    return this.listFiles(prefix, true)
  }

  listPrivateFile(prefix: string): Promise<string[]> {
    return this.listFiles(prefix, false)
  }

  async ensurePublicFile(bucketPath: string): Promise<boolean> {
    const isExist = await this.isFileExist(bucketPath, true)
    if (!isExist) {
      throw new FileError('File not exist in public bucket')
    }
    return true
  }

  async ensurePrivateFile(bucketPath: string): Promise<boolean> {
    const isExist = await this.isFileExist(bucketPath, false)
    if (!isExist) {
      throw new FileError('File not exist in private bucket')
    }
    return true
  }

  async isPublicFileExist(bucketPath: string): Promise<boolean> {
    return this.isFileExist(bucketPath, true)
  }

  async isPrivateFileExist(bucketPath: string): Promise<boolean> {
    return this.isFileExist(bucketPath, false)
  }

  async retrieveTokenValue<T>(token: string): Promise<FileUploadCacheObject<T> | null> {
    const key = `fileUpload:${token}`
    const value = await this.cacheService.getObject<FileUploadCacheObject<T>>(key)
    if (!value) {
      return null
    }
    await this.cacheService.del(key)
    return {
      ...value,
    }
  }

  async copyPrivateToTranscoderBucket(bucketPath: string): Promise<void> {
    if (this.privateBucket && this.transcoderBucket) {
      await this.privateBucket.file(bucketPath).copy(this.transcoderBucket.file(bucketPath))
    }
  }

  private async getUploadFileUrl(
    bucketPath: string,
    isPublic: boolean,
    callbackMessagePattern: string,
    payload: unknown
  ): Promise<FileUploadDetails> {
    const file = isPublic ? this.publicBucket.file(bucketPath) : this.privateBucket.file(bucketPath)
    const [signedUrl] = await file.getSignedUrl({
      action: 'write',
      expires: addMinutes(new Date(), 15),
      version: 'v4',
    })
    const token = nanoid(10)
    await this.cacheService.setObject(`fileUpload:${token}`, { callbackMessagePattern, payload })
    return {
      url: signedUrl,
      token: token,
    }
  }

  private async deleteFile(bucketPath: string, isPublic: boolean): Promise<void> {
    const file = isPublic ? this.publicBucket.file(bucketPath) : this.privateBucket.file(bucketPath)
    await file.delete()
  }

  private async listFiles(prefix: string, isPublic: boolean): Promise<string[]> {
    const [files] = await (isPublic
      ? this.publicBucket.getFiles({ prefix })
      : this.privateBucket.getFiles({ prefix }))
    return files.map((f) => f.name)
  }

  private async isFileExist(bucketPath: string, isPublic: boolean): Promise<boolean> {
    const file = isPublic ? this.publicBucket.file(bucketPath) : this.privateBucket.file(bucketPath)
    const [isExist] = await file.exists()
    return isExist
  }

  private async copyFile(src: string, dest: string, isPublic: boolean): Promise<void> {
    const file = isPublic ? this.publicBucket.file(src) : this.privateBucket.file(src)
    await file.copy(dest)
  }
}

export type IFileService = FileService
