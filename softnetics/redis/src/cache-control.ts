import { RedisService } from './index'

abstract class AbstractCacheControl<T, U extends { [key: string]: unknown }> {
  constructor(
    protected redisService: RedisService,
    protected keyFn: (args?: U) => string,
    protected ttl: number,
    protected getValueFn: (args: U) => Promise<T>,
    protected setValueFn?: (args: U, val: T) => Promise<unknown>
  ) {}

  async del(param: U) {
    const key = this.keyFn(param)
    await this.redisService.del(key)
  }
}

export class CacheControl<
  T extends string | number,
  U extends { [key: string]: unknown },
> extends AbstractCacheControl<T, U> {
  async get(param: U): Promise<T> {
    const key = this.keyFn(param)
    const isExist = await this.redisService.exist(key)
    if (isExist) {
      const result = await this.redisService.get(key)

      return result as unknown as T
    }
    const value = await this.getValueFn(param)
    await this.redisService.set(key, value as unknown as string, this.ttl)
    return value
  }

  async set(param: U, value: T) {
    await this.setValueFn?.(param, value)
    const key = this.keyFn(param)
    await this.redisService.set(key, value as unknown as string)
  }
}

export class ObjectCacheControl<
  T extends object,
  U extends { [key: string]: unknown },
> extends AbstractCacheControl<T, U> {
  async get(param: U): Promise<T> {
    const key = this.keyFn(param)
    const result = await this.redisService.getObject<T>(key)
    if (result !== null) {
      return result
    }
    const value = await this.getValueFn(param)
    await this.redisService.setObject<T>(key, value, this.ttl)
    return value
  }

  async set(param: U, value: T) {
    await this.setValueFn?.(param, value)
    const key = this.keyFn(param)
    await this.redisService.setObject(key, value)
  }
}
