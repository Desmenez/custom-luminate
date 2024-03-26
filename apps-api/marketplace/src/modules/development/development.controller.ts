import { environments } from '@app/common/env'
import { container } from '@app/container'
import { FastifyInstance } from 'fastify'

import { JwtService } from '../auth'
import { impersonateUi } from './development.assets'
import { DevelopmentAuthQuery } from './development.schema'

export class DevelopmentController {
  constructor(
    private readonly fastify: FastifyInstance,
    private readonly jwtService: JwtService
  ) {
    if (environments.DEVELOPMENT_ENABLE_AUTH_IMPERSONATION) {
      this.registerAuthImpersonate()
    }
  }

  private registerAuthImpersonate() {
    this.fastify.get('/development/impersonate', async (_, reply) => {
      reply.header('Content-Type', 'text/html; charset=utf-8')
      reply.send(impersonateUi)
    })
    this.fastify.post('/development/impersonate', async (request, reply) => {
      const query = DevelopmentAuthQuery.parse(request.query)
      const body = request.body as any
      const keys = Object.keys(body)
      let userId: string | null = null
      let tutorId: string | null = null

      const predefinedKey = keys.find((key) => key.startsWith('predefined-'))
      if (predefinedKey) {
        if (predefinedKey.startsWith('predefined-user-')) {
          userId = predefinedKey.replace('predefined-user-', '')
        } else if (predefinedKey.startsWith('predefined-tutor-')) {
          tutorId = predefinedKey.replace('predefined-tutor-', '')
        }
      }

      if (keys.includes('custom-user')) {
        userId = body.userId
      } else if (keys.includes('custom-tutor')) {
        tutorId = body.userId
      }

      const tokenPayload: any = {
        type: 'loginToken',
        iat: new Date('1970-01-01T00:00:00.000Z').getTime() / 1000,
        exp: new Date('2100-01-01T00:00:00.000Z').getTime() / 1000,
      }
      if (userId) {
        tokenPayload.userId = userId
      } else if (tutorId) {
        tokenPayload.tutorId = tutorId
      }
      const token = this.jwtService.sign(tokenPayload)

      reply.redirect(303, `${query.redirect_uri}?state=${query.state}&code=${token}`)
    })
    this.fastify.post('/development/impersonate/token', async (request, reply) => {
      const body = request.body as any
      reply.send({
        access_token: body.code,
        token_type: 'bearer',
      })
    })
  }
}

container.registerSingleton<DevelopmentController, DevelopmentController>()
