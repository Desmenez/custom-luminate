import { useCallback, useState } from 'react'

export function useDisclosure(initialValue = false) {
  const [show, setShow] = useState(initialValue)
  const onOpen = useCallback(() => {
    setShow(true)
  }, [])
  const onClose = useCallback(() => {
    setShow(false)
  }, [])
  const toggle = useCallback(() => {
    setShow((value) => !value)
  }, [])
  return { show, onOpen, onClose, toggle, setShow }
}
