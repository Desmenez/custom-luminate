import { container } from '@app/container'
import { undefinedToNulls } from '@app/utils/undefinedToNulls'
import DataLoader from 'dataloader'

import { BadInputError } from '@luminate/error'
import { LuminateGatewayServiceClient } from '@luminate/grpc'

export interface Subject {
  id: string
  code: string
  name: string
  mainColor: string | null
}

export interface ISubjectRepository {
  findById: (id: string) => Promise<Subject>
  findByIds: (ids: string[]) => Promise<Subject[]>
  findAll: () => Promise<Subject[]>
}

export class SubjectRepository implements ISubjectRepository {
  constructor(private luminateGatewayServiceClient: LuminateGatewayServiceClient) {}

  findByIdLoader = new DataLoader<string, Subject | null>(async (ids) => {
    return this.findByIds(ids)
  })
  findById = async (id: string) => {
    const subject = await this.findByIdLoader.load(id)
    if (!subject) {
      throw new BadInputError('marketplace', 'SUBJECT_NOT_FOUND')
    }
    return subject
  }
  findByIds = async (ids: readonly string[]) => {
    const response = await this.luminateGatewayServiceClient.getSubjects({
      subjectIds: ids as string[],
    })
    return response.subjects.map((optionalSubject) => {
      if (!optionalSubject?.subject) {
        throw new BadInputError('marketplace', 'SUBJECT_NOT_FOUND')
      }
      return {
        ...undefinedToNulls(optionalSubject.subject),
        id: optionalSubject.subject.subjectId,
      }
    })
  }
  findAll = async () => {
    return this.findByIds([])
  }
}

container.registerSingleton<ISubjectRepository, SubjectRepository>()
