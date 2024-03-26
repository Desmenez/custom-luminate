import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  EventSourcePolyfill,
  EventSourcePolyfillInit,
  type MessageEvent,
} from 'event-source-polyfill'
import { ValuesType } from 'utility-types'

import { useLatestFunction } from './use-latest-function'

export const EventSourceConnectionStatus = {
  CONNECTED: 'connected',
  CONNECTING: 'connecting',
  DISCONNECTED: 'disconnected',
} as const
export type EventSourceConnectionStatus = ValuesType<typeof EventSourceConnectionStatus>

export interface UseEventSourceProps {
  /**
   * The URL to connect to SSE-provided server
   */
  url: string

  /**
   * The token to use for authentication. It'll be added to the headers as `Authorization: Bearer ${token}`
   */
  token: string | null

  /**
   * If true, the EventSource connection will be established on mount
   */
  autoConnect?: boolean

  /**
   * The function to call when a message is received
   * @param message - The message event
   * @returns
   */
  onMessage: (message: MessageEvent) => void

  /**
   * The function to call when an error occurs
   * @param err - The error event
   * @returns
   */
  onError: (err: ErrorEvent) => void

  /**
   * The EventSource configuration
   */
  config?: EventSourcePolyfillInit & {
    debug?: boolean
  }
}

export interface UseEventSourceReturn {
  /**
   * The EventSource connection status e.g. connected, connecting, disconnected
   */
  status: EventSourceConnectionStatus

  /**
   * The last error that occurred
   */
  error: ErrorEvent | null

  /**
   * The function to establish the EventSource connection
   * @returns
   */
  openStream: () => void

  /**
   * The function to close the EventSource connection
   * @returns
   */
  closeStream: () => void
}

export const useEventSource = ({
  url,
  token,
  autoConnect = true,
  onMessage: rawOnMessage,
  onError: rawOnError,
  config,
}: UseEventSourceProps): UseEventSourceReturn => {
  // Merge the token into the headers
  const eventSourceConfig: EventSourcePolyfillInit = {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }

  const [connectionStatus, setConnectionStatus] = useState<EventSourceConnectionStatus>(
    EventSourceConnectionStatus.DISCONNECTED
  )
  const [error, setError] = useState<ErrorEvent | null>(null)
  const streamRef = useRef<EventSource>()

  const onMessage = useLatestFunction(rawOnMessage)
  const onError = useLatestFunction(rawOnError)

  /**
   * Open the EventSource connection
   */
  const openStream = useCallback(() => {
    setConnectionStatus(EventSourceConnectionStatus.CONNECTING)

    const stream = new EventSourcePolyfill(url, eventSourceConfig)

    // Handle connection status
    stream.onopen = () => {
      if (config?.debug) console.debug('EventSource connected to', url)
      setConnectionStatus(EventSourceConnectionStatus.CONNECTED)
    }

    // Handle when the connection is lost or error
    stream.onerror = (message: unknown) => {
      if (!(message instanceof ErrorEvent)) {
        console.error('EventSource error', message)
        return
      }
      if (config?.debug) console.error('EventSource error', message)
      onError?.(message)
      setError(message)
    }

    // Handle when SSE message is received
    stream.onmessage = (message: MessageEvent) => {
      if (config?.debug) console.debug('EventSource message', message)
      onMessage?.(message)
    }

    // Store the connection into ref
    streamRef.current = stream
  }, [url, onMessage])

  /**
   * Close the EventSource connection
   */
  const closeStream = useCallback(() => {
    if (streamRef.current && streamRef.current.close) {
      streamRef.current.close()
      streamRef.current = undefined
      setConnectionStatus(EventSourceConnectionStatus.DISCONNECTED)
      setError(null)
    }
  }, [])

  const result = useMemo<UseEventSourceReturn>(() => {
    return {
      status: connectionStatus,
      error,
      closeStream,
      openStream,
    }
  }, [openStream, connectionStatus, error])

  useEffect(() => {
    // Open connection when the hook is mounted
    if (autoConnect) {
      openStream()
      return closeStream
    }
  }, [openStream, autoConnect])

  return result
}
