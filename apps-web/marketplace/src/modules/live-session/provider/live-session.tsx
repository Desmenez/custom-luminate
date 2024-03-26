import { ReactNode, createContext, useCallback, useContext, useId, useMemo, useState } from 'react'

import { envClient } from '@app/core/env/client'
import { reactQueryClient } from '@app/core/services'
import { getClientCookie } from '@app/utils/get-client-cookie'
import { type MessageEvent } from 'event-source-polyfill'

import { EventSourceConnectionStatus, useArray, useEventSource } from '@luminate/react-hooks'
import {
  QuizClientStudentEvent,
  QuizClientStudentEventType,
  QuizClientStudentQuizUpdate,
  QuizClientStudentShowRank,
} from '@luminate/rest'
import { toast } from '@luminate/ui'
import { isSSR } from '@luminate/utils'

import { QuizStudentAnswerPayload, QuizStudentProps } from '../types'
import { parseQuizForStudentToProps } from '../utils/parser'

/**
 * Update the quiz metadata (e.g. total number of questions, quiz index, etc.)
 */
const updateQuizNumber = (list: QuizStudentProps[]): QuizStudentProps[] => {
  const length = list.length
  list.forEach((quizData, index) => {
    quizData.props.totalQuiz = length
    quizData.props.quizNumber = length - index
    return quizData
  })
  return list
}

interface LiveSessionContextValues {
  /**
   * Rank data of the student
   */
  studentRankData: QuizClientStudentShowRank | null
  /**
   * Connection status of SSE e.g. connecting, connected, disconnected.
   */
  connectionStatus: EventSourceConnectionStatus

  /**
   * List of parsed quiz data to be used in the UI as props.
   */
  quizDataList: QuizStudentProps[]

  /**
   * The score of the student in the live session.
   */
  studentScore: number

  /**
   * Handle submit quiz answer in client-side
   * @param quizId - Quiz ID
   * @param answer - Quiz answer payload which is different for each quiz type
   * @returns
   */
  onSubmitAnswer: (
    quizId: string,
    answer: QuizStudentAnswerPayload['CHOICE'] | QuizStudentAnswerPayload['TEXT']
  ) => void
}

export const LiveSessionContext = createContext({} as LiveSessionContextValues)
export const useLiveSessionContext = () => useContext(LiveSessionContext)

interface LiveSessionProviderProps {
  liveSessionId: string
  initialQuizDataList: QuizStudentProps[]
  children: ReactNode
}

