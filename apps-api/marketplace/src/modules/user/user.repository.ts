import { container } from '@app/container'
import { undefinedToNulls } from '@app/utils/undefinedToNulls'

import { LuminateGatewayServiceClient } from '@luminate/grpc'

export interface User {
  id: string
  firstName: string
  lastName: string
  username: string
  displayName: string
  identity: string
}

export interface UserForComment {
  displayName: string
  profileUrl: string | null
}

export class UserRepository {
  constructor(private readonly luminateGatewayServiceClient: LuminateGatewayServiceClient) {}

  async findById(id: string): Promise<User | null> {
    // TODO: get user from everyday
    return {
      id: id,
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      displayName: 'John Doe',
      identity: 'LIVE_USER',
    }
  }

  async findByIds(ids: string[]): Promise<(UserForComment | null)[]> {
    const response = await this.luminateGatewayServiceClient.getUsers({ userIds: ids })
    return response.users.map((optionalUser) => {
      if (!optionalUser?.user) {
        return null
      }
      return {
        ...undefinedToNulls(optionalUser.user),
      }
    })
  }

  async getUserIdentity(userId: string) {
    return await this.luminateGatewayServiceClient.getUserIdentity({ userId })
  }
}

container.registerTransient<UserRepository, UserRepository>()
