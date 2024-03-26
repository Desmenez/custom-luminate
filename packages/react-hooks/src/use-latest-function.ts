import { useCallback, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useLatestFunction<T extends (...args: readonly any[]) => void>(func: T) {
  const ref = useRef<T>(func)
  ref.current = func
  return useCallback((...args: Parameters<T>) => ref.current(...args), [])
}
