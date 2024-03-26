import { format } from 'date-fns'
import th from 'date-fns/locale/th'

export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return format(date, 'd MMMM yyyy', { locale: th })
}
