import { FastifyReply, FastifyRequest } from 'fastify'
import { Observable, interval, map, merge, takeUntil } from 'rxjs'

import { observableAsyncIterator } from './observableAsyncIterator'

export function startSseFromObservable(
  request: FastifyRequest,
  reply: FastifyReply,
  observable: Observable<any>
): never {
  const onClose = new Observable((subscriber) => {
    request.socket.on('close', () => {
      subscriber.next()
      subscriber.complete()
    })
  })
  const keepAlive = interval(30000).pipe(map(() => ({ event: 'keep-alive' })))
  const values = observable.pipe(
    map((value) => {
      return { event: 'message', data: JSON.stringify(value) }
    })
  )
  const valuesWithKeepAlive = merge(values, keepAlive)
  reply.sse(observableAsyncIterator(valuesWithKeepAlive.pipe(takeUntil(onClose))))
  throw new SwitchToSSEError()
}

export class SwitchToSSEError extends Error {}
