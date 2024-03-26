import { liveCoursePolicy } from '@app/modules/live-course/iam'
import { liveSessionPolicy } from '@app/modules/live-session/iam'
import { createIdentity } from '@softnetics/rbac'

export const iam = createIdentity({
  policies: [liveCoursePolicy, liveSessionPolicy],
  identities: {
    freemium: ['live-course.live-stream-student-freemium'],
    premium: ['live-course.live-stream-student-premium'],
    live_user: ['live-course.live-stream-student-live'],
    admin: ['live-course.live-stream-admin', 'live-session.live-stream-admin'],
    tutor: ['live-course.live-stream-teacher', 'live-session.live-stream-teacher'],
    dev: ['live-course.live-stream-admin', 'live-session.live-stream-admin'],
  },
})

export type Identity = (typeof iam)['identities'][number]
export type Permission = (typeof iam)['allPermissions'][number]

const allIdentities = new Set<string>(iam.identities)
export function getIdentity(identity: string) {
  const identityLower = identity.toLowerCase()
  if (!allIdentities.has(identityLower)) {
    return 'freemium'
  }
  return identityLower as Identity
}
