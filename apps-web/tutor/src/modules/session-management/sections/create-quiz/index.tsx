import { Section } from '../../components/section'
import { useTutorQuizContext } from '../../providers/quiz'
import { CreateQuizButton } from './actions/create-quiz-button'
import { EndAllQuizzesButton } from './actions/end-all-quizzes-button'
import { ShowRankButton } from './actions/show-rank-button'

export const CreateQuizSection: React.FC = () => {
  const { totalQuiz, liveSessionId } = useTutorQuizContext()

  return (
    <Section className="flex flex-col gap-4 h-fit">
      <h2 className="font-semibold text-lg">คำถามทดสอบ</h2>
      <CreateQuizButton liveSessionId={liveSessionId} numberOfQuizzes={totalQuiz} />
      <div className="flex flex-col lg:flex-row gap-4">
        <ShowRankButton liveSessionId={liveSessionId} />
        <EndAllQuizzesButton liveSessionId={liveSessionId} />
      </div>
    </Section>
  )
}
