import { LeaderboardSection } from '@app/modules/session-management/components/leaderboard-section'
import { QuizScoreSection } from '@app/modules/session-management/components/quiz-score-section'
import { TutorQuizProvider } from '@app/modules/session-management/providers/quiz'
import { addDays } from 'date-fns'

import { CustomNextPage } from '@luminate/nextjs'

const Page: CustomNextPage = () => {
  const liveSessionId = 'liveSession1'

  return (
    <TutorQuizProvider liveSessionId={liveSessionId}>
      <div className="p-4 lg:p-6 bg-gray-900">
        <LeaderboardSection />
        <QuizScoreSection
          liveSessonEndTime={addDays(new Date(), 1).toISOString()}
          liveCourseType="TAPE"
        />
      </div>
    </TutorQuizProvider>
  )
}

export default Page
