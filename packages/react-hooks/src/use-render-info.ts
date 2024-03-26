import { useRef } from 'react'

interface RenderInfo {
  readonly name: string
  renders: number
  timestamp?: null | number
  sinceLast?: null | number | '[now]'
}

const useRenderInfo = (moduleName: string = 'Unknown', enableLog: boolean = true) => {
  const { current: info } = useRef<RenderInfo>({
    name: moduleName,
    renders: 0,
    sinceLast: null,
    timestamp: null,
  })

  const now = +Date.now()

  info.renders += 1
  info.sinceLast = info.timestamp ? (now - info.timestamp) / 1000 : '[now]'
  info.timestamp = now

  if (enableLog) {
    console.group(`${moduleName} info`)
    console.log(
      `Render no: ${info.renders}${
        info.renders > 1 ? `, ${info.sinceLast}s since last render` : ''
      }`
    )
    console.dir(info)
    console.groupEnd()
  }

  return info
}

export default useRenderInfo
