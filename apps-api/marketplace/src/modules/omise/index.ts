declare module 'omise' {
  namespace Charges {
    export type ChargeStatus =
      | 'failed'
      | 'expired'
      | 'pending'
      | 'reversed'
      | 'successful'
      | 'unknown'
    interface ICharge {
      status: ChargeStatus
    }
  }
}

export * from './omise.service'
