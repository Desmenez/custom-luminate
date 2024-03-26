import { TutorQuizProvider } from '@app/modules/session-management/providers/quiz'
import { QuizManagementSection } from '@app/modules/session-management/sections/quiz-management'
import { addDays } from 'date-fns'

import { CustomNextPage } from '@luminate/nextjs'

const Page: CustomNextPage = () => {
  const liveSessionId = 'liveSession1'

  return (
    <div className="m-4">
      <TutorQuizProvider liveSessionId={liveSessionId}>
        <QuizManagementSection
          liveCourseType="TAPE"
          liveSessonEndTime={addDays(new Date(), 1).toISOString()}
        />
      </TutorQuizProvider>
    </div>
  )
}

export default Page
