import { format } from 'date-fns'

export function formatDateString(date: Date) {
  return format(date, 'dd/MM')
}
