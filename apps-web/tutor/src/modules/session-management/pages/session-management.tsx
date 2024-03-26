import { GradientBackground } from '@app/components/gradient-background'
import { withApi } from '@app/core/services'

import { throwFromResponse, withSSRError } from '@luminate/nextjs'
import { NextSeo } from '@luminate/seo'

import { Section } from '../components/section'
import { TutorQuizProvider } from '../providers/quiz'
import { CreateQuizSection } from '../sections/create-quiz'
import { PageHeaderSection } from '../sections/page-header'
import { QuizManagementSection } from '../sections/quiz-management'
import { StreamInfoSection } from '../sections/stream-info'

const TutorSessionManagementPage = withSSRError<typeof getServerSideProps>(
  ({ liveSessionId, session }) => {
    const { streamInfo, liveCourse } = session

    return (
      <TutorQuizProvider liveSessionId={liveSessionId}>
        <NextSeo title={session.name} />
        <div className="relative flex-1">
          <GradientBackground />
          <div className="container flex flex-col gap-6 mb-6 flex-1">
            <PageHeaderSection courseName={liveCourse.name} sessionName={session.name} />
            {streamInfo && (
              <StreamInfoSection className="lg:hidden flex-1" streamInfo={streamInfo} />
            )}
            <div className="flex flex-col-reverse lg:flex-row gap-6">
              {/* Left-hand side */}
              <div className="flex flex-col flex-1 gap-6">
                {streamInfo && (
                  <StreamInfoSection className="max-lg:hidden flex-1" streamInfo={streamInfo} />
                )}
                <QuizManagementSection
                  liveCourseType={liveCourse.type}
                  liveSessonEndTime={session.endTime}
                />
              </div>

              {/* Right-hand side */}
              <div className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--navbar)+16px)] h-fit">
                <CreateQuizSection />
                <Section>Chat</Section>
              </div>
            </div>
          </div>
        </div>
      </TutorQuizProvider>
    )
  }
)

export const getServerSideProps = withApi(async (context, api) => {
  const sessionId = context.query.sessionId as string
  const session = await api.liveSession.getLiveSessionForTutor({
    params: {
      liveSessionId: sessionId,
    },
  })
  if (session.status !== 200) throwFromResponse(session)
  return {
    props: {
      liveSessionId: sessionId,
      session: session.body,
    },
  }
})

export default TutorSessionManagementPage
