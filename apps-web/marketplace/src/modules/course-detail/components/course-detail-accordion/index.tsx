import { useId } from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, cn } from '@luminate/ui'

interface CourseDetailAccordionProps {
  title: string
  children: React.ReactNode
  subtitle?: string
  right?: React.ReactNode
  openByDefault?: boolean
  className?: string
}

export const CourseDetailAccordion: React.FC<CourseDetailAccordionProps> = ({
  title,
  subtitle,
  children,
  right,
  openByDefault,
  className,
}) => {
  const value = useId()

  return (
    <Accordion
      type="single"
      collapsible
      className={cn('border border-gray-700 rounded-lg overflow-hidden', className)}
      defaultValue={openByDefault ? value : undefined}
    >
      <AccordionItem value={value}>
        <AccordionTrigger className="px-4 py-2 bg-gray-950">
          <div className="flex justify-between items-center w-full flex-wrap">
            <div className="flex flex-col gap-1 text-left">
              <h4 className="font-semibold text-base text-gray-50">{title}</h4>
              {subtitle && <span className="text-gray-500 font-normal text-sm">{subtitle}</span>}
            </div>
            {right}
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-gray-900">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
