import { getIdentity } from '@app/common/iam'
import { container } from '@app/container'
import { FastifyRequest } from 'fastify'
import { ClientError, Status } from 'nice-grpc'

import { AuthorizationError } from '@luminate/error'
import { LuminateGatewayServiceClient } from '@luminate/grpc'

import { ITutorRepository } from '../tutor'
import { UserRepository } from '../user'
import { JwtService } from './jwt.service'
import { TutorContext, TutorJwtPayload, UserContext, UserJwtPayload } from './types'

export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly tutorRepository: ITutorRepository,
    private readonly luminateGatewayServiceClient: LuminateGatewayServiceClient
  ) {}

  async verifyJwtForRequest(request: FastifyRequest) {
    let userId: string | null = null
    let tutorId: string | null = null
    const authorizationToken = request.headers.authorization
    if (!authorizationToken) {
      return { userId, tutorId }
    }
    if (!authorizationToken.startsWith('Bearer ')) {
      return { userId, tutorId }
    }
    const token = authorizationToken.split(' ')[1]
    try {
      const decoded = this.jwtService.verify(token)
      if (this.isUserJwt(decoded) && decoded.type === 'loginToken') {
        userId = decoded.userId
      } else if (this.isTutorJwt(decoded) && decoded.type === 'loginToken') {
        tutorId = decoded.tutorId
      }
    } catch (err) {
      console.error(err)
    }
    return { userId, tutorId }
  }

  private isUserJwt(payload: unknown): payload is UserJwtPayload {
    return (
      typeof payload === 'object' && payload != null && 'userId' in payload && 'type' in payload
    )
  }

  private isTutorJwt(token: unknown): token is TutorJwtPayload {
    return typeof token === 'object' && token != null && 'tutorId' in token && 'type' in token
  }

  async getUserContext(userId: string): Promise<UserContext | null> {
    try {
      const user = await this.userRepository.getUserIdentity(userId)
      if (!user.isActive) {
        throw new AuthorizationError('marketplace', 'INACTIVE_USER')
      }
      return {
        id: user.id,
        identity: getIdentity(user.identity),
      }
    } catch (e) {
      if (e instanceof ClientError && e.code === Status.NOT_FOUND) {
        throw new AuthorizationError('marketplace', 'INVALID_CREDENTIALS')
      }
      throw e
    }
  }

  async getTutorContext(tutorId: string): Promise<TutorContext | null> {
    try {
      const tutor = await this.tutorRepository.getTutorIdentity(tutorId)
      if (!tutor.isActive) {
        throw new AuthorizationError('marketplace', 'INACTIVE_USER')
      }
      return {
        id: tutor.id,
        identity: 'tutor',
      }
    } catch (e) {
      if (e instanceof ClientError && e.code === Status.NOT_FOUND) {
        throw new AuthorizationError('marketplace', 'INVALID_CREDENTIALS')
      }
      throw e
    }
  }

  async loginTutorWithPassword(username: string, password: string) {
    try {
      return await this.luminateGatewayServiceClient.loginTutorWithPassword({ username, password })
    } catch (e) {
      if (e instanceof ClientError && e.code === Status.UNAUTHENTICATED) {
        throw new AuthorizationError('marketplace', 'INVALID_CREDENTIALS')
      }
      throw e
    }
  }
}

container.registerSingleton<AuthService, AuthService>()
