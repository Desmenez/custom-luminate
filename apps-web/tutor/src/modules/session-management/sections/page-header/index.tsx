import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@luminate/ui'

export interface PageHeaderSectionProps {
  courseName: string
  sessionName: string
}

export function PageHeaderSection({ courseName, sessionName }: PageHeaderSectionProps) {
  return (
    <section className="flex flex-col mt-2 lg:mt-6 gap-2 lg:gap-4">
      <BackButton />
      <div className="text-gray-50 leading-normal max-lg:px-4">
        <p className="text-sm lg:text-base">{courseName}</p>
        <h1 className="font-semibold text-lg lg:text-2xl">{sessionName}</h1>
      </div>
    </section>
  )
}

function BackButton() {
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
