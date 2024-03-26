import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { LuminateGatewayServiceClient } from '@luminate/grpc'
import { mainContract } from '@luminate/rest'

import { AuthService } from '.'
import { JwtService } from './jwt.service'

export class AuthController extends Controller {
  constructor(
    private jwtService: JwtService,
    private readonly authService: AuthService,
    private readonly luminateGatewayServiceClient: LuminateGatewayServiceClient
  ) {
    super()

    this.register(mainContract.auth, {
      me: async ({ request }) => {
        // Get user context
        const userContext = await request.auth.getUserContext()

        if (userContext) {
          let profileUrl: string | null = null
          if (userContext?.id) {
            const response = await this.luminateGatewayServiceClient.getUsers({
              userIds: [userContext?.id],
            })
            profileUrl = response.users[0].user?.profileUrl ?? null
          }
          return {
            status: 200,
            body: {
              id: userContext.id,
              identity: userContext.identity,
              profileUrl,
            },
          }
        }

        // Get tutor context
        const tutorContext = await request.auth.getTutorContext()
        let profileUrl: string | null = null
        if (tutorContext?.id) {
          const response = await this.luminateGatewayServiceClient.getTutors({
            tutorIds: [tutorContext?.id],
          })
          profileUrl = response.tutors[0].tutor?.tutorIconUrl ?? null
        }
        if (tutorContext) {
          return {
            status: 200,
            body: {
              id: tutorContext.id,
              identity: tutorContext.identity,
              profileUrl,
            },
          }
        }
        return {
          status: 200,
          body: null,
        }
      },
      loginAsStudent: async ({ body }) => {
        const token = jwtService.sign({
          userId: body.userId,
          type: 'loginToken',
          iat: 1000000000,
          exp: 3690990506,
        })
        return {
          status: 200,
          body: {
            token,
            success: true,
          },
        }
      },
      loginAsTutor: async ({ body }) => {
        const token = jwtService.sign({
          tutorId: body.userId,
          type: 'loginToken',
          iat: 1000000000,
          exp: 3690990506,
        })
        return {
          status: 200,
          body: {
            token,
            success: true,
          },
        }
      },
      loginTutorWithPassword: async ({ body }) => {
        const { token, refreshToken } = await this.authService.loginTutorWithPassword(
          body.username,
          body.password
        )
        return {
          status: 200,
          body: {
            token,
            refreshToken,
          },
        }
      },
    })
  }
}

container.registerSingleton<AuthController, AuthController>()
