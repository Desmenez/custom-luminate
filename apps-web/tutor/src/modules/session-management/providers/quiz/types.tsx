import { LiveSessionQuiz, LiveSessionQuizType } from '@luminate/database'
import { QuizTutorLeaderboardUpdate } from '@luminate/rest'

export type TutorQuizScoreBase = Pick<LiveSessionQuiz, 'isAcceptingAnswers' | 'id'> & {
  totalStudentsAnswered: number
}

export type TutorQuizScoreChoice = TutorQuizScoreBase & {
  type: typeof LiveSessionQuizType.CHOICE
  answersCount: number[]
  correctAnswerIndex: number
}

export type TutorQuizScoreText = TutorQuizScoreBase & {
  type: typeof LiveSessionQuizType.TEXT
  answers: string[]
  correctAnswerText: string
  numberOfCorrectAnswers: number
}

export type TutorQuizScore = TutorQuizScoreChoice | TutorQuizScoreText

export interface UseTutorQuizProps {
  liveSessionId: string
  initialQuizScores: TutorQuizScore[]
}

export type TutorLeaderboard = QuizTutorLeaderboardUpdate['scores'][0]
