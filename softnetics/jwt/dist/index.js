"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  JwtLibrary: () => JwtLibrary
});
module.exports = __toCommonJS(src_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));

// src/types/index.ts
var JwtSecretRequestType;
(function(JwtSecretRequestType2) {
  JwtSecretRequestType2[JwtSecretRequestType2["SIGN"] = 0] = "SIGN";
  JwtSecretRequestType2[JwtSecretRequestType2["VERIFY"] = 1] = "VERIFY";
})(JwtSecretRequestType || (JwtSecretRequestType = {}));

// src/index.ts
var JwtLibrary = class {
  static {
    __name(this, "JwtLibrary");
  }
  options;
  constructor(options = {}) {
    this.options = options;
  }
  sign(payload, options) {
    const signOptions = this.mergeJwtOptions({
      ...options
    }, "signOptions");
    const secret = this.getSecretKey(payload, options, "privateKey", JwtSecretRequestType.SIGN);
    const allowedSignOptKeys = [
      "secret",
      "privateKey"
    ];
    const signOptKeys = Object.keys(signOptions);
    if (typeof payload === "string" && signOptKeys.some((k) => !allowedSignOptKeys.includes(k))) {
      throw new Error("Payload as string is not allowed with the following sign options: " + signOptKeys.join(", "));
    }
    return import_jsonwebtoken.default.sign(payload, secret, signOptions);
  }
  signAsync(payload, options) {
    const signOptions = this.mergeJwtOptions({
      ...options
    }, "signOptions");
    const secret = this.getSecretKey(payload, options, "privateKey", JwtSecretRequestType.SIGN);
    const allowedSignOptKeys = [
      "secret",
      "privateKey"
    ];
    const signOptKeys = Object.keys(signOptions);
    if (typeof payload === "string" && signOptKeys.some((k) => !allowedSignOptKeys.includes(k))) {
      throw new Error("Payload as string is not allowed with the following sign options: " + signOptKeys.join(", "));
    }
    return new Promise((resolve, reject) => import_jsonwebtoken.default.sign(payload, secret, signOptions, (err, encoded) => err ? reject(err) : resolve(encoded)));
  }
  verify(token, options) {
    const verifyOptions = this.mergeJwtOptions({
      ...options
    }, "verifyOptions");
    const secret = this.getSecretKey(token, options, "publicKey", JwtSecretRequestType.VERIFY);
    return import_jsonwebtoken.default.verify(token, secret, verifyOptions);
  }
  verifyAsync(token, options) {
    const verifyOptions = this.mergeJwtOptions({
      ...options
    }, "verifyOptions");
    const secret = this.getSecretKey(token, options, "publicKey", JwtSecretRequestType.VERIFY);
    return new Promise((resolve, reject) => import_jsonwebtoken.default.verify(token, secret, verifyOptions, (err, decoded) => err ? reject(err) : resolve(decoded)));
  }
  decode(token, options) {
    return import_jsonwebtoken.default.decode(token, options);
  }
  mergeJwtOptions(options, key) {
    delete options.secret;
    if (key === "signOptions") {
      delete options.privateKey;
    } else {
      delete options.publicKey;
    }
    return options ? {
      ...this.options[key] || {},
      ...options
    } : this.options[key] ?? {};
  }
  getSecretKey(token, options, key, secretRequestType) {
    let secret = this.options.secretOrKeyProvider ? this.options.secretOrKeyProvider(secretRequestType, token, options) : options?.secret || this.options.secret || (key === "privateKey" ? options?.privateKey || this.options.privateKey : options?.publicKey || this.options.publicKey) || this.options[key];
    if (this.options.secretOrPrivateKey) {
      secret = this.options.secretOrPrivateKey;
    }
    return secret;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JwtLibrary
});
