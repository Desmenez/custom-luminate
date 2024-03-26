import { useEffect, useState } from 'react'

export function useCurrentSecond() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    let stop = false
    function timer() {
      const currentMillis = new Date().getTime()
      const currentSecs = Math.floor(currentMillis / 1000)
      const next = currentSecs * 1000 + 1000
      const delay = next - currentMillis
      if (stop) return
      setNow(new Date(currentSecs * 1000))
      setTimeout(timer, delay)
    }
    timer()
    return () => {
      stop = false
    }
  }, [])

  return now
}
