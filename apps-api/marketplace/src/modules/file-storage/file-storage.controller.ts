import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { FileStorageService } from './file-storage.service'

export class FileStorageController extends Controller {
  constructor(private readonly fileStorageService: FileStorageService) {
    super()

    this.register(mainContract.fileStorage, {
      onFileUploadComplete: async ({ body: { token } }) => {
        await this.fileStorageService.onFileUploadComplete(token)
        return {
          status: 200,
          body: 'ok',
        }
      },
    })
  }
}

container.registerSingleton<FileStorageController, FileStorageController>()
