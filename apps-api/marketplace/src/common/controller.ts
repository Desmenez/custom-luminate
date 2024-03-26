import { AppRouter } from '@ts-rest/core'
import { FastifyInstance } from 'fastify'

import { container } from '../container'
import { server } from '../ts-rest'

type ContractHandler<TContract extends AppRouter> = Parameters<typeof server.router<TContract>>[1]

export abstract class Controller {
  register<TContract extends AppRouter>(contract: TContract, handler: ContractHandler<TContract>) {
    const fastify = container.get<FastifyInstance>()
    const router = server.router(contract, handler)
    fastify.register(server.plugin(router), { responseValidation: true, jsonQuery: true })
  }
}
