import { faBackpack, faBook } from '@fortawesome/pro-solid-svg-icons'

import { ScheduleButton } from './schedule-button'

interface ResourceButtonsProps {
  sheetLink: string | null
  exerciseLink: string | null
  disabled?: boolean
  disabledSheetLink?: boolean
  disabledExerciseLink?: boolean
}

export const ResourceButtons: React.FC<ResourceButtonsProps> = ({
  sheetLink,
  exerciseLink,
  disabled,
  disabledSheetLink,
  disabledExerciseLink,
}) => {
  if (sheetLink === null && exerciseLink === null) return null

  return (
    <div className="flex gap-4 w-full">
      {sheetLink !== null && (
        <ScheduleButton
          link={sheetLink}
          label="ชีทเรียน"
          icon={faBook}
          variant="outline"
          disabled={disabledSheetLink || disabled}
        />
      )}
      {exerciseLink !== null && (
        <ScheduleButton
          link={exerciseLink}
          label="การบ้าน"
          icon={faBackpack}
          variant="outline"
          disabled={disabledExerciseLink || disabled}
        />
      )}
    </div>
  )
}
