import { ReactEventHandler, useState } from 'react'

import Image, { ImageProps } from 'next/image'

const DEFAULT_MONKEY_PROFILE_URL =
  'https://static.monkeyeveryday.com/client-file/images/monkey-profile.png'

interface NextImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string
}

export const NextImageWithFallback: React.FC<NextImageWithFallbackProps> = ({
  fallbackSrc = DEFAULT_MONKEY_PROFILE_URL,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<ImageProps['src']>(props.src)

  const handleError: ReactEventHandler<HTMLImageElement> = (event) => {
    setImageSrc(fallbackSrc ?? '')
    props.onError?.(event)
  }

  return <Image {...props} src={imageSrc} onError={handleError} />
}
