import { useEffect, useState } from 'react'

export function useResetInTime<T>(initialValue: T, toBeValue: T, timeout: number) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(toBeValue)
    }, timeout)

    return () => clearTimeout(timer)
  }, [toBeValue, timeout, value])

  return [value, setValue] as const
}
