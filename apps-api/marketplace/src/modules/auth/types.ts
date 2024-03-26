import { Identity } from '@app/common/iam'

export interface UserContext {
  id: string
  identity: Identity
}

export interface UserJwtPayload {
  userId: string
  type: 'loginToken' | 'refreshToken'
}

export interface TutorContext {
  id: string
  identity: Identity
}

export interface TutorJwtPayload {
  tutorId: string
  type: 'loginToken' | 'refreshToken'
}
