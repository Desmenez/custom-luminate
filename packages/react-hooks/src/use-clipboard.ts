import { useCallback, useEffect, useState } from 'react'

import copy from 'copy-to-clipboard'

// Taken from https://github.com/chakra-ui/chakra-ui/blob/d8c35eb20581d315fb155800120ab7940f0e7f1e/packages/legacy/hooks/src/use-clipboard.ts#L26

const TIMEOUT = 1500
export function useClipboard(value: string) {
  const [hasCopied, setHasCopied] = useState(false)
  const onCopy = useCallback(() => {
    const didCopy = copy(value)
    setHasCopied(didCopy)
  }, [value])

  useEffect(() => {
    if (hasCopied) {
      const timeoutId = setTimeout(() => {
        setHasCopied(false)
      }, TIMEOUT)
      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [hasCopied])

  return {
    onCopy,
    hasCopied,
  }
}
