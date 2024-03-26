import { initContract } from '@ts-rest/core'

// Need to explicitly specify the type here, else it errors
export const contract: ReturnType<typeof initContract> = initContract()
