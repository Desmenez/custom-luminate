import { CourseTypeChip } from '@app/components/course-type-chip'
import { format } from 'date-fns'
import th from 'date-fns/locale/th'
import Image from 'next/image'

import { LiveCourseType } from '@luminate/database'

import { CourseDetailSection } from '../../components/course-detail-section'
import { BackButton } from './back-button'
import { Description } from './description'

export interface PageHeaderSectionProps {
  type: LiveCourseType
  name: string
  courseHeroUrl: string | null
  courseHeroMobileUrl: string | null
  startDate: string | null
  endDate: string | null
  description: string
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return format(date, 'dd MMMM yyyy', { locale: th })
}

export function PageHeaderSection(props: PageHeaderSectionProps) {
  return (
    <>
      <PageHeaderDesktop {...props} />
      <PageHeaderMobile {...props} />
    </>
  )
}

export function PageHeaderDesktop(props: PageHeaderSectionProps) {
  return (
    <div className="container max-lg:hidden">
      <div className="relative flex flex-col justify-center h-[403px] xl:h-[546px] py-4 xl:py-[68px] px-[50px] xl:px-[108px]">
        <div className="absolute -z-10 inset-0 bg-white/10 ">
          {props.courseHeroUrl && (
            <Image
              src={props.courseHeroUrl}
              className="w-full h-full object-cover"
              width={1280}
              height={546}
              alt=""
            />
          )}
        </div>
        <div className="xl:w-[590px] flex flex-col items-start gap-3 xl:gap-4">
          <BackButton />
          <div>
            <CourseTypeChip type={props.type} />
            <h1 className="font-sans font-semibold text-gray-50 text-2xl leading-normal">
              {props.name}
            </h1>
            <p className="text-gray-50 leading-normal">
              {props.startDate && props.endDate && (
                <span className="max-xl:block mr-2">
                  {formatDate(props.startDate)} - {formatDate(props.endDate)}
                </span>
              )}
            </p>
          </div>
          <Description className="max-xl:w-[400px]" name={props.name}>
            {props.description}
          </Description>
        </div>
      </div>
    </div>
  )
}

export function PageHeaderMobile(props: PageHeaderSectionProps) {
  return (
    <div className="lg:hidden">
      <div className="container h-10 flex items-center">
        <BackButton />
      </div>
      <div className="relative w-full pb-[45.866666%]">
        <div className="absolute inset-0 bg-white/10">
          {props.courseHeroMobileUrl && (
            <Image
              src={props.courseHeroMobileUrl}
              className="w-full h-full object-cover"
              width={1024}
              height={469}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="container py-2">
        <CourseDetailSection>
          <div className="flex flex-col gap-2">
            <CourseTypeChip type={props.type} />
            <h1 className="font-sans font-semibold text-gray-50 text-xl leading-normal">
              {props.name}
            </h1>
            <div>
              {props.startDate && props.endDate && (
                <p className="max-xl:block mr-2">
                  {formatDate(props.startDate)} - {formatDate(props.endDate)}
                </p>
              )}
            </div>
            <Description name={props.name}>{props.description}</Description>
          </div>
        </CourseDetailSection>
      </div>
    </div>
  )
}
