import { format } from 'date-fns'
import { th } from 'date-fns/locale'

export const formatSessionDuration = (startTime: string, endTime: string) => {
  const dateString = format(new Date(startTime), 'EEEEEE d MMM yyyy', { locale: th })
  const startTimeString = format(new Date(startTime), 'HH:mm')
  const endTimeString = format(new Date(endTime), 'HH:mm')
  return `${dateString}, ${startTimeString} - ${endTimeString}`
}
