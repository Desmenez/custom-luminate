import { RedisClientType } from 'redis'
import { Observable, map } from 'rxjs'

export class RedisService {
  constructor(
    private readonly client: RedisClientType,
    private readonly subscribeClient?: RedisClientType
  ) {}

  get(key: string): Promise<string | null> {
    return this.client.get(key)
  }

  async getObject<T>(key: string): Promise<T | null> {
    const result = await this.get(key)
    try {
      return result ? (JSON.parse(result) as T) : null
    } catch (error) {
      return null
    }
  }

  // expiredAt: unit seconds
  set(key: string, value: string, expiredAt: number | Date = 300) {
    if (typeof expiredAt === 'number') {
      return this.client.set(key, value, { EX: expiredAt })
    } else {
      return this.client.set(key, value, { PXAT: expiredAt.getTime() })
    }
  }

  setObject<T>(key: string, value: T, expiredAt: number | Date = 300) {
    return this.set(key, JSON.stringify(value), expiredAt)
  }

  update(key: string, value: string) {
    return this.client.set(key, value, { KEEPTTL: true })
  }

  updateObject<T>(key: string, value: T) {
    return this.update(key, JSON.stringify(value))
  }

  hGet(key: string, field: string): Promise<string | undefined> {
    return this.client.hGet(key, field)
  }

  async hmget(key: string, ...fields: string[]): Promise<Array<string | undefined>> {
    const results: Array<string | undefined> = []
    for (const field of fields) {
      const value = await this.hGet(key, field)
      results.push(value)
    }
    return results
  }

  async hGetAll<T>(key: string): Promise<T | null> {
    return (await this.client.hGetAll(key)) as unknown as T
  }

  publish(channel: string, message: string): Promise<number> {
    return this.client.publish(channel, message)
  }

  async publishObject<T>(channel: string, payload: T): Promise<number> {
    return await this.publish(channel, JSON.stringify(payload))
  }

  /**
   * Subscribe to a channel and return an observable
   *
   * @param channel The channel to subscribe to
   * @param bufferMode If true, the message will be returned as a Buffer instead of a string
   * @returns An observable that emits messages received on the channel
   */
  subscribe<TReturnBuffers extends boolean = false>(
    channel: string,
    bufferMode?: TReturnBuffers | undefined
  ): Observable<TReturnBuffers extends true ? Buffer : string> {
    if (!this.subscribeClient) {
      throw new Error('Subscribe client is not defined')
    }
    const client = this.subscribeClient
    return new Observable((subscriber) => {
      function listener<T extends TReturnBuffers extends true ? Buffer : string>(
        message: T,
        _channel: T
      ) {
        subscriber.next(message)
      }
      client.subscribe(channel, listener, bufferMode)
      return () => client.unsubscribe(channel, listener, bufferMode)
    })
  }

  /**
   * Same as subscribe, but parses the message as JSON
   */
  subscribeObject<T>(channel: string): Observable<T> {
    return this.subscribe(channel).pipe(map((message) => JSON.parse(message.toString()) as T))
  }

  async waitFor(channel: string): Promise<string> {
    const client = this.client.duplicate()
    return new Promise((resolve) =>
      client.subscribe(channel, (m, c) => {
        if (channel === c) {
          client.unsubscribe()
          resolve(m)
        }
      })
    )
  }

  async waitForObject<T>(channel: string): Promise<T> {
    const result = await this.waitFor(channel)
    return JSON.parse(result)
  }

  exist(key: string): Promise<boolean> {
    return this.client.exists(key).then((result) => result === 1)
  }

  del(key: string) {
    return this.client.del(key)
  }

  flush() {
    return this.client.flushAll()
  }
}
