import { Observable, Subscription } from 'rxjs'

/**
 * Convert an observable to an async iterator.
 * This can be used with `for await` loops, or with functions that accept an async iterator.
 *
 * Taken from RxJS 8: https://github.com/ReactiveX/rxjs/blob/2947583bb33e97f3db9e6d9f6cea70c62a173060/src/internal/Observable.ts#L383
 *
 * @param source The source observable
 * @returns An async iterator that reads from the observable
 */
export function observableAsyncIterator<T>(source: Observable<T>): AsyncGenerator<T, void, void> {
  let subscription: Subscription | undefined
  let hasError = false
  let error: unknown
  let completed = false
  const values: T[] = []
  const deferreds: [(value: IteratorResult<T>) => void, (reason: unknown) => void][] = []

  const handleError = (err: unknown) => {
    hasError = true
    error = err
    while (deferreds.length) {
      const [_, reject] = deferreds.shift()!
      reject(err)
    }
  }

  const handleComplete = () => {
    completed = true
    while (deferreds.length) {
      const [resolve] = deferreds.shift()!
      resolve({ value: undefined, done: true })
    }
  }

  return {
    next: (): Promise<IteratorResult<T>> => {
      if (!subscription) {
        // We only want to start the subscription when the user starts iterating.
        subscription = source.subscribe({
          next: (value) => {
            if (deferreds.length) {
              const [resolve] = deferreds.shift()!
              resolve({ value, done: false })
            } else {
              values.push(value)
            }
          },
          error: handleError,
          complete: handleComplete,
        })
      }

      // If we already have some values in our buffer, we'll return the next one.
      if (values.length) {
        return Promise.resolve({ value: values.shift()!, done: false })
      }

      // This was already completed, so we're just going to return a done result.
      if (completed) {
        return Promise.resolve({ value: undefined, done: true })
      }

      // There was an error, so we're going to return an error result.
      if (hasError) {
        return Promise.reject(error)
      }

      // Otherwise, we need to make them wait for a value.
      return new Promise((resolve, reject) => {
        deferreds.push([resolve, reject])
      })
    },
    throw: (err): Promise<IteratorResult<T>> => {
      subscription?.unsubscribe()
      // NOTE: I did some research on this, and as of Feb 2023, Chrome doesn't seem to do
      // anything with pending promises returned from `next()` when `throw()` is called.
      // However, for consumption of observables, I don't want RxJS taking the heat for that
      // quirk/leak of the type. So we're going to reject all pending promises we've nexted out here.
      handleError(err)
      return Promise.reject(err)
    },
    return: (): Promise<IteratorResult<T>> => {
      subscription?.unsubscribe()
      // NOTE: I did some research on this, and as of Feb 2023, Chrome doesn't seem to do
      // anything with pending promises returned from `next()` when `throw()` is called.
      // However, for consumption of observables, I don't want RxJS taking the heat for that
      // quirk/leak of the type. So we're going to resolve all pending promises we've nexted out here.
      handleComplete()
      return Promise.resolve({ value: undefined, done: true })
    },
    [Symbol.asyncIterator]() {
      return this
    },
  }
}
