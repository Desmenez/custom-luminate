import { container } from '@app/container'

import { GetBasePlansQueryParams, GetBasePlansResponse } from '@luminate/rest'

export class BasePlanRepository {
  getBasePlans(_args: GetBasePlansQueryParams): GetBasePlansResponse {
    return [
      {
        id: '1',
        name: 'Base Plan 1',
        subject: {
          id: '1',
          name: 'Subject 1',
        },
      },
      {
        id: '2',
        name: 'Base Plan 2',
        subject: {
          id: '2',
          name: 'Subject 2',
        },
      },
    ]
  }
}

container.registerSingleton<BasePlanRepository>()
