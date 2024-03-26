import { useIsLoading } from '@app/utils/loading'
import { NProgress } from '@tanem/react-nprogress'

export const ProgressBar = () => {
  const isLoading = useIsLoading()

  return (
    <NProgress isAnimating={isLoading}>
      {({ animationDuration, isFinished, progress }) => (
        <div className="relative">
          <Bar animationDuration={animationDuration} progress={progress} isFinished={isFinished} />
          <Spinner isFinished={isFinished} />
        </div>
      )}
    </NProgress>
  )
}

const Bar: React.FC<{ animationDuration: number; progress: number; isFinished: boolean }> = ({
  animationDuration,
  progress,
  isFinished,
}) => {
  return (
    <div
      className="h-[3px] [background:linear-gradient(90deg,#ED1C24_0%,#F15A22_19.79%,#FCAF17_39.58%,#72BF44_60.42%,#0097CC_81.25%,#92278F_100%)]"
      style={{
        clipPath: isFinished ? 'inset(0% 0% 0% 0%)' : `inset(0% ${(1 - progress) * 100}% 0% 0%)`,
        transition: progress <= 0.1 ? 'none' : `clip-path ${animationDuration}ms linear`,
      }}
    />
  )
}

const Spinner: React.FC<{ isFinished: boolean }> = ({ isFinished }) => {
  if (isFinished) {
    return null
  }
  return (
    <div className="absolute top-2 right-2 animate-spin w-4 h-4 rounded-[50%] border-2 border-yellow-400 border-t-transparent border-r-transparent" />
  )
}
