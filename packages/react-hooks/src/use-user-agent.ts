import { useEffect, useRef, useState } from 'react'

import { UAParser } from 'ua-parser-js'

import { isSSR } from '@luminate/utils'

type IUseUserAgentReturn = Omit<UAParser.IResult, 'ua'>

interface UAPayload {
  os: UAParser.IOS
  browser: UAParser.IBrowser
  cpu: UAParser.ICPU
  device: UAParser.IDevice
  engine: UAParser.IEngine
}

const getDefaultUAString = () => {
  if (isSSR()) return ''
  return window.navigator.userAgent
}

export const useUserAgent = (uaString = getDefaultUAString()) => {
  const [state, setState] = useState<IUseUserAgentReturn | null>(null)
  const didRun = useRef(false)

  useEffect(() => {
    let payload: UAPayload | null = null
    try {
      const uaParser = new UAParser()
      uaParser.setUA(uaString)
      payload = {
        os: uaParser.getOS(),
        browser: uaParser.getBrowser(),
        cpu: uaParser.getCPU(),
        device: uaParser.getDevice(),
        engine: uaParser.getEngine(),
      }
    } catch (err) {
      console.error(err)
    } finally {
      setState(payload)
    }

    return () => {
      didRun.current = true
    }
  }, [uaString])

  return state
}
