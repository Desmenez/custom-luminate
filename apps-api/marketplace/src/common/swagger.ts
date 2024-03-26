import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { AppRouter } from '@ts-rest/core'
import { generateOpenApi } from '@ts-rest/open-api'
import { FastifyPluginAsync } from 'fastify'
import fs from 'fs/promises'
import { InfoObject } from 'openapi3-ts'

import { environments } from './env'

export interface SwaggerPluginOptions {
  contract: AppRouter
  info: InfoObject
  routePrefix: string
}

export const swaggerPlugin: FastifyPluginAsync<SwaggerPluginOptions> = async (fastify, opts) => {
  const openApiDocument = generateOpenApi(
    opts.contract,
    { info: opts.info },
    { setOperationId: true, jsonQuery: true }
  )
  openApiDocument.components = {
    securitySchemes: {},
  }
  if (environments.DEVELOPMENT_ENABLE_AUTH_IMPERSONATION) {
    openApiDocument.components!.securitySchemes!.impersonate = {
      type: 'oauth2',
      flows: {
        authorizationCode: {
          authorizationUrl: '/development/impersonate',
          tokenUrl: '/development/impersonate/token',
          scopes: {},
        },
      },
    }
  }
  openApiDocument.components!.securitySchemes!.bearerAuth = {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  }
  openApiDocument.security = [{ impersonate: [], bearerAuth: [] }]

  await fastify.register(fastifySwagger)
  await fastify.register(fastifySwaggerUi, {
    routePrefix: opts.routePrefix,
    logo: {
      type: 'image/png',
      content: await fs.readFile('./full-logo-wt.png'),
    },
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
    staticCSP: true,
    transformSpecification: () => {
      return openApiDocument
    },
  })
}
