import { messagePattern } from '@app/constants/message-pattern'
import { container } from '@app/container'
import { FileService, FileUploadCacheObject } from '@softnetics/gcp-storage'

import { BadInputError } from '@luminate/error'

import { ImageDescriptionService, LiveCourseService } from '../live-course'

export class FileStorageService {
  constructor(
    private fileService: FileService,
    private liveCourseService: LiveCourseService,
    private imageDescriptionService: ImageDescriptionService
  ) {}
  payloadHasId(payload: unknown): payload is { id: string } {
    return (
      !!payload &&
      typeof payload === 'object' &&
      typeof (payload as Record<string, unknown>).id === 'string'
    )
  }

  async getResultFromMessagePattern({
    callbackMessagePattern,
    payload,
  }: FileUploadCacheObject<unknown>) {
    if (!this.payloadHasId(payload))
      throw new BadInputError('site-content', 'ON_UPLOAD_COMPLETE_FAILED', 'Invalid payload')
    switch (callbackMessagePattern) {
      case messagePattern.LiveCourse.ON_UPLOAD_THUMBNAIL_COMPLETE:
        return this.liveCourseService.onUploadThumbnailComplete(payload.id)

      case messagePattern.LiveCourse.ON_UPLOAD_COVER_COMPLETE:
        return this.liveCourseService.onUploadCoverComplete(payload.id)

      case messagePattern.LiveCourse.ON_UPLOAD_STICKER_COMPLETE:
        return this.liveCourseService.onUploadStickerComplete(payload.id)

      case messagePattern.LiveCourse.ON_UPLOAD_HERO_COMPLETE:
        return this.liveCourseService.onUploadHeroComplete(payload.id)

      case messagePattern.LiveCourse.ON_UPLOAD_HERO_MOBILE_COMPLETE:
        return this.liveCourseService.onUploadHeroMobileComplete(payload.id)

      case messagePattern.LiveSession.ON_UPLOAD_SHEET_COMPLETE:
        return this.liveCourseService.onUploadSheetComplete(payload.id)
      case messagePattern.LiveCourseImageDescription.ON_UPLOAD_IMAGE_COMPLETE:
        return this.imageDescriptionService.onUploadImageComplete(payload.id)
    }
  }

  async onFileUploadComplete(token: string) {
    const fileCacheObject = await this.fileService.retrieveTokenValue(token)
    if (!fileCacheObject) {
      throw new BadInputError('site-content', 'ON_UPLOAD_COMPLETE_FAILED', 'Invalid token')
    }
    fileCacheObject.payload
    try {
      await this.getResultFromMessagePattern(fileCacheObject)
    } catch (e) {
      throw new BadInputError(
        'site-content',
        'ON_UPLOAD_COMPLETE_FAILED',
        'Failed to call on upload complete message pattern'
      )
    }
  }
}

container.registerSingleton<FileStorageService, FileStorageService>()
