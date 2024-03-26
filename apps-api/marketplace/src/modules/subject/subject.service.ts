import { container } from '@app/container'

import { ISubjectRepository } from '.'

export class SubjectService {
  constructor(private subjectRepository: ISubjectRepository) {}

  async getSubjects() {
    const subjects = await this.subjectRepository.findAll()
    return subjects
  }
}

container.registerSingleton<SubjectService>()
