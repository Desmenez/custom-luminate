import { Fragment } from 'react'

import NextLink from 'next/link'

import { Button, ButtonProps, Separator, cn } from '@luminate/ui'

import { CourseDetailAccordion } from '../../components/course-detail-accordion'
import { ExamItemOption } from './types'

export interface ExamAccordionProps {
  courseId: string
  title: string
  items: ExamItemOption[]
  buttonProps?: ButtonProps
}

export const ExamAccordion: React.FC<ExamAccordionProps> = ({
  courseId,
  title,
  items,
  buttonProps,
}) => {
  return (
    <CourseDetailAccordion title={title} openByDefault>
      <div className="flex flex-col gap-4 p-4">
        {items.map((item, index) => {
          const link = item.link
          return (
            <Fragment key={item.id}>
              {index !== 0 && <Separator />}
              <div className="flex justify-between items-center">
                <div className="text-base font-normal">{item.title}</div>
                <NextLink
                  passHref
                  href={link}
                  className={cn(buttonProps?.disabled && 'pointer-events-none')}
                >
                  <Button variant="outline" className="flex items-center gap-2" {...buttonProps} />
                </NextLink>
              </div>
            </Fragment>
          )
        })}
      </div>
    </CourseDetailAccordion>
  )
}
