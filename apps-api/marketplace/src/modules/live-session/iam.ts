import { createPolicy } from '@softnetics/rbac'

export const liveSessionPolicy = createPolicy({
  name: 'live-session',
  permissions: {
    'live-session': ['get', 'create', 'update', 'delete', 'get-key'],
  },
  roles: {
    'live-stream-teacher': ['live-session.get-key'],
    'live-stream-admin': [
      'live-session.get',
      'live-session.create',
      'live-session.update',
      'live-session.delete',
      'live-session.get-key',
    ],
  },
})
