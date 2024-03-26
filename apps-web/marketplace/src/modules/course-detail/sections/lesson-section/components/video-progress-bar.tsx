import { Progress } from '@luminate/ui'

import { getDurationString } from '../utils/get-duration-string'

interface VideoProgressBarProps {
  timestampSeconds: number | null
  videoLengthSeconds: number | null
}

export const VideoProgressBar: React.FC<VideoProgressBarProps> = ({
  timestampSeconds,
  videoLengthSeconds,
}) => {
  if (timestampSeconds === null || videoLengthSeconds === null) return null

  return (
    <div className="flex gap-4 items-center w-full md:w-fit">
      <Progress
        value={(timestampSeconds / videoLengthSeconds) * 100}
        className="md:w-[100px] w-full"
      />
      <span className="whitespace-nowrap">{getDurationString(timestampSeconds)}</span>
    </div>
  )
}
