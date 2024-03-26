import { getClientCookie } from '@app/utils/get-client-cookie'
import { tsRestFetchApi } from '@ts-rest/core'

import { mainContract } from '@luminate/rest'
import { initQueryClient } from '@luminate/ts-rest-query'

import { envClient } from '../env/client'

export const reactQueryClient = initQueryClient(mainContract, {
  baseUrl: envClient.NEXT_PUBLIC_API_BASE_URL,
  baseHeaders: {
    'Content-Type': 'application/json',
  },
  api: async (args) => {
    const accessToken = getClientCookie('token')
    if (accessToken) args.headers['Authorization'] = `Bearer ${accessToken}`
    return tsRestFetchApi(args)
  },
  jsonQuery: true,
})
