import { faTimer } from '@fortawesome/pro-regular-svg-icons'

import { AboutSubsection } from './subsection'
import { formatDate } from './utils'

export interface ExpiresAtSectionProps {
  expiresAt: string
}

export function ExpiresAtSection({ expiresAt }: ExpiresAtSectionProps) {
  const expiresAtDate = new Date(expiresAt)
  const now = new Date()
  const diff = expiresAtDate.getTime() - now.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const date = formatDate(expiresAt)
  const expired = diff <= 0

  return (
    <AboutSubsection
      icon={faTimer}
      title="คอร์สหมดอายุ"
      className={days > 7 ? 'text-yellow-600' : 'text-red-600'}
      boxClassName={
        days > 7
          ? 'border-yellow-600 text-yellow-400 text-center'
          : 'border-red-600 text-red-400 text-center'
      }
    >
      {expired ? 'หมดอายุแล้ว' : `อีก ${days} วัน (${date})`}
    </AboutSubsection>
  )
}
