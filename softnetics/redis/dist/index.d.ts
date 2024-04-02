import { RedisClientType } from 'redis';
import { Observable } from 'rxjs';

declare class RedisService {
    private readonly client;
    private readonly subscribeClient?;
    constructor(client: RedisClientType, subscribeClient?: RedisClientType | undefined);
    get(key: string): Promise<string | null>;
    getObject<T>(key: string): Promise<T | null>;
    set(key: string, value: string, expiredAt?: number | Date): Promise<string | null>;
    setObject<T>(key: string, value: T, expiredAt?: number | Date): Promise<string | null>;
    update(key: string, value: string): Promise<string | null>;
    updateObject<T>(key: string, value: T): Promise<string | null>;
    hGet(key: string, field: string): Promise<string | undefined>;
    hmget(key: string, ...fields: string[]): Promise<Array<string | undefined>>;
    hGetAll<T>(key: string): Promise<T | null>;
    publish(channel: string, message: string): Promise<number>;
    publishObject<T>(channel: string, payload: T): Promise<number>;
    subscribe<TReturnBuffers extends boolean = false>(channel: string, bufferMode?: TReturnBuffers | undefined): Observable<TReturnBuffers extends true ? Buffer : string>;
    subscribeObject<T>(channel: string): Observable<T>;
    waitFor(channel: string): Promise<string>;
    waitForObject<T>(channel: string): Promise<T>;
    exist(key: string): Promise<boolean>;
    del(key: string): Promise<number>;
    flush(): Promise<string>;
}

export { RedisService };
