import { container } from '@app/container'
import { undefinedToNulls } from '@app/utils/undefinedToNulls'
import DataLoader from 'dataloader'

import { BadInputError } from '@luminate/error'
import { LuminateGatewayServiceClient } from '@luminate/grpc'

export interface Tutor {
  id: string
  name: string
  tutorIconUrl: string | null
  displayName: string | null
  experience: string | null
  organizationName: string | null
  tutorFileUrl: string | null
}

export interface ITutorRepository {
  findById: (tutorId: string) => Promise<Tutor>
  findByIds: (tutorIds: string[]) => Promise<Tutor[]>
  findAll: () => Promise<Tutor[]>
  getTutorIdentity: (tutorId: string) => Promise<{ id: string; isActive: boolean }>
}

export class TutorRepository implements ITutorRepository {
  constructor(private readonly luminateGatewayServiceClient: LuminateGatewayServiceClient) {}
  private findByIdLoader = new DataLoader<string, Tutor | null>(async (tutorIds) => {
    return this.findByIds(tutorIds as string[])
  })

  findById = async (tutorId: string) => {
    const tutor = await this.findByIdLoader.load(tutorId)
    if (!tutor) {
      throw new BadInputError('marketplace', 'TUTOR_NOT_FOUND')
    }
    return tutor
  }

  findByIds = async (tutorIds: string[]) => {
    const response = await this.luminateGatewayServiceClient.getTutors({
      tutorIds,
    })
    return response.tutors.map((optionalTutor) => {
      if (!optionalTutor?.tutor) {
        throw new BadInputError('marketplace', 'TUTOR_NOT_FOUND')
      }
      return {
        ...undefinedToNulls(optionalTutor.tutor),
        id: optionalTutor.tutor.tutorId,
      }
    })
  }
  findAll = async () => {
    return this.findByIds([])
  }

  async getTutorIdentity(tutorId: string) {
    return await this.luminateGatewayServiceClient.getTutorIdentity({ tutorId })
  }
}

container.registerTransient<ITutorRepository, TutorRepository>()
