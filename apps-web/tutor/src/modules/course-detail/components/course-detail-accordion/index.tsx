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
          <div className="flex flex-col md:flex-row justify-between md:items-center w-full flex-wrap">
            <h4 className="font-semibold text-base text-gray-50 text-start">{title}</h4>
            {right}
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-gray-900">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
