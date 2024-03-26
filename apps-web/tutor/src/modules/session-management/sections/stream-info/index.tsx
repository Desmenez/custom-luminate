import { useId } from 'react'

import { useCopyToClipboard } from '@luminate/react-hooks'
import { LiveSessionForTutor } from '@luminate/rest'
import { Button, cn, toast } from '@luminate/ui'

import { Section } from '../../components/section'

export interface StreamInfoSectionProps {
  className?: string
  streamInfo: NonNullable<LiveSessionForTutor['streamInfo']>
}

export function StreamInfoSection({
  className,
  streamInfo: { streamUrl, streamKey },
}: StreamInfoSectionProps) {
  const toastId = useId()

  return (
    <Section className={cn('flex flex-col gap-4', className)}>
      <Row toastId={toastId} label="คัดลอกลิงค์เพื่อเริ่มการถ่ายทอดสด" value={streamUrl} />
      <Row toastId={toastId} label="Key:" value={streamKey} />
    </Section>
  )
}

interface RowProps {
  toastId: string
  label: string
  value: string
}

function Row({ label, value, toastId }: RowProps) {
  const [, copy] = useCopyToClipboard()

  function handleCopy() {
    copy(value)
    toast.success('คัดลอกแล้ว', { id: toastId })
  }

  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-2 text-gray-50 leading-normal">
      <p className="font-semibold text-[18px] xl:text-lg">{label}</p>
      <div className="flex items-center gap-4 xl:flex-1">
        <p className="text-yellow-600 w-0 flex-1 truncate xl:text-end">{value}</p>
        <Button onClick={handleCopy} variant="outline" className="lg:hidden -my-1.5" size="sm">
          คัดลอก
        </Button>
        <Button onClick={handleCopy} variant="outline" className="max-lg:hidden">
          คัดลอก
        </Button>
      </div>
    </div>
  )
}
