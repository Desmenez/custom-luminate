import { container } from '@app/container'
import fp from 'fastify-plugin'

import { UserContext } from '.'
import { AuthContext } from './auth.context'
import { AuthService } from './auth.service'

interface IFastifyRequest {
  auth: AuthContext
  /**
   * @deprecated Use `request.auth.getUserContext()` instead
   */
  getUserContext: () => Promise<UserContext | null>
}
declare module 'fastify' {
  interface FastifyRequest extends IFastifyRequest {}
}

export const authPlugin = fp(async (fastify, _opts) => {
  const authService = container.get<AuthService>()
  fastify.addHook('onRequest', async (request, _reply) => {
    const { userId, tutorId } = await authService.verifyJwtForRequest(request)
    request.auth = new AuthContext(authService, userId, tutorId)
  })
  fastify.decorateRequest('getUserContext', async function () {
    return await this.auth.getUserContext()
  })
})
