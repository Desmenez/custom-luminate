import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { useRouter } from 'next/router'

import { useDebounce } from '@luminate/react-hooks'

interface LoadingContextValue {
  isLoading: boolean
  setLoadingCount: Dispatch<SetStateAction<number>>
}

const LoadingContext = createContext<LoadingContextValue>(null as unknown as LoadingContextValue)

export interface LoadingProviderProps {
  children?: React.ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loadingCount, setLoadingCount] = useState(0)
  const isLoading = useDebounce(loadingCount > 0, 500)

  const value = useMemo(() => ({ isLoading, setLoadingCount }), [isLoading])

  return (
    <LoadingContext.Provider value={value}>
      {children}
      <NextRouterLoadingStatus />
    </LoadingContext.Provider>
  )
}

export function useLoadingStatus(loading: boolean) {
  const { setLoadingCount } = useContext(LoadingContext)

  useEffect(() => {
    if (!loading) return
    setLoadingCount((count) => count + 1)
    return () => {
      setLoadingCount((count) => count - 1)
    }
  }, [loading])
}

export function useIsLoading() {
  const { isLoading } = useContext(LoadingContext)
  return isLoading
}

function NextRouterLoadingStatus() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useLoadingStatus(loading)

  useEffect(() => {
    function setOnLoading() {
      setLoading(true)
    }
    function setNotLoading() {
      setLoading(false)
    }

    router.events.on('routeChangeStart', setOnLoading)
    router.events.on('routeChangeComplete', setNotLoading)
    router.events.on('routeChangeError', setNotLoading)

    return () => {
      router.events.off('routeChangeStart', setOnLoading)
      router.events.off('routeChangeComplete', setNotLoading)
      router.events.off('routeChangeError', setNotLoading)
    }
  }, [router])

  return null
}
