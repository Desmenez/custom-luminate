import { FreeTrialTag } from './free-trial-tag'

interface LessonDescriptionProps {
  isFreeTrial: boolean
  description?: string
}

export const LessonDescription: React.FC<LessonDescriptionProps> = ({
  description,
  isFreeTrial,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      {description && <h6 className="font-normal text-base">{description}</h6>}
      {isFreeTrial && <FreeTrialTag />}
    </div>
  )
}
