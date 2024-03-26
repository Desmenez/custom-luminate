import { bisector } from '@visx/vendor/d3-array'

import { StudentGraphDataPoint } from '@luminate/rest'

export function getDate(data: StudentGraphDataPoint) {
  return new Date(data.date)
}

export function getStudentCountValue(data: StudentGraphDataPoint) {
  return data.newStudents
}

export const bisectDate = bisector<StudentGraphDataPoint, Date>((d) => new Date(d.date)).left
