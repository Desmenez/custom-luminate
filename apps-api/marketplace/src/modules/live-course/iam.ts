import { createPolicy } from '@softnetics/rbac'

export const liveCoursePolicy = createPolicy({
  name: 'live-course',
  permissions: {
    'live-course': ['get', 'create', 'update', 'delete', 'get-package', 'get-admin'],
    'live-course-student': ['get'],
    'live-course-comment': ['delete'],
  },
  roles: {
    'live-stream-teacher': ['live-course.get'],
    'live-stream-admin': [
      'live-course.get',
      'live-course.get-admin',
      'live-course.create',
      'live-course.update',
      'live-course.delete',
      'live-course.get-package',
      'live-course-comment.delete',
    ],
    'live-stream-student-freemium': ['live-course-student.get', 'live-course.get'],
    'live-stream-student-premium': ['live-course-student.get', 'live-course.get'],
    'live-stream-student-live': ['live-course-student.get', 'live-course.get'],
  },
})
