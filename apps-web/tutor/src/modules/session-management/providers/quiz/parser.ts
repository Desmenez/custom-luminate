import { LiveSessionQuizType } from '@luminate/database'
import {
  QuizTutorQuizUpdate,
  parseQuizAnswer,
  parseQuizConfig,
  parseQuizSolution,
} from '@luminate/rest'

import { TutorQuizScore } from './types'

export function parseQuizScoreUpdateForTutor(
  data: QuizTutorQuizUpdate['updates'][0]
): TutorQuizScore {
  if (data.quiz === null) throw new Error('Quiz is null')

  if (data.quiz.type === LiveSessionQuizType.CHOICE) {
    const type = data.quiz.type
    const config = parseQuizConfig(type, data.quiz.config)
    const solution = parseQuizSolution(type, data.quiz.solution)
    const answersCountMap = {} as Record<number, number>
    data.quiz.studentAnswers.forEach(({ answer: _answer }) => {
      const { choice } = parseQuizAnswer(type, _answer)
      const previousCount = answersCountMap[choice] ?? 0
      answersCountMap[choice] = previousCount + 1
      return choice === solution.correctChoice
    })
    const answersCount = Array.from({ length: config.numberOfChoice }).map((_, index) => {
      return answersCountMap[index + 1] ?? 0
    })
    return {
      id: data.quizId,
      type: type,
      answersCount: answersCount,
      correctAnswerIndex: solution.correctChoice - 1,
      isAcceptingAnswers: data.quiz.isAcceptingAnswers,
      totalStudentsAnswered: data.quiz.studentAnswers.length,
    }
  } else if (data.quiz.type === LiveSessionQuizType.TEXT) {
    const type = data.quiz.type
    const solution = parseQuizSolution(data.quiz.type, data.quiz.solution)
    const answers = data.quiz.studentAnswers.map(
      ({ answer }) => parseQuizAnswer(type, answer).answer
    )
    const numberOfCorrectAnswers = data.quiz.studentAnswers.filter(({ correct }) => {
      return correct
    }).length
    return {
      id: data.quizId,
      type: data.quiz.type,
      answers: answers,
      correctAnswerText: solution.correctAnswer,
      isAcceptingAnswers: data.quiz.isAcceptingAnswers,
      numberOfCorrectAnswers,
      totalStudentsAnswered: data.quiz.studentAnswers.length,
    }
  }

  throw new Error('Invalid quiz type')
}
