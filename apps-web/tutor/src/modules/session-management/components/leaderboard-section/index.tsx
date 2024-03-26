import { memo, useMemo, useState } from 'react'

import { Button } from '@luminate/ui'

import { useTutorQuizContext } from '../../providers/quiz'
import { EmptyCard } from '../empty-card'
import { StudentScoreBar } from './bar'

const MemoizedStudentScoreBar = memo(StudentScoreBar)

const DEFAULT_SHOW_AMOUNT = 30

export const LeaderboardSection = () => {
  const [showAmount, setShowAmount] = useState(DEFAULT_SHOW_AMOUNT)
  const { tutorLeaderboard, totalQuiz } = useTutorQuizContext()

  const handleLoadMore = () => {
    setShowAmount((prev) => {
      if (prev + DEFAULT_SHOW_AMOUNT >= tutorLeaderboard.length) return tutorLeaderboard.length
      return prev + DEFAULT_SHOW_AMOUNT
    })
  }

  const slicedTutorLeaderboard = useMemo(() => {
    return tutorLeaderboard.slice(0, showAmount)
  }, [showAmount, tutorLeaderboard])

  return (
    <section className="flex flex-col gap-4 lg:gap-6">
      {tutorLeaderboard.length === 0 && <EmptyCard />}
      {slicedTutorLeaderboard.map((data) => (
        <MemoizedStudentScoreBar
          key={data.studentId}
          maxScore={totalQuiz}
          displayName={data.student?.displayName}
          profileUrl={data.student?.profileUrl || undefined}
          rank={data.rank}
          score={data.score}
        />
      ))}
      {showAmount < tutorLeaderboard.length && (
        <Button onClick={handleLoadMore} variant="outline">
          ดูเพิ่มเติม ({showAmount} จาก {tutorLeaderboard.length})
        </Button>
      )}
    </section>
  )
}
