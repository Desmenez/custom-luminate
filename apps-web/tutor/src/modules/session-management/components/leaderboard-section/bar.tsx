import { useEffect, useRef, useState } from 'react'

import NextImage from 'next/image'

import { useIntersectionObserver } from '@luminate/react-hooks'
import { cn } from '@luminate/ui'

const DEFAULT_MONKEY_PROFILE_URL =
  'https://static.monkeyeveryday.com/client-file/images/monkey-profile.png'

export interface StudentScoreBarProps {
  score: number
  rank: number
  displayName?: string
  profileUrl?: string
  maxScore: number
}

export const StudentScoreBar = ({
  score,
  rank,
  displayName,
  profileUrl,
  maxScore,
}: StudentScoreBarProps) => {
  const widthPercent = maxScore === 0 ? 0 : (score / maxScore) * 100
  const ref = useRef<HTMLDivElement>(null)
  const entry = useIntersectionObserver(ref, {})
  const [intersected, setIntersected] = useState(false)

  useEffect(() => {
    if (entry?.isIntersecting) {
      setIntersected(true)
    }
  }, [entry?.isIntersecting])

  const [imgUrl, setImgUrl] = useState(profileUrl || DEFAULT_MONKEY_PROFILE_URL)
  return (
    <section className="flex items-center gap-2" ref={ref}>
      <h4 className="w-8 text-center text-xs lg:text-base">{rank}</h4>
      <NextImage
        className="h-8 w-8 rounded-full lg:h-12 lg:w-12"
        width={48}
        height={48}
        src={imgUrl}
        alt="student profile image"
        onError={() => {
          setImgUrl(DEFAULT_MONKEY_PROFILE_URL)
        }}
      />
      <div className="flex-1">
        <p className="mb-0.5 text-xs lg:text-base">{displayName}</p>
        <div
          className="relative w-full min-w-fit transition-all duration-500"
          style={{ width: `${widthPercent}%` }}
        >
          <span className="block invisible px-2 py-1 text-xs lg:text-sm font-semibold" aria-hidden>
            {score} คะแนน
          </span>
          <span
            className={cn(
              'absolute inset-y-0 rounded-lg bg-gray-950 px-2 py-1 text-xs lg:text-sm font-semibold text-primary transition-all duration-1000 origin-left left-0 right-full min-w-fit whitespace-nowrap text-right',
              intersected && 'left-0 right-0',
              score === 0 && 'text-gray-700'
            )}
          >
            {score} คะแนน
          </span>
        </div>
      </div>
    </section>
  )
}
