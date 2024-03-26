import { format } from 'date-fns'

export function formatAsDate(isoString: string) {
  return format(new Date(isoString), 'dd/MM/yyyy')
}
