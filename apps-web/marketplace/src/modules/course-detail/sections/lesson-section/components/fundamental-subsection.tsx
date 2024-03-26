import { CourseDetailAccordion } from '@app/modules/course-detail/components/course-detail-accordion'
import { faLock } from '@fortawesome/pro-solid-svg-icons'

import { FundamentalSubsectionProps } from '../types'
import { FundamentalScheduleAction } from './action'
import { Badge } from './badge'
import { LessonDescription } from './lesson-description'
import { ResourceButtons } from './resource-buttons'

export const FundamentalSubsection = (props: FundamentalSubsectionProps) => {
  const badge =
    props.requiredSubscription && props.disabled ? (
      <Badge color="yellow" label="สำหรับสมาชิกเท่านั้น" icon={faLock} />
    ) : null

  return (
    <div className="flex items-center gap-y-4 flex-col">
      {props.items.map((item) => {
        return (
          <CourseDetailAccordion
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            right={badge}
            className="w-full"
          >
            <div className="flex flex-col gap-4 p-4">
              {/* First row - include lession name and free trial badge if have */}
              <LessonDescription description={item.name} isFreeTrial={item.isTrialSession} />

              {/* Second row - include sheet and homework button and action area */}
              <div className="flex items-center justify-between gap-4 flex-col-reverse md:flex-row">
                {/* Left-hand side */}
                <ResourceButtons
                  disabledExerciseLink={props.disabled}
                  disabledSheetLink={props.disabled}
                  sheetLink={item.sheetUrl}
                  exerciseLink={null}
                />

                {/* Right-hand side */}
                <FundamentalScheduleAction id={item.id} disabled={props.disabled} />
              </div>
            </div>
          </CourseDetailAccordion>
        )
      })}
    </div>
  )
}
