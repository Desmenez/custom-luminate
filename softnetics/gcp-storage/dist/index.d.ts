import { StorageOptions, Bucket } from '@google-cloud/storage';

interface FileUploadCacheObject<T = unknown> {
    callbackMessagePattern: string;
    payload: T;
}
interface FileUploadDetails {
    url: string;
    token: string;
}

type BucketStorageConfig = StorageOptions & {
    bucketName: string;
};
interface FileServiceOptions {
    publicStorageOption?: BucketStorageConfig & {
        cdnBaseUrl?: string;
    };
    privateStorageOption?: BucketStorageConfig & {
        privateCdnBaseUrl?: string;
        privateCdnSignedUrlKey?: string;
        privateCdnSignedUrlKeyName?: string;
    };
    transcoderStorageOption?: BucketStorageConfig;
}
interface ICacheService {
    getObject<T>(key: string): Promise<T | null>;
    del(key: string): Promise<number>;
    setObject<T>(key: string, value: T, ttl?: number): Promise<string | null>;
}

declare class FileError extends Error {
    constructor(message: string);
}

declare class FileService {
    private readonly cacheService;
    protected readonly privateBucket: Bucket;
    protected readonly publicBucket: Bucket;
    protected readonly transcoderBucket: Bucket;
    protected readonly cdnBaseUrl: string;
    protected readonly privateCdnBaseUrl: string;
    protected readonly privateCdnSignedUrlKey: string;
    protected readonly privateCdnSignedUrlKeyName: string;
    constructor({ publicStorageOption, privateStorageOption, transcoderStorageOption }: FileServiceOptions, cacheService: ICacheService);
    getPublicUploadFileUrl(bucketPath: string, messagePatternCallbackName: string, payload: unknown): Promise<FileUploadDetails>;
    getPrivateUploadFileUrl(bucketPath: string, messagePatternCallbackName: string, payload: unknown): Promise<FileUploadDetails>;
    getPublicUrl(bucketPath: string): Promise<string>;
    getPrivateUrl(bucketPath: string): Promise<string>;
    deletePublicFile(bucketPath: string): Promise<void>;
    deletePrivateFile(bucketPath: string): Promise<void>;
    copyPublicFile(src: string, dest: string): Promise<void>;
    copyPrivateFile(src: string, dest: string): Promise<void>;
    listPublicFile(prefix: string): Promise<string[]>;
    listPrivateFile(prefix: string): Promise<string[]>;
    ensurePublicFile(bucketPath: string): Promise<boolean>;
    ensurePrivateFile(bucketPath: string): Promise<boolean>;
    isPublicFileExist(bucketPath: string): Promise<boolean>;
    isPrivateFileExist(bucketPath: string): Promise<boolean>;
    retrieveTokenValue<T>(token: string): Promise<FileUploadCacheObject<T> | null>;
    copyPrivateToTranscoderBucket(bucketPath: string): Promise<void>;
    private getUploadFileUrl;
    private deleteFile;
    private listFiles;
    private isFileExist;
    private copyFile;
}
type IFileService = FileService;

export { BucketStorageConfig, FileError, FileService, FileServiceOptions, FileUploadCacheObject, FileUploadDetails, ICacheService, IFileService };
