import NextImage from 'next/image'
import NextLink from 'next/link'

import { Button, cn } from '@luminate/ui'

import LettersDesktop from './assets/letters-desktop.png'
import LettersMobileLeft from './assets/letters-mobile-left.png'
import LettersMobileRight from './assets/letters-mobile-right.png'
import SadMonkey from './assets/sad-monkey.svg?url'

export interface ErrorPageProps {
  statusCode: number
  message: string
}

export function ErrorPage({ statusCode, message }: ErrorPageProps) {
  return (
    <div
      className={cn(
        'relative flex-1 w-full flex flex-col justify-center py-32 bg-gray-900 z-0',
        'bg-[linear-gradient(160deg,rgba(0,15,55,0.00)_0.52%,rgba(0,15,55,0.25)_100%)]',
        'xl:bg-[linear-gradient(103deg,#171717_9.46%,rgba(0,15,55,0.00)_94.38%)]'
      )}
    >
      <div className="xl:hidden absolute inset-0 flex items-center justify-between -z-10 overflow-hidden">
        <NextImage src={LettersMobileLeft} width={114} height={805} alt="" />
        <NextImage src={LettersMobileRight} width={106} height={805} alt="" />
      </div>
      <div className="max-xl:hidden absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
        <NextImage
          src={LettersDesktop}
          width={1560}
          height={776}
          className="min-w-[1560px] min-h-[776px]"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center text-center text-gray-300 leading-normal">
        <NextImage src={SadMonkey} alt="" priority />
        <div className="pt-2 pb-6">
          <h1 className="font-semibold text-xl">{statusCode}</h1>
          <p>{message}</p>
        </div>
        <Button variant="outline" asChild>
          <NextLink href="/">กลับสู่หน้าแรก</NextLink>
        </Button>
      </div>
    </div>
  )
}
