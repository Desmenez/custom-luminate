import { liveCourseImageDescriptionPath } from '@app/constants/bucket-path'
import { container } from '@app/container'
import { FileService } from '@softnetics/gcp-storage'

import { PrismaClient } from '@luminate/database'

// import { LiveCourseCreateArgs } from '@luminate/rest'

export class ImageDescriptionService {
  constructor(
    private prisma: PrismaClient,
    private fileService: FileService
  ) {}

  async onUploadImageComplete(id: string) {
    const bucketPath = liveCourseImageDescriptionPath(id)
    await this.fileService.ensurePublicFile(bucketPath)
    return this.prisma.liveCourseImageDescription.update({
      where: { id },
      data: { imageUrl: await this.fileService.getPublicUrl(bucketPath) },
    })
  }
}

container.registerSingleton<ImageDescriptionService>()
