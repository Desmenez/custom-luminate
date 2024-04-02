"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  FileError: () => FileError,
  FileService: () => FileService
});
module.exports = __toCommonJS(src_exports);
var import_storage = require("@google-cloud/storage");
var import_date_fns = require("date-fns");
var import_nanoid = require("nanoid");

// src/errors/index.ts
var FileError = class extends Error {
  static {
    __name(this, "FileError");
  }
  constructor(message) {
    super(message);
  }
};

// src/index.ts
var FileService = class {
  static {
    __name(this, "FileService");
  }
  cacheService;
  privateBucket;
  publicBucket;
  transcoderBucket;
  cdnBaseUrl;
  privateCdnBaseUrl;
  privateCdnSignedUrlKey;
  privateCdnSignedUrlKeyName;
  constructor({ publicStorageOption, privateStorageOption, transcoderStorageOption }, cacheService) {
    this.cacheService = cacheService;
    if (privateStorageOption) {
      const { bucketName: privateBucketName, privateCdnBaseUrl, privateCdnSignedUrlKey, privateCdnSignedUrlKeyName, ...privateStorage } = privateStorageOption;
      if (privateStorage && privateBucketName) {
        this.privateBucket = new import_storage.Storage(privateStorage).bucket(privateBucketName);
      }
      if (privateCdnBaseUrl) {
        this.privateCdnBaseUrl = privateCdnBaseUrl;
      }
      if (privateCdnSignedUrlKey) {
        this.privateCdnSignedUrlKey = privateCdnSignedUrlKey;
      }
      if (privateCdnSignedUrlKeyName) {
        this.privateCdnSignedUrlKeyName = privateCdnSignedUrlKeyName;
      }
    }
    if (publicStorageOption) {
      const { bucketName: publicBucketName, cdnBaseUrl, ...publicStorage } = publicStorageOption;
      if (publicStorage && publicBucketName) {
        this.publicBucket = new import_storage.Storage(publicStorage).bucket(publicBucketName);
      }
      if (transcoderStorageOption) {
        const { bucketName: transcoderBucketName, ...transcoderStorage } = transcoderStorageOption;
        if (transcoderStorage && transcoderBucketName) {
          this.transcoderBucket = new import_storage.Storage(transcoderStorage).bucket(transcoderBucketName);
        }
      }
      if (cdnBaseUrl) {
        this.cdnBaseUrl = cdnBaseUrl;
      }
    }
  }
  getPublicUploadFileUrl(bucketPath, messagePatternCallbackName, payload) {
    return this.getUploadFileUrl(bucketPath, true, messagePatternCallbackName, payload);
  }
  getPrivateUploadFileUrl(bucketPath, messagePatternCallbackName, payload) {
    return this.getUploadFileUrl(bucketPath, false, messagePatternCallbackName, payload);
  }
  async getPublicUrl(bucketPath) {
    if (this.cdnBaseUrl) {
      return this.cdnBaseUrl + `/${bucketPath}`;
    } else {
      const file = this.publicBucket.file(bucketPath);
      return file.publicUrl();
    }
  }
  async getPrivateUrl(bucketPath) {
    const file = this.privateBucket.file(bucketPath);
    const [signedUrl] = await file.getSignedUrl({
      action: "read",
      expires: (0, import_date_fns.addHours)(/* @__PURE__ */ new Date(), 1),
      version: "v4"
    });
    return signedUrl;
  }
  async deletePublicFile(bucketPath) {
    await this.deleteFile(bucketPath, true);
  }
  async deletePrivateFile(bucketPath) {
    await this.deleteFile(bucketPath, false);
  }
  async copyPublicFile(src, dest) {
    await this.copyFile(src, dest, true);
  }
  async copyPrivateFile(src, dest) {
    await this.copyFile(src, dest, false);
  }
  listPublicFile(prefix) {
    return this.listFiles(prefix, true);
  }
  listPrivateFile(prefix) {
    return this.listFiles(prefix, false);
  }
  async ensurePublicFile(bucketPath) {
    const isExist = await this.isFileExist(bucketPath, true);
    if (!isExist) {
      throw new FileError("File not exist in public bucket");
    }
    return true;
  }
  async ensurePrivateFile(bucketPath) {
    const isExist = await this.isFileExist(bucketPath, false);
    if (!isExist) {
      throw new FileError("File not exist in private bucket");
    }
    return true;
  }
  async isPublicFileExist(bucketPath) {
    return this.isFileExist(bucketPath, true);
  }
  async isPrivateFileExist(bucketPath) {
    return this.isFileExist(bucketPath, false);
  }
  async retrieveTokenValue(token) {
    const key = `fileUpload:${token}`;
    const value = await this.cacheService.getObject(key);
    if (!value) {
      return null;
    }
    await this.cacheService.del(key);
    return {
      ...value
    };
  }
  async copyPrivateToTranscoderBucket(bucketPath) {
    if (this.privateBucket && this.transcoderBucket) {
      await this.privateBucket.file(bucketPath).copy(this.transcoderBucket.file(bucketPath));
    }
  }
  async getUploadFileUrl(bucketPath, isPublic, callbackMessagePattern, payload) {
    const file = isPublic ? this.publicBucket.file(bucketPath) : this.privateBucket.file(bucketPath);
    const [signedUrl] = await file.getSignedUrl({
      action: "write",
      expires: (0, import_date_fns.addMinutes)(/* @__PURE__ */ new Date(), 15),
      version: "v4"
    });
    const token = (0, import_nanoid.nanoid)(10);
    await this.cacheService.setObject(`fileUpload:${token}`, {
      callbackMessagePattern,
      payload
    });
    return {
      url: signedUrl,
      token
    };
  }
  async deleteFile(bucketPath, isPublic) {
    const file = isPublic ? this.publicBucket.file(bucketPath) : this.privateBucket.file(bucketPath);
    await file.delete();
  }
  async listFiles(prefix, isPublic) {
    const [files] = await (isPublic ? this.publicBucket.getFiles({
      prefix
    }) : this.privateBucket.getFiles({
      prefix
    }));
    return files.map((f) => f.name);
  }
  async isFileExist(bucketPath, isPublic) {
    const file = isPublic ? this.publicBucket.file(bucketPath) : this.privateBucket.file(bucketPath);
    const [isExist] = await file.exists();
    return isExist;
  }
  async copyFile(src, dest, isPublic) {
    const file = isPublic ? this.publicBucket.file(src) : this.privateBucket.file(src);
    await file.copy(dest);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FileError,
  FileService
});
