import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@luminate/ui'

export function BackButton() {
  const router = useRouter()
  return (
    <button
      className="flex items-center gap-2 px-1 py-0.5 text-sm text-yellow-50 leading-normal"
      onClick={() => router.back()}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 text-gray-50" />
      กลับ
    </button>
  )
}
