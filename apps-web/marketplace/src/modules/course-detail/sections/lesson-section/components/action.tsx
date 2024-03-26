import { useState } from 'react'

import { ClientOnly } from '@app/components/client-only'
import { faPlay } from '@fortawesome/pro-solid-svg-icons'

import { useInterval } from '@luminate/react-hooks'
import { ButtonProps, cn } from '@luminate/ui'

import {
  LiveButtonState,
  LiveScheduleLessonItemOption,
  TapeScheduleLessonItemOption,
} from '../types'
import { getLiveData } from '../utils/get-live-data'
import { ScheduleButton } from './schedule-button'
import { VideoProgressBar } from './video-progress-bar'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn('flex gap-4 items-center w-full justify-end', className)}>{children}</div>
  )
}

interface BaseScheduleActionProps extends ButtonProps {}

interface LiveScheduleActionProps
  extends BaseScheduleActionProps,
    Pick<
      LiveScheduleLessonItemOption,
      'startTime' | 'endTime' | 'timestampSeconds' | 'videoLengthSeconds'
    > {}
export const LiveScheduleAction = ({
  id,
  startTime,
  endTime,
  timestampSeconds,
  videoLengthSeconds,
  ...props
}: LiveScheduleActionProps) => {
  const [liveData, setLiveData] = useState(() => getLiveData(startTime, endTime))
  const shouldDisabled = props.disabled || liveData.disabled

  useInterval(
    () => {
      setLiveData(getLiveData(startTime, endTime))
    },
    // Enable interval only for live and fusion lesson
    // if enable, compute every 1 second
    1000
  )

  return (
    <Container>
      {!shouldDisabled && liveData?.buttonState === LiveButtonState.STARTING && (
        <ClientOnly>
          <div className={cn('whitespace-nowrap', 'text-red-500')}>{liveData?.text}</div>
        </ClientOnly>
      )}
      {liveData?.buttonState === LiveButtonState.ENDED && (
        <VideoProgressBar
          timestampSeconds={timestampSeconds}
          videoLengthSeconds={videoLengthSeconds}
        />
      )}
      <ScheduleButton
        link={`/live/${id}`}
        disabled={shouldDisabled}
        variant={liveData.buttonState === LiveButtonState.STARTING ? 'live' : 'default'}
        label={liveData.buttonLabel}
        icon={faPlay}
      />
    </Container>
  )
}

interface TapeScheduleActionProps
  extends BaseScheduleActionProps,
    Pick<TapeScheduleLessonItemOption, 'timestampSeconds' | 'videoLengthSeconds'> {}
export const TapeScheduleAction = ({
  timestampSeconds,
  videoLengthSeconds,
  id,
  ...props
}: TapeScheduleActionProps) => {
  return (
    <Container className="flex-col-reverse md:flex-row">
      <VideoProgressBar
        timestampSeconds={timestampSeconds}
        videoLengthSeconds={videoLengthSeconds}
      />
      <ScheduleButton
        link={`/live/${id}`}
        disabled={props.disabled}
        variant="default"
        label="เข้าเรียน"
        icon={faPlay}
      />
    </Container>
  )
}

interface FundamentalScheduleActionProps extends BaseScheduleActionProps {}
export const FundamentalScheduleAction = ({ id, ...props }: FundamentalScheduleActionProps) => {
  return (
    <Container>
      <ScheduleButton
        link={`/live/${id}`}
        disabled={props.disabled}
        label="เข้าเรียน"
        icon={faPlay}
      />
    </Container>
  )
}
