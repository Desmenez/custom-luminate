import { differenceInMinutes, differenceInSeconds } from 'date-fns'

import {
  DEFAULT_AFTER_ALLOW_ENTER_SESSION_SECONDS,
  DEFAULT_BEFORE_ALLOW_ENTER_SESSION_SECONDS,
} from '../constants'
import { LiveButtonState } from '../types'
import { getDurationString } from './get-duration-string'

interface GetLiveDataReturn {
  disabled: boolean
  text: string | null
  buttonLabel: string
  buttonState: LiveButtonState
}

export function getLiveData(startTime: string, endTime: string): GetLiveDataReturn {
  const startDate = new Date(startTime)
  const currentDate = new Date()
  const endDate = new Date(endTime)

  const diffSecondsWithStartDate = differenceInSeconds(currentDate, startDate)
  const diffSecondsWithEndDate = differenceInSeconds(currentDate, endDate)

  // Case 1: Before > 15 minutes - disable button
  if (diffSecondsWithStartDate < -DEFAULT_BEFORE_ALLOW_ENTER_SESSION_SECONDS) {
    return {
      disabled: true,
      text: null,
      buttonState: LiveButtonState.NOT_STARTED,
      buttonLabel: 'LIVE',
    }
  }
  // Case 2: Before session started < 15 minutes - enable button
  if (diffSecondsWithStartDate < 0) {
    return {
      disabled: false,
      text: `อีก ${differenceInMinutes(startDate, currentDate)} นาที`,
      buttonState: LiveButtonState.STARTING,
      buttonLabel: 'เข้าเรียน',
    }
  }
  // Case 3: After session started but before session ended (+2hrs) - enable button
  if (
    diffSecondsWithStartDate >= 0 &&
    diffSecondsWithEndDate < DEFAULT_AFTER_ALLOW_ENTER_SESSION_SECONDS
  ) {
    const durationString = getDurationString(diffSecondsWithStartDate)
    return {
      disabled: false,
      text: durationString,
      buttonState: LiveButtonState.STARTING,
      buttonLabel: 'LIVE NOW',
    }
  }
  // Case 4: After session ended - disable button and show playback button instead
  return {
    disabled: false,
    text: null,
    buttonState: LiveButtonState.ENDED,
    buttonLabel: 'ดูย้อนหลัง',
  }
}
