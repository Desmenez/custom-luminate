import { format } from 'date-fns'
import th from 'date-fns/locale/th'

export function formatRating(rating: number) {
  return rating.toFixed(1)
}

export function formatDateAndTime(_date: unknown) {
  if (typeof _date !== 'string') return
  const date = new Date(_date)
  return format(date, 'd MMMM yyyy, HH:mm น.', { locale: th })
}
