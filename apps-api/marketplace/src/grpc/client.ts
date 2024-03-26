import { environments } from '@app/common/env'
import { container } from '@app/container'
import { createChannel, createClient } from 'nice-grpc'

import { LuminateGatewayServiceClient, LuminateGatewayServiceDefinition } from '@luminate/grpc'

const channel = createChannel(`${environments.EVERYDAY_HOST}:${environments.EVERYDAY_GRPC_PORT}`)

const luminateGatewayServiceClient: LuminateGatewayServiceClient = createClient(
  LuminateGatewayServiceDefinition,
  channel
)

container.registerSingleton<LuminateGatewayServiceClient>(() => luminateGatewayServiceClient)
