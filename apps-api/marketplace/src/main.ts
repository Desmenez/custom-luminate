import '@app/container/register'
import cors from '@fastify/cors'
import FastifyFormbodyPlugin from '@fastify/formbody'
import cuid from 'cuid'
import Fastify, { FastifyInstance } from 'fastify'
import FastifySSEPlugin from 'fastify-sse-v2'

import { BackendError, getErrorDetail } from '@luminate/error'
import { mainContract } from '@luminate/rest'

import { environments } from './common/env'
import { logger } from './common/logger'
import { swaggerPlugin } from './common/swagger'
import { container } from './container'
import './container/register'
import { authPlugin } from './modules/auth'
import { registerControllers } from './router'
import { SwitchToSSEError } from './utils'

async function start() {
  // Create Fastify instance
  const fastify = Fastify({
    genReqId: (req) => {
      const id = cuid()
      req.headers['x-request-id'] = id
      return id
    },
    // Register logger as fastify logger
    logger: logger,
  })

  await fastify.register(FastifyFormbodyPlugin)
  await fastify.register(FastifySSEPlugin)

  // CORS
  await fastify.register(cors, {
    origin: '*',
  })

  await fastify.register(authPlugin)

  // Setup DI container
  container.registerSingleton<FastifyInstance>(() => fastify)

  // Register Swagger if enabled
  if (environments.SWAGGER_ENABLED) {
    await fastify.register(swaggerPlugin, {
      contract: mainContract,
      info: {
        title: 'Luminate API',
        version: '0.0.1',
      },
      routePrefix: '/docs',
    })
  }

  registerControllers()

  fastify.setErrorHandler(function (error, _request, reply) {
    if (error instanceof SwitchToSSEError) {
      // do nothing
      return
    }
    this.log.error(error)
    if (error instanceof BackendError) {
      const backendError = error as BackendError<any>
      const errorDetail = getErrorDetail(backendError)
      const statusCode =
        backendError.status ?? (errorDetail.code === 'INTERNAL_SERVER_ERROR' ? 500 : 400)
      reply.status(statusCode).send({
        code: errorDetail.code,
        message: errorDetail.message,
        description: errorDetail.description,
        display: errorDetail.display,
      })
    } else {
      const statusCode = error.statusCode ?? 500
      reply.status(statusCode).send({
        message: error.message,
      })
    }
  })

  fastify.addHook('onError', (_request, _reply, _error, done) => {
    done()
  })

  try {
    await fastify.listen({
      port: environments.PORT,
      host: '0.0.0.0',
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
