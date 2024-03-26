import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useEffect, useState } from 'react'

import type { StorageKey } from '@luminate/types'

import { useEventCallback } from './use-event-callback'
// See: https://usehooks-ts.com/react-hook/use-event-listener
import { useEventListener } from './use-event-listener'

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent
    'session-storage': CustomEvent
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>

type RemoveLiteralType<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number
  : T extends Record<string, unknown>
  ? { [P in keyof T]: RemoveLiteralType<T[P]> }
  : T extends Array<infer G>
  ? Array<RemoveLiteralType<G>>
  : T

export function useStorage<T extends keyof StorageKey>(
  key: T,
  type: 'local' | 'session',
  initialValue?: RemoveLiteralType<StorageKey[T]>
): [
  RemoveLiteralType<StorageKey[T]> | undefined,
  SetValue<RemoveLiteralType<StorageKey[T]> | undefined>,
] {
  // Get from local/session storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): RemoveLiteralType<StorageKey[T]> | undefined => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      let item: string | null = null
      if (type === 'local') {
        item = window.localStorage.getItem(key)
      }
      if (type === 'session') {
        item = window.sessionStorage.getItem(key)
      }

      return item ? (parseJSON(item) as RemoveLiteralType<StorageKey[T]>) : initialValue
    } catch (error) {
      if (type === 'local') {
        console.warn(`Error reading localStorage key “${key}”:`, error)
      }
      if (type === 'session') {
        console.warn(`Error reading sessionStorage key “${key}”:`, error)
      }
      return initialValue
    }
  }, [initialValue, key, type])

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<RemoveLiteralType<StorageKey[T]> | undefined>(
    readValue
  )

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage / sessionStorage.
  const setValue: SetValue<RemoveLiteralType<StorageKey[T]> | undefined> = useEventCallback(
    (value) => {
      // Prevent build error "window is undefined" but keeps working
      if (typeof window == 'undefined') {
        if (type === 'local') {
          console.warn(
            `Tried setting localStorage key “${key}” even though environment is not a client`
          )
        }
        if (type === 'session') {
          console.warn(
            `Tried setting sessionStorage key “${key}” even though environment is not a client`
          )
        }
      }

      try {
        // Allow value to be a function so we have the same API as useState
        const newValue = value instanceof Function ? value(storedValue) : value

        // Remove key-value if undefined instead of saving as undefined
        if (newValue === undefined) {
          if (type === 'local') {
            // Remove key from local storage
            window.localStorage.removeItem(key)
          }
          if (type === 'session') {
            // Remove key from session storage
            window.sessionStorage.removeItem(key)
          }
        } else {
          const newValueJSON = JSON.stringify(newValue)

          if (type === 'local') {
            // Save to local storage
            window.localStorage.setItem(key, newValueJSON)
          }
          if (type === 'session') {
            // Save to session storage
            window.sessionStorage.setItem(key, newValueJSON)
          }
        }

        // Save state
        setStoredValue(newValue)

        // We dispatch a custom event so every useStorage hook are notified
        if (type === 'local') {
          window.dispatchEvent(new Event('local-storage'))
        }
        if (type === 'session') {
          window.dispatchEvent(new Event('session-storage'))
        }
      } catch (error) {
        if (type === 'local') {
          console.warn(`Error setting localStorage key “${key}”:`, error)
        }
        if (type === 'session') {
          console.warn(`Error setting sessionStorage key “${key}”:`, error)
        }
      }
    }
  )

  useEffect(() => {
    setStoredValue(readValue())
  }, [])

  const handleStorageChange = useCallback(
    (event: CustomEvent | StorageEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue]
  )

  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange)

  // this is a custom event, triggered in writeValueToLocalStorage/writeValueTosessionStorage
  useEventListener(`${type}-storage`, handleStorageChange)

  return [storedValue, setValue]
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.log('parsing error on', { value })
    return undefined
  }
}
