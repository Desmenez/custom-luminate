import { envClient } from '@app/core/env/client'
import { reactQueryClient, withApi } from '@app/core/services'
import { QuizSection } from '@app/modules/live-session'
import { parseQuizForStudentToProps } from '@app/modules/live-session/utils/parser'
import {
  faThumbsDown,
  faThumbsUp,
  faTriangleExclamation,
  faUser,
} from '@fortawesome/pro-regular-svg-icons'
import { InferGetServerSidePropsType } from 'next'
import NextImage from 'next/image'

import { UnwrapPagePropsWithError, throwFromResponse } from '@luminate/nextjs'
import { withSSRError } from '@luminate/nextjs'
import { NextSeo } from '@luminate/seo'
import { Button, FontAwesomeIcon, cn } from '@luminate/ui'

import { LiveVideoPlayer } from '../components/live-video-player'
import { VideoPlayer } from '../components/video-player'
import { LiveSessionProvider, useLiveSessionContext } from '../provider/live-session'

const LiveSessionPage = withSSRError<typeof getServerSideProps>((props) => {
  return (
    <LiveSessionProvider
      liveSessionId={props.liveSessionId}
      initialQuizDataList={props.initialQuizDataList}
    >
      <LiveSessionPageContent {...props} />
    </LiveSessionProvider>
  )
})

const LiveSessionPageContent: React.FC<
  UnwrapPagePropsWithError<InferGetServerSidePropsType<typeof getServerSideProps>>
> = (props) => {
  const { isLive, videoSrc, videoResource } = props

  const { studentRankData } = useLiveSessionContext()

  return (
    <>
      <NextSeo title={videoResource.name} />
      <div className="flex flex-col max-w-7xl lg:mx-auto lg:flex-row lg:gap-4 lg:p-4 mb-20">
        {/* Left-side */}
        <div className="flex flex-col gap-4 flex-1 lg:relative z-10">
          {/* Video Player */}
          {videoSrc && (
            <div className="relative aspect-w-16 aspect-h-9 p-0 w-full h-fit bg-gray-900">
              {isLive ? (
                <LiveVideoPlayer
                  liveSessionId={props.liveSessionId}
                  isHLS
                  src={videoSrc}
                  rank={studentRankData?.rank}
                  profileImageUrl={studentRankData?.student?.profileUrl || undefined}
                />
              ) : (
                <VideoPlayer isHLS src={videoSrc} liveSessionId={props.liveSessionId} />
              )}
            </div>
          )}

          {/* Course title and detail only in Desktop mode */}
          {videoSrc && <LiveSessionVideoDescription videoResource={videoResource} />}
        </div>

        {/* Right-side */}
        <div
          className={cn(
            'flex flex-col flex-1 border border-gray-800 rounded-xl lg:overflow-scroll max-lg:mt-2',
            'lg:min-w-[300px] lg:max-w-[300px] lg:h-full',
            // 40px include all padding between navbar-content and content-bottom
            'lg:max-h-[calc(100vh-var(--navbar)-40px)]', // fallback
            'lg:max-h-[calc(100dvh-var(--navbar)-40px)]'
          )}
        >
          {/* Chat and Quiz */}
          <QuizSection />
        </div>
      </div>
    </>
  )
}

export default LiveSessionPage
LiveSessionPage.hideFooter = true

export const getServerSideProps = withApi(async (context, api) => {
  const liveSessionId = context.query.liveSessionId as string
  const response = await api.liveSession.getVideoResource({
    params: { liveSessionId },
  })
  if (response.status !== 200) throwFromResponse(response)

  const quizzes = await api.quiz.getQuizzesForStudent({ query: { liveSessionId } })
  if (quizzes.status !== 200) throwFromResponse(quizzes)

  const parsedQuizzes = quizzes.body.map((quiz) => {
    return parseQuizForStudentToProps(quiz.type, quiz)
  })

  const isLive = response?.body?.currentLiveVideoId?.live ?? null
  const videoUID = response?.body?.currentLiveVideoId?.videoUID ?? null
  const videoSrc = videoUID
    ? `${envClient.NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_URL}/${videoUID}/manifest/video.m3u8`
    : null

  return {
    props: {
      isLive,
      videoSrc,
      liveSessionId,
      videoResource: response.body,
      initialQuizDataList: parsedQuizzes,
    },
  }
})

interface LiveSessionVideoDescriptionProps {
  videoResource: {
    index: number
    name: string
    description: string
    liveCourse: {
      tutorId: string
    }
  }
  className?: string
}

const LiveSessionVideoDescription = ({
  videoResource,
  className,
}: LiveSessionVideoDescriptionProps) => {
  return (
    <section className={cn('p-4 pt-0 lg:rounded-lg items-start gap-2 bg-gray-900', className)}>
      <span className="rounded-b p-1 bg-yellow-300 text-gray-900 text-sm font-semibold">
        ครั้งที่ {videoResource.index + 1}
      </span>
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-2 w-full items-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg lg:text-2xl font-semibold">{videoResource.name}</h1>
          <p className="text-sm lg:text-base">{videoResource.description}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-1">
          <TutorProfile tutorId={videoResource.liveCourse.tutorId} />
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 p-1"
              leftIcon={<FontAwesomeIcon icon={faThumbsUp} className="h-4 w-4" />}
            >
              111
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 p-1"
              leftIcon={<FontAwesomeIcon icon={faThumbsDown} className="h-4 w-4" />}
            >
              0
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 p-1"
              leftIcon={<FontAwesomeIcon icon={faTriangleExclamation} className="h-4 w-4" />}
            >
              แจ้งปัญหา
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

const TutorProfile = ({ tutorId }: { tutorId: string }) => {
  const { data } = reactQueryClient.tutor.getTutorInfo.useQuery({
    params: { tutorId },
  })
  return (
    <div className="flex items-center gap-2 mr-3">
      {data?.body.tutorIconUrl ? (
        <NextImage
          alt="Tutor Image"
          src={data.body.tutorIconUrl}
          className="w-6 h-6 object-cover border border-gray-50 rounded-full"
          width={24}
          height={24}
        />
      ) : (
        <div className="w-6 h-6 border border-gray-500 rounded-full aspect-1 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="w-3 h-3 text-gray-500" />
        </div>
      )}
      {data?.body.displayName ? (
        <span className="text-sm">{data?.body.displayName}</span>
      ) : (
        <span className="block bg-gray-600 rounded-lg animate-pulse w-[100px] h-6" />
      )}
    </div>
  )
}
