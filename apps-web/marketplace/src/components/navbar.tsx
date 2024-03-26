import { useState } from 'react'

import MonkeyEverydayLogo from '@app/assets/monkey-everyday-logo.svg'
import MonkeyLearningSpaceLogo from '@app/assets/monkey-learning-space-logo.png'
import { envClient } from '@app/core/env/client'
import { reactQueryClient } from '@app/core/services'
import { faSearch, faUser } from '@fortawesome/pro-regular-svg-icons'
import { faArrowUpLeft } from '@fortawesome/pro-solid-svg-icons'
import { useQueryClient } from '@tanstack/react-query'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { NextImageWithFallback } from '@luminate/nextjs'
import { mainContract } from '@luminate/rest'
import { getQueryKey } from '@luminate/ts-rest-query'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FontAwesomeIcon,
  Input,
  InputGroup,
  InputLeftIcon,
} from '@luminate/ui'

import { ProgressBar } from './progress-bar'

export function Navbar() {
  const { data } = reactQueryClient.auth.me.useQuery()
  const queryClient = useQueryClient()
  const isAuthed = !!data?.body?.id

  const router = useRouter()

  const logout = () => {
    document.cookie = `token=;path=/;Max-Age=-1;`
    queryClient.invalidateQueries(getQueryKey(mainContract.auth.me))
    router.replace(router.asPath)
  }

  return (
    <nav className="sticky top-0 h-[var(--navbar)] bg-gray-950 z-[100] flex">
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" className="max-lg:hidden px-3 flex gap-2 items-center bg-[#00002D]">
        <FontAwesomeIcon icon={faArrowUpLeft} className="w-3 h-3" />
        <span className="text-xs">ไปยัง</span>
        <MonkeyEverydayLogo className="h-6 w-16" />
      </a>
      <section className="h-full flex-1 flex flex-col [background:linear-gradient(270deg,#000_0%,#1D1300_23.44%,#000_100%)]">
        <div className="flex-1 flex justify-between px-8 items-center">
          <div className="flex gap-x-6">
            <NextLink href="/">
              <NextImage
                className="h-8 w-[65px] lg:h-10 lg:w-20"
                src={MonkeyLearningSpaceLogo}
                alt="Monkey Learning Space"
                priority
              />
            </NextLink>
            <div className="hidden lg:flex items-center gap-x-4">
              {isAuthed && (
                <NextLink href="/my-course" passHref legacyBehavior>
                  <Button variant="ghost" size="sm" className="text-gray-50 px-2 h-10">
                    คอร์สของฉัน
                  </Button>
                </NextLink>
              )}
              <NextLink href="/browse" passHref legacyBehavior>
                <Button variant="ghost" size="sm" className="text-gray-50 px-2 h-10">
                  ค้นหาคอร์ส
                </Button>
              </NextLink>
            </div>
          </div>

          {/* Right-side */}
          <div className="flex gap-3 items-center">
            <SimpleSearchBar />
            {isAuthed ? (
              <div className="flex-1">
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer relative rounded-full bg-gray-900 border w-8 h-8 aspect-1 overflow-hidden flex items-center justify-center">
                    {data?.body?.profileUrl ? (
                      <NextImageWithFallback
                        alt=""
                        src={data.body.profileUrl}
                        width={30}
                        height={30}
                        className="object-cover"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-gray-500" />
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mr-4">
                    <DropdownMenuItem onSelect={logout}>ออกจากระบบ</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <a
                  href={`${envClient.NEXT_PUBLIC_LOGIN_PAGE_PATH}?from=${encodeURIComponent(
                    router.asPath
                  )}`}
                  className="rounded-full bg-gray-900 border w-8 h-8 aspect-1 p-1.5 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-gray-500" />
                </a>
                <Button
                  size="sm"
                  variant="outline"
                  className="max-lg:hidden whitespace-nowrap"
                  asChild
                >
                  <a href={`/sign-up`}>ทดลองเรียนฟรี</a>
                </Button>
              </>
            )}
          </div>
        </div>
        <ProgressBar />
      </section>
    </nav>
  )
}

const SimpleSearchBar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  return (
    <InputGroup className="max-lg:hidden">
      <InputLeftIcon>
        <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
      </InputLeftIcon>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          router.push(search ? `/browse?name=${search}` : '/browse')
        }}
      >
        <Input
          className="border-x-0 border-t-0 border-b rounded-none bg-transparent"
          placeholder="ค้นหา"
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </form>
    </InputGroup>
  )
}
