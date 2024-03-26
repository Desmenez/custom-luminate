import React from 'react'

import { LiveCourseType } from '@luminate/database'
import { ValuesType } from '@luminate/types-utility'
import { Separator, Tabs, TabsContent, TabsList, TabsTrigger, cn } from '@luminate/ui'

import { LeaderboardSection } from '../../components/leaderboard-section'
import { QuizScoreSection } from '../../components/quiz-score-section'
import { Section } from '../../components/section'
import { useTutorQuizContext } from '../../providers/quiz'

const TabValue = {
  QUIZ_SCORE: 'QUIZ_SCORE',
  LEADERBOARD: 'LEADERBOARD',
} as const

type TabValue = ValuesType<typeof TabValue>

interface QuizManagementSectionProps {
  liveCourseType: LiveCourseType
  liveSessonEndTime: string
  className?: string
}

export const QuizManagementSection: React.FC<QuizManagementSectionProps> = ({
  liveCourseType,
  liveSessonEndTime,
  className,
}) => {
  const { totalQuiz, totalStudent } = useTutorQuizContext()

  return (
    <Section className={cn('flex flex-1 flex-col pt-0 lg:pt-0', className)}>
      <Tabs defaultValue={TabValue.LEADERBOARD}>
        <TabsList className="w-full justify-start">
          <TabsTrigger value={TabValue.LEADERBOARD}>คะแนนรวม ({totalStudent})</TabsTrigger>
          <TabsTrigger value={TabValue.QUIZ_SCORE}>คะแนนรายข้อ ({totalQuiz})</TabsTrigger>
        </TabsList>

        <Separator className="hidden lg:block" />

        <div className="mt-6">
          <TabsContent value={TabValue.LEADERBOARD}>
            <LeaderboardSection />
          </TabsContent>
          <TabsContent value={TabValue.QUIZ_SCORE}>
            <QuizScoreSection
              liveCourseType={liveCourseType}
              liveSessonEndTime={liveSessonEndTime}
            />
          </TabsContent>
        </div>
      </Tabs>
    </Section>
  )
}
