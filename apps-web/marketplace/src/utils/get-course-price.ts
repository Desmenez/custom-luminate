import { LiveCourseType } from '@luminate/database'

interface CourseForCoursePrice {
  type: LiveCourseType
  onlinePrice: number | null
  onsitePrice: number | null
  originalOnlinePrice: number | null
  originalOnsitePrice: number | null
}

export function getCoursePrice(course: CourseForCoursePrice) {
  switch (course.type) {
    case LiveCourseType.LIVE:
    case LiveCourseType.TAPE:
      return course.onlinePrice!
    case LiveCourseType.FUSION:
      return Math.min(course.onlinePrice ?? Infinity, course.onsitePrice ?? Infinity)
    case LiveCourseType.ONSITE:
      return course.onsitePrice!
  }
}

function calcFusionFullPrice(course: CourseForCoursePrice) {
  if (course.onlinePrice && course.onsitePrice) {
    if (course.onlinePrice <= course.onsitePrice) {
      return course.originalOnlinePrice ?? course.onlinePrice
    }
    return course.originalOnsitePrice ?? course.onsitePrice
  }
  if (course.onlinePrice) {
    return course.originalOnlinePrice ?? course.onlinePrice
  }
  return course.originalOnsitePrice ?? course.onsitePrice!
}

export function getFullPrice(course: CourseForCoursePrice) {
  switch (course.type) {
    case LiveCourseType.LIVE:
    case LiveCourseType.TAPE:
      return course.originalOnlinePrice ?? course.onlinePrice!
    case LiveCourseType.FUSION:
      return calcFusionFullPrice(course)
    case LiveCourseType.ONSITE:
      return course.originalOnsitePrice ?? course.onsitePrice!
  }
}
