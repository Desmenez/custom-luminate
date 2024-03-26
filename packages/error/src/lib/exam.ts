import { COMMON_BAD_INPUT_ERROR_CODE } from './common'

export const BAD_INPUT_EXAM_ERROR_CODE = {
  ...COMMON_BAD_INPUT_ERROR_CODE,
  INCOMPLETE_EXAM_ATTEMPT: {
    code: 'EXAM_INCOMPLETE_EXAM_ATTEMPT',
    message: "There's an incomplete exam attempt",
  },
  ACTIVE_EXAM_ATTEMPT_NOT_FOUND: {
    code: 'EXAM_ACTIVE_EXAM_ATTEMPT_NOT_FOUND',
    message: 'Active exam attempt not found',
  },
  ITEM_NOT_FOUND: {
    code: 'EXAM_ITEM_NOT_FOUND',
    message: 'Exam item not found',
  },
  INVALID_EXAM_ITEM_ANSWER: {
    code: 'EXAM_INVALID_EXAM_ITEM_ANSWER',
    message: 'Invalid exam item answer',
  },
  EDUCATION_LEVEL_NOT_FOUND: {
    code: 'EXAM_EDUCATION_LEVEL_NOT_FOUND',
    message: 'Exam education level not found',
  },
  GROUP_NOT_FOUND: {
    code: 'EXAM_GROUP_NOT_FOUND',
    message: 'Exam group not found',
  },
  PURPOSE_NOT_FOUND: {
    code: 'EXAM_PURPOSE_NOT_FOUND',
    message: 'Exam purpose not found',
  },
  SUBJECT_NOT_FOUND: {
    code: 'EXAM_SUBJECT_NOT_FOUND',
    message: 'Exam subject not found',
  },
  EXCEED_ATTEMPT_LIMIT: {
    code: 'EXAM_EXCEED_ATTEMPT_LIMIT',
    message: 'Exam exceed attempt limit',
  },
  CANNOT_DELETE_MOCK_EXAM: {
    code: 'EXAM_CANNOT_DELETE_MOCK_EXAM',
    message: 'Cannot delete mock exam',
  },
  ITEM_NUMBER_CANNOT_BE_CHANGED: {
    code: 'EXAM_ITEM_NUMBER_CANNOT_BE_CHANGED',
    message: 'Item number cannot be changed after user done the exam',
  },
  MOCK_EXAM_OBJECT_AND_MOCK_EXAM_PACKAGE_NOT_MATCH: {
    code: 'EXAM_MOCK_EXAM_OBJECT_AND_MOCK_EXAM_PACKAGE_NOT_MATCH',
    message: 'Mock exam object and mock exam package not match',
  },
  MOCK_EXAM_OBJECT_NOT_FOUND: {
    code: 'EXAM_MOCK_EXAM_OBJECT_NOT_FOUND',
    message: 'Mock exam object not found',
  },
  POSN_EXAM_FIELD_NOT_FOUND: {
    code: 'EXAM_POSN_EXAM_FIELD_NOT_FOUND',
    message: 'Posn exam field not found',
  },
  EXAM_NOT_FOUND: {
    code: 'EXAM_EXAM_NOT_FOUND',
    message: 'Exam not found',
  },
  SUBLEVEL_NOT_FOUND: {
    code: 'EXAM_SUBLEVEL_NOT_FOUND',
    message: 'Sublevel not found',
  },
  LEVEL_NOT_FOUND: {
    code: 'EXAM_LEVEL_NOT_FOUND',
    message: 'Level not found',
  },
  EXAM_ITEM_NOT_FOUND: {
    code: 'EXAM_EXAM_ITEM_NOT_FOUND',
    message: 'Exam item not found',
  },
  USER_NOT_FOUND: {
    code: 'EXAM_USER_NOT_FOUND',
    message: 'User not found',
  },
}

export type BadInputExamErrorCodeType = keyof typeof BAD_INPUT_EXAM_ERROR_CODE
