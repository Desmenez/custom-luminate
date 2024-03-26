import { CSSProperties, useMemo } from 'react'

import { SubjectChip } from '@app/components/subject-chip'
import { faAward, faChalkboardUser, faFileUser } from '@fortawesome/pro-regular-svg-icons'
import colorConvert from 'color-convert'
import NextImage from 'next/image'

import { Dialog, DialogContent, DialogTrigger, FontAwesomeIcon, Separator } from '@luminate/ui'

export interface TutorExperienceProps {
  tutor: {
    name: string
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
}

export function TutorExperience({ tutor, subject }: TutorExperienceProps) {
  const mainColor = subject.mainColor ?? '#5F1F7A'
  const lightenedColor = useMemo(() => {
    const [h, s, l] = colorConvert.hex.hsl(mainColor)
    return '#' + colorConvert.hsl.hex([h, s, l + 13])
  }, [mainColor])
  return (
    <>
      <div className="w-full flex flex-col p-2 gap-2 rounded-lg border border-gray-700">
        <div className="flex items-center px-1 py-0.5 gap-2">
          <FontAwesomeIcon icon={faAward} className="w-4 h-4" />
          <p className="font-semibold text-gray-50 leading-normal">ผลงานและประสบการณ์</p>
        </div>
        <p className="text-gray-500 text-sm whitespace-pre-line line-clamp-4 ">
          {tutor.experience}
        </p>
      </div>
      <div className="w-full flex justify-center xs:justify-start">
        <Dialog>
          <DialogTrigger className="text-blue-500 text-xs lg:text-sm hover:text-blue-400 hover:underline">
            ดูเพิ่มเติม
          </DialogTrigger>
          <DialogContent className="max-h-screen overflow-scroll">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-gray-50 text-xl text-center">เกี่ยวกับผู้สอน</h1>
              <div className="flex gap-5">
                <div
                  className="w-[94px] h-[130px] bg-gradient-to-b rounded-md"
                  style={
                    {
                      '--tw-gradient-from': mainColor,
                      '--tw-gradient-to': lightenedColor,
                      '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
                    } as CSSProperties
                  }
                >
                  {tutor.tutorFileUrl && (
                    <NextImage
                      src={tutor.tutorFileUrl}
                      alt=""
                      width={94}
                      height={130}
                      className="w-[94px] h-[130px] object-contain object-bottom"
                    />
                  )}
                </div>
                <div className="text-gray-50">
                  <p className="text-xl">{tutor.name}</p>
                  {tutor.organization && (
                    <p className="text-sm font-semibold">{tutor.organization.name}</p>
                  )}
                </div>
              </div>
              <Separator />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faChalkboardUser} className="w-4 h-4" />
                  <span className="font-semibold text-gray-50 text-xs leading-normal">
                    วิชาที่สอน
                  </span>
                </div>
                <SubjectChip {...subject} />
              </div>
              <Separator />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faFileUser} className="w-4 h-4" />
                  <span className="font-semibold text-gray-50 text-xs leading-normal">
                    ผลงานและประสบการณ์
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-normal whitespace-pre-line">
                  {tutor.experience}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}