export const LiveSessionProvider: React.FC<LiveSessionProviderProps> = ({
  liveSessionId,
  initialQuizDataList,
  children,
}) => {
  const [studentRankData, setStudentRankData] = useState<QuizClientStudentShowRank | null>(null)

  const { value: quizDataList, handler: quizDataListHandler } =
    useArray<QuizStudentProps>(initialQuizDataList)

  const submitQuizToastId = useId()

  const studentScore = useMemo(() => {
    return quizDataList.reduce((prevScore, quizData) => {
      // If the student's answer is correct, increase the score
      if (quizData.props.isMyAnswerCorrect) return prevScore + 1
      //  // If the student hasn't answered the quiz, or the answer is not sent from the server, return the previous score
      return prevScore
    }, 0)
  }, [quizDataList])

  /**
   * Setup mutation for quiz submission
   */
  const { mutateAsync: submitAnswerAsync } = reactQueryClient.quiz.respondQuiz.useMutation()

  /**
   * Check if the quiz is exist in the list
   */
  const isQuizExist = useCallback(
    (quizId: string) => quizDataList.some((quiz) => quiz.props.quizId === quizId),
    [quizDataList]
  )

  /**
   * Append a new quiz to the list
   */
  const pushFrontQuiz = useCallback(
    (quizData: QuizStudentProps) => {
      quizDataListHandler.set((prevQuizDataList) => {
        return [quizData, ...prevQuizDataList]
      })
    },
    [quizDataListHandler]
  )

  /**
   * Update a quiz in the list
   */
  const updateQuiz = useCallback(
    (quizId: string, quizData: QuizStudentProps) => {
      const targetQuizIndex = quizDataListHandler.findIndex((quiz) => {
        return quiz.props.quizId === quizId
      })
      if (targetQuizIndex === -1) return
      quizDataListHandler.set((quizDataList) => {
        const tempQuizDataList = [...quizDataList]
        tempQuizDataList[targetQuizIndex] = quizData
        return tempQuizDataList
      })
    },
    [quizDataListHandler]
  )

  /**
   * Remove a quiz from the list
   */
  const removeQuiz = useCallback(
    (quizId: string) => {
      quizDataListHandler.set((prevQuizDataList) => {
        return prevQuizDataList.filter((data) => data.props.quizId !== quizId)
      })
    },
    [quizDataListHandler]
  )

  const handleQuizEvent = useCallback(
    (data: QuizClientStudentQuizUpdate) => {
      for (const { quiz, quizId } of data.updates) {
        // If quiz is null, it means the quiz has been removed, so, remove it from the client-side list
        if (!quiz) {
          removeQuiz(quizId)
          continue
        }
        // If quiz exists, update it
        if (isQuizExist(quizId)) {
          const parsedQuiz = parseQuizForStudentToProps(quiz.type, quiz)
          updateQuiz(quizId, parsedQuiz)
          continue
        }
        // If quiz doesn't exist, append it
        const parsedQuiz = parseQuizForStudentToProps(quiz.type, quiz)
        pushFrontQuiz(parsedQuiz)
      }
    },
    [isQuizExist, pushFrontQuiz, removeQuiz, updateQuiz]
  )

  const handleShowRankEvent = useCallback((data: QuizClientStudentShowRank) => {
    setStudentRankData(data)
    // After 5 seconds, remove the rank data to hide the rank
    setTimeout(() => {
      setStudentRankData(null)
    }, 5000)
  }, [])

  /**
   * Handle on message from SSE
   */
  const handleMessageFromSSE = useCallback(
    (event: MessageEvent) => {
      const eventData = JSON.parse(event.data) as QuizClientStudentEvent
      switch (eventData.type) {
        case QuizClientStudentEventType.QUIZ_UPDATE:
          handleQuizEvent(eventData)
          break
        case QuizClientStudentEventType.SHOW_RANK:
          handleShowRankEvent(eventData)
          break
        default:
          break
      }
    },
    [handleQuizEvent, handleShowRankEvent]
  )

  /**
   * Handle quiz submission from client-side
   */
  const onSubmitAnswer = useCallback(
    async (
      quizId: string,
      answer: QuizStudentAnswerPayload['CHOICE'] | QuizStudentAnswerPayload['TEXT']
    ) => {
      const response = await toast.promise(
        submitAnswerAsync({ params: { quizId }, body: { answer } }),
        {
          loading: 'กำลังส่งคำตอบ...',
          success: 'ส่งคำตอบสำเร็จ',
          error: 'ไม่สามารถส่งคำตอบซ้ำได้',
        },
        { id: submitQuizToastId }
      )
      // If status is not 200, toast.promise will handle error message via Toaster
      if (response.status !== 200) return
      const newQuizProps = parseQuizForStudentToProps(response.body.type, response.body)
      updateQuiz(quizId, newQuizProps)
    },
    [submitAnswerAsync, submitQuizToastId, updateQuiz]
  )

  /**
   * Connect to SSE
   */
  const { status } = useEventSource({
    url: `${envClient.NEXT_PUBLIC_API_BASE_URL}/quiz/subscribe-student-events?liveSessionId=${liveSessionId}`, // See SSE URL in @luminate/rest
    token: isSSR() ? null : getClientCookie('token'),
    onMessage: handleMessageFromSSE,
    onError: (e) => console.error(e),
  })

  const value = {
    studentRankData,
    connectionStatus: status,
    quizDataList: updateQuizNumber(quizDataList),
    studentScore,
    onSubmitAnswer,
  } satisfies LiveSessionContextValues

  return <LiveSessionContext.Provider value={value}>{children}</LiveSessionContext.Provider>
}
