import { useEffect, useState } from 'react'

import { differenceInSeconds } from 'date-fns'

import { useCountdown } from '@luminate/react-hooks'
import { useLatestFunction } from '@luminate/react-hooks/src/use-latest-function'
import { convertIntervalToTimeString } from '@luminate/utils'

interface CountdownProps {
  startAt: Date
  expiresAt: Date
  onExpire: () => void
}

export const Countdown: React.FC<CountdownProps> = ({
  startAt,
  expiresAt,
  onExpire: rawOnExpire,
}) => {
  const [show, setShow] = useState(false)

  const [count, { startCountdown }] = useCountdown({
    countStart: differenceInSeconds(expiresAt, startAt),
    intervalMs: 1000, // count every 1 second
  })

  const timeLeft = Math.max(count, 0)
  const isExpired = timeLeft === 0

  const onExpire = useLatestFunction(rawOnExpire)

  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    if (!isExpired) return
    onExpire()
  }, [onExpire, isExpired])

  useEffect(() => {
    startCountdown()
  }, [startCountdown])

  const { minutes, seconds } = convertIntervalToTimeString(timeLeft)

  if (!show) {
    return null
  }

  return (
    <div className="font-normal text-sm w-fit">
      <span className="text-white">โปรดชำระเงินภายในเวลา</span>{' '}
      <span className="text-yellow-400">
        {minutes}:{seconds}
      </span>
    </div>
  )
}
