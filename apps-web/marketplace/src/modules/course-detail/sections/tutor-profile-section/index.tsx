import { forwardRef } from 'react'

import { faFacebookF, faLine } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/pro-regular-svg-icons'
import NextImage from 'next/image'

import { LiveCourseChatPlatform } from '@luminate/database'
import { Button, FontAwesomeIcon } from '@luminate/ui'

import { CourseDetailSection } from '../../components/course-detail-section'
import FacebookLogo from './assets/facebook.svg'
import LineLogo from './assets/line.svg'
import { TutorExperience } from './experience'

export interface TutorProfileSectionProps {
  tutor: {
    name: string
    tutorIconUrl: string | null
    tutorFileUrl: string | null
    experience: string | null
    organization: {
      name: string
    } | null
  }
  subject: {
    name: string
    mainColor: string | null
  }
  chatRooms: Array<{
    id: string
    platform: LiveCourseChatPlatform
    url: string
  }>
}

export const TutorProfileSection = forwardRef<HTMLDivElement, TutorProfileSectionProps>(
  function TutorProfileSection(props, ref) {
    return (
      <CourseDetailSection ref={ref}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            {props.tutor.tutorIconUrl ? (
              <NextImage
                alt="Tutor Image"
                src={props.tutor.tutorIconUrl}
                className="w-12 h-12 object-cover rounded-full"
                width={48}
                height={48}
              />
            ) : (
              <div className="w-12 h-12 border border-gray-500 rounded-full aspect-1 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-500" />
              </div>
            )}
            <p className="w-0 flex-1 truncate font-semibold text-gray-50 text-lg">
              {props.tutor.name}
            </p>
            <div className="flex items-center gap-4 sm:hidden">
              {props.chatRooms.map((chatRoom) => {
                const buttonProps = liveCourseChatPlatformButton[chatRoom.platform]
                return (
                  <a
                    key={chatRoom.id}
                    href={chatRoom.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <buttonProps.Logo className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
            <div className="flex items-center gap-4 max-sm:hidden">
              {props.chatRooms.map((chatRoom) => {
                const buttonProps = liveCourseChatPlatformButton[chatRoom.platform]
                return (
                  <Button key={chatRoom.id} variant={buttonProps.variant} asChild>
                    <a href={chatRoom.url} target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex mr-2">
                        <FontAwesomeIcon icon={buttonProps.icon} className="w-4 h-4" />
                      </span>
                      {buttonProps.title}
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
          {props.tutor.experience && (
            <TutorExperience tutor={props.tutor} subject={props.subject} />
          )}
        </div>
      </CourseDetailSection>
    )
  }
)

const liveCourseChatPlatformButton = {
  [LiveCourseChatPlatform.FACEBOOK]: {
    variant: 'facebook',
    icon: faFacebookF,
    title: 'Facebook',
    Logo: FacebookLogo,
  },
  [LiveCourseChatPlatform.LINE]: {
    variant: 'line',
    icon: faLine,
    title: 'LINE',
    Logo: LineLogo,
  },
} as const
