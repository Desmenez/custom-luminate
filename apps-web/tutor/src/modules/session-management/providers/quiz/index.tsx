import { createContext, useCallback, useContext, useId } from 'react'

import { envClient } from '@app/core/env/client'
import { reactQueryClient } from '@app/core/services'
import { getClientCookie } from '@app/utils/get-client-cookie'
import { MessageEvent } from 'event-source-polyfill'

import { useArray, useEventSource } from '@luminate/react-hooks'
import {
  QuizTutorEvent,
  QuizTutorEventType,
  QuizTutorLeaderboardUpdate,
  QuizTutorQuizUpdate,
} from '@luminate/rest'
import { toast } from '@luminate/ui'
import { isSSR } from '@luminate/utils'

import { parseQuizScoreUpdateForTutor } from './parser'
import { TutorLeaderboard, TutorQuizScore } from './types'

interface TutorQuizContextValues {
  liveSessionId: string
  totalQuiz: number
  totalStudent: number
  tutorQuizScores: TutorQuizScore[]
  tutorLeaderboard: TutorLeaderboard[]
  // Mutations
  deleteQuizMutate: (quizId: string) => Promise<void>
  setIsAcceptingAnswersMutate: (quizId: string, isAcceptingAnswers: boolean) => Promise<void>
  // Connection Status
  status: ReturnType<typeof useEventSource>['status']
}

const TutorQuizContext = createContext<TutorQuizContextValues>({} as TutorQuizContextValues)

export const useTutorQuizContext = () => useContext(TutorQuizContext)

interface TutorQuizProviderProps {
  children: React.ReactNode
  liveSessionId: string
  initialQuizScores?: TutorQuizScore[]
  initialLeaderboard?: TutorLeaderboard[]
}

export const TutorQuizProvider: React.FC<TutorQuizProviderProps> = ({
  children,
  liveSessionId,
  initialQuizScores = [],
  initialLeaderboard = [],
}) => {
  const { value: tutorQuizScores, handler: tutorQuizScoresHandler } =
    useArray<TutorQuizScore>(initialQuizScores)

  const { value: tutorLeaderboard, handler: tutorLeaderboardHandler } =
    useArray<TutorLeaderboard>(initialLeaderboard)

  const totalQuiz = tutorQuizScores.length
  const totalStudent = tutorLeaderboard.length
  const deleteQuizToastId = useId()
  const isAcceptingAnswersToastId = useId()

  const { mutateAsync: updateQuizMutation } = reactQueryClient.quiz.updateQuiz.useMutation()
  const { mutateAsync: deleteQuizMutation } = reactQueryClient.quiz.deleteQuiz.useMutation()

  const isQuizExist = useCallback(
    (quizId: string) => {
      return tutorQuizScores.some((quizScore) => quizScore.id === quizId)
    },
    [tutorQuizScores]
  )

  const removeQuiz = useCallback(
    (quizId: string) => {
      tutorQuizScoresHandler.filterAndSet((quizScore) => quizScore.id !== quizId)
    },
    [tutorQuizScoresHandler]
  )

  const updateQuiz = useCallback(
    (quizId: string, quiz: TutorQuizScore) => {
      tutorQuizScoresHandler.mapAndSet((quizScore) => {
        if (quizScore.id === quizId) return quiz
        return quizScore
      })
    },
    [tutorQuizScoresHandler]
  )

  const pushFrontQuiz = useCallback(
    (quiz: TutorQuizScore) => {
      tutorQuizScoresHandler.set((quizScores) => [quiz, ...quizScores])
    },
    [tutorQuizScoresHandler]
  )

  const deleteQuizMutate = useCallback(
    async (quizId: string) => {
      await toast.promise(
        deleteQuizMutation({ params: { quizId } }),
        {
          loading: 'กำลังลบคำถาม...',
          success: 'ลบคำถามสำเร็จ',
          error: 'ลบคำถามไม่สำเร็จ',
        },
        { id: deleteQuizToastId }
      )
      removeQuiz(quizId)
    },
    [deleteQuizMutation, deleteQuizToastId, removeQuiz]
  )

  const setIsAcceptingAnswersMutate = useCallback(
    async (quizId: string, isAcceptingAnswers: boolean) => {
      await toast.promise(
        updateQuizMutation({ params: { quizId }, body: { isAcceptingAnswers } }),
        {
          loading: isAcceptingAnswers ? 'กำลังเปิดรับคำตอบ...' : 'กำลังเฉลยคำตอบ...',
          success: isAcceptingAnswers ? 'เปิดรับคำตอบสำเร็จ' : 'เฉลยคำตอบสำเร็จ',
          error: isAcceptingAnswers ? 'เปิดรับคำตอบไม่สำเร็จ' : 'เฉลยคำตอบไม่สำเร็จ',
        },
        { id: isAcceptingAnswersToastId }
      )
      tutorQuizScoresHandler.mapAndSet((quizScore) => {
        if (quizScore.id === quizId) return { ...quizScore, isAcceptingAnswers }
        return quizScore
      })
    },
    [tutorQuizScoresHandler, updateQuizMutation]
  )

  const handleQuizScoreUpdateEvent = useCallback(
    (data: QuizTutorQuizUpdate) => {
      for (const update of data.updates) {
        // If quiz is null, it means the quiz has been removed, so, remove it from the client-side list
        if (!update.quiz) {
          removeQuiz(update.quizId)
          continue
        }

        // If quiz exists, update it
        if (isQuizExist(update.quizId)) {
          const parsedQuiz = parseQuizScoreUpdateForTutor(update)
          updateQuiz(update.quizId, parsedQuiz)
          continue
        }

        // If quiz doesn't exist, append it
        const parsedQuiz = parseQuizScoreUpdateForTutor(update)
        pushFrontQuiz(parsedQuiz)
      }
    },
    [isQuizExist, pushFrontQuiz, removeQuiz, updateQuiz]
  )

  const handleQuizLeaderboardUpdateEvent = useCallback(
    (data: QuizTutorLeaderboardUpdate) => {
      tutorLeaderboardHandler.set(data.scores)
    },
    [tutorLeaderboardHandler]
  )

  const handleTutorMessageFromSSE = useCallback(
    (event: MessageEvent) => {
      const eventData = JSON.parse(event.data) as QuizTutorEvent
      switch (eventData.type) {
        case QuizTutorEventType.QUIZ_UPDATE:
          handleQuizScoreUpdateEvent(eventData)
          break
        case QuizTutorEventType.LEADERBOARD_UPDATE:
          handleQuizLeaderboardUpdateEvent(eventData)
          break
      }
    },
    [handleQuizLeaderboardUpdateEvent, handleQuizScoreUpdateEvent]
  )

  const { status } = useEventSource({
    url: `${envClient.NEXT_PUBLIC_API_BASE_URL}/quiz/subscribe-tutor-events?liveSessionId=${liveSessionId}`, // See SSE URL in @luminate/rest
    token: isSSR() ? null : getClientCookie('tutorToken'),
    onMessage: handleTutorMessageFromSSE,
    onError: (e) => console.error(e),
  })

  const value: TutorQuizContextValues = {
    // Data
    liveSessionId,
    // Queries
    totalQuiz,
    totalStudent,
    tutorQuizScores,
    tutorLeaderboard,
    // Mutations
    deleteQuizMutate,
    setIsAcceptingAnswersMutate,
    // Connection Status
    status,
  }

  return <TutorQuizContext.Provider value={value}>{children}</TutorQuizContext.Provider>
}
