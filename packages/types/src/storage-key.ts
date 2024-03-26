export enum LivePaymentMethod {
  Credit = 'CREDIT',
  MobileBanking = 'MOBILE_BANKING',
  PromptPay = 'PROMPT_PAY',
  TrueMoney = 'TRUE_MONEY',
}

/** @see {isSubjectCode} ts-auto-guard:type-guard */
export type SubjectCode =
  | 'AM'
  | 'AP'
  | 'B'
  | 'C'
  | 'COM'
  | 'E'
  | 'M'
  | 'MA'
  | 'P'
  | 'SATE'
  | 'SATM'
  | 'SC'
  | 'SO'
  | 'T'
  | 'TGAT'
  | 'TPAT3'
  | 'TPAT4'
  | 'TPAT5'

export type StorageKey = DeepWrapMaybe<_StorageKey>

const Nothing = Symbol('nothing')
type Nothing = typeof Nothing
type Maybe<T> = Nothing | T

// NOTE: - Make all key values needed to be type check before use
type DeepWrapMaybe<T> = {
  [P in keyof T]: T[P] extends object ? Maybe<DeepWrapMaybe<T[P]>> : Maybe<T[P]>
}

// !IMPORTANT: - Primative types only
// NOTE: - Add new key here
type _StorageKey = CourseBrowseKey &
  FactoryKey &
  Key &
  PaymentKey &
  PlayerKey &
  StudyNoteKey &
  TcasKey

interface Key {
  date: Date
  'exam-education-level-code': string
  'filtered-library-group': string[]
  'last-logging-time': number
  'last-unsub-visit': string
  'learning-history-subject-id': string
  'material-id': string
  'onboarding-storage': unknown
  'preferred-exercise-mode': string
  // NOTE: - Last shown date of RoadmapWeeklyReport in everyday page
  'roadmap-weekly-report-last-shown-date': {
    [userId in string]: {
      [planId in string]: string // last shown date
    }
  }
  'seen-computer-mode-on-mobile': boolean
  'subject-code': SubjectCode
}

interface PlayerKey {
  // NOTE: - Volume of video player range between 0 - 1
  'player-volume': number
}

interface PaymentKey {
  //
  // NOTE: - Charge id recieved from omise
  'payment-charge-id': string
  'payment-live-charge-id': string
  'payment-coupon-code': string
  'payment-influencer-code': string
  'payment-referral-code': string
  // NOTE: - Selected package in client/price/selection page
  'payment-selected-package': {
    packageId: string
    packageType: string
    promotionId: string | undefined
    // influencerCodeId: string | undefined;
  }
  'payment-successful-payment-information': {
    // NOTE: - only exist if payment method is of type PaymentMethodCard
    cardExpirationDateText: string | undefined
    cardLastFourDigitsText: string | undefined
    paymentMethod: string
    paymentSuccessExpirationDate: number
  }
  'payment-successful-payment-live-course-information': {
    liveCourseId: string
    liveCoursePackageId: string
    paymentMethod: LivePaymentMethod
    creditCardLastFourDigits: string | undefined
    creditCardBrand: string | undefined
    shippingAddress: string | undefined
    discount: {
      code: string | undefined
      discount: number | undefined
    } | null
    finalPrice: number
  }
}

interface StudyNoteKey {
  // will be changed to notification based later
  'study-note-modal': boolean
  'study-note-ping': boolean
}

interface TcasKey {
  // NOTE: - Tcas invitation modal for new user
  'tcas-invitation-modal': boolean
  'tcas-selected-criteria': string[]
  // NOTE: - Tcas 3 dropdown
  'tcas-selected-data': {
    campusId: string
    facultyId: string
    fieldId: string
    projectId: string
  }
  // NOTE: - Tcas dropdown
  'tcas-selected-project': {
    campusId: string
    facultyId: string
    majorId: string
    projectId: string
    universityId: string
  }
}

interface FactoryKey {
  'tcas-min-score-counter': number
}

interface CourseBrowseKey {
  'course-browse-filter-search-text': string
  'course-browse-filter-education': Set<string>
  'course-browse-filter-purpose': Set<string>
  'course-browse-filter-subject': Set<string>
}
