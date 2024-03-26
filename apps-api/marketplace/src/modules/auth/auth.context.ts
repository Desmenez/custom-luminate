import { Permission, iam } from '@app/common/iam'

import { AuthorizationError } from '@luminate/error'

import { AuthService } from './auth.service'
import { TutorContext, UserContext } from './types'

export class AuthContext {
  private userContextPromise: Promise<UserContext | null> | null = null
  private tutorContextPromise: Promise<TutorContext | null> | null = null

  constructor(
    private readonly authService: AuthService,
    private readonly userId: string | null,
    private readonly tutorId: string | null
  ) {}

  async getIdentity() {
    const userContext = await this.getUserContext()
    if (userContext) {
      return userContext.identity
    }
    const tutorContext = await this.getTutorContext()
    if (tutorContext) {
      return tutorContext.identity
    }
    return null
  }

  async hasPermissions(...permissions: Permission[]) {
    const identity = await this.getIdentity()
    if (!identity) {
      throw new AuthorizationError('marketplace', 'INVALID_CREDENTIALS')
    }
    return iam.enforce(identity, permissions)
  }

  async requirePermissions(...permissions: Permission[]) {
    if (!(await this.hasPermissions(...permissions))) {
      throw new AuthorizationError('marketplace', 'INSUFFICIENT_PERMISSIONS')
    }
  }

  async getUserContext() {
    if (!this.userId) {
      return null
    }
    if (!this.userContextPromise) {
      this.userContextPromise = this.authService.getUserContext(this.userId)
    }
    return await this.userContextPromise
  }

  async getTutorContext() {
    if (!this.tutorId) {
      return null
    }
    if (!this.tutorContextPromise) {
      this.tutorContextPromise = this.authService.getTutorContext(this.tutorId)
    }
    return await this.tutorContextPromise
  }

  async requireUserContext() {
    const userContext = await this.getUserContext()
    if (!userContext) {
      throw new AuthorizationError('marketplace', 'INVALID_CREDENTIALS')
    }
    return userContext
  }

  async requireTutorContext() {
    const tutorContext = await this.getTutorContext()
    if (!tutorContext) {
      throw new AuthorizationError('marketplace', 'INVALID_CREDENTIALS')
    }
    return tutorContext
  }
}
