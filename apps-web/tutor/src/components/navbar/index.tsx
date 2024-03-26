import MonkeyLearningSpaceLogo from '@app/assets/monkey-learning-space-logo.png'
import { reactQueryClient } from '@app/core/services'
import { faUser, faUserHeadset } from '@fortawesome/pro-solid-svg-icons'
import NextImage from 'next/image'
import NextLink from 'next/link'

import { NextImageWithFallback } from '@luminate/nextjs'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  FontAwesomeIcon,
} from '@luminate/ui'

import { ProgressBar } from '../progress-bar'

export function Navbar() {
  const { data } = reactQueryClient.auth.me.useQuery()
  const isAuthed = !!data?.body?.id

  const logout = () => {
    document.cookie = `tutorToken=;path=/;Max-Age=-1;`
    window.location.reload()
  }

  return (
    <nav className="sticky top-0 h-[var(--navbar)] bg-[#00002D] z-[100] flex">
      <section className="h-full flex-1 flex flex-col">
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
          </div>

          {/* Right-side */}
          <div className="flex gap-3 items-center">
            <NextLink href="https://www.facebook.com/MonkeyEverydayOfficial/" passHref>
              <Button
                size="sm"
                variant="outline"
                leftIcon={<FontAwesomeIcon icon={faUserHeadset} className="w-4 h-4" />}
              >
                ติดต่อเจ้าหน้าที่
              </Button>
            </NextLink>
            {isAuthed ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="cursor-pointer rounded-full bg-gray-900 border w-8 h-8 aspect-1 flex items-center justify-center">
                  {data?.body?.profileUrl ? (
                    <NextImageWithFallback
                      alt=""
                      width={64}
                      height={64}
                      src={data.body.profileUrl}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-gray-500" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4">
                  <DropdownMenuItem onSelect={logout}>ออกจากระบบ</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // TODO: Change URL
              <NextLink href="/playground/login">
                <div className="rounded-full bg-gray-900 border w-8 h-8 aspect-1 p-1.5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-gray-500" />
                </div>
              </NextLink>
            )}
          </div>
        </div>
        <ProgressBar />
      </section>
    </nav>
  )
}
