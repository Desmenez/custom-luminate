import { useEffect, useLayoutEffect, useRef } from 'react'

interface CircularProgressBarProps {
  durationInSeconds: number
  strokeWidth: number
  onEnded?: () => void
}

export const CircularProgressBar = (props: CircularProgressBarProps) => {
  const { durationInSeconds, onEnded, strokeWidth } = props
  const circleRef = useRef<SVGCircleElement>(null)
  const circleAnimationRef = useRef<Animation>()
  const sqSize = 32

  const radius = (sqSize - strokeWidth) / 2
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  const dashArray = radius * Math.PI * 2

  useLayoutEffect(() => {
    const dashOffset = (percentage: number) => dashArray - (dashArray * percentage) / 100

    if (circleRef.current) {
      circleAnimationRef.current = circleRef.current.animate(
        [
          // keyframes
          { strokeDashoffset: `${dashOffset(0)}` },
          { strokeDashoffset: `${dashOffset(100)}` },
        ],
        {
          // timing options
          duration: durationInSeconds * 1000,
          iterations: 1,
        }
      )
    }
  }, [dashArray, durationInSeconds])

  useEffect(() => {
    if (circleAnimationRef.current) {
      circleAnimationRef.current.onfinish = () => {
        onEnded?.()
      }
    }
    return () => {
      if (circleAnimationRef.current) {
        circleAnimationRef.current.onfinish = null
      }
    }
  }, [onEnded])

  return (
    <svg
      className="h-full w-full fill-transparent transition-all duration-300 ease-linear"
      viewBox={viewBox}
    >
      <circle
        ref={circleRef}
        className="stroke-primary-main"
        cx="50%"
        cy="50%"
        r={radius}
        strokeDasharray={`${dashArray}`}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
      />
    </svg>
  )
}
