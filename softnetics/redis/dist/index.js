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
  RedisService: () => RedisService
});
module.exports = __toCommonJS(src_exports);
var import_rxjs = require("rxjs");
var RedisService = class {
  static {
    __name(this, "RedisService");
  }
  client;
  subscribeClient;
  constructor(client, subscribeClient) {
    this.client = client;
    this.subscribeClient = subscribeClient;
  }
  get(key) {
    return this.client.get(key);
  }
  async getObject(key) {
    const result = await this.get(key);
    try {
      return result ? JSON.parse(result) : null;
    } catch (error) {
      return null;
    }
  }
  // expiredAt: unit seconds
  set(key, value, expiredAt = 300) {
    if (typeof expiredAt === "number") {
      return this.client.set(key, value, {
        EX: expiredAt
      });
    } else {
      return this.client.set(key, value, {
        PXAT: expiredAt.getTime()
      });
    }
  }
  setObject(key, value, expiredAt = 300) {
    return this.set(key, JSON.stringify(value), expiredAt);
  }
  update(key, value) {
    return this.client.set(key, value, {
      KEEPTTL: true
    });
  }
  updateObject(key, value) {
    return this.update(key, JSON.stringify(value));
  }
  hGet(key, field) {
    return this.client.hGet(key, field);
  }
  async hmget(key, ...fields) {
    const results = [];
    for (const field of fields) {
      const value = await this.hGet(key, field);
      results.push(value);
    }
    return results;
  }
  async hGetAll(key) {
    return await this.client.hGetAll(key);
  }
  publish(channel, message) {
    return this.client.publish(channel, message);
  }
  async publishObject(channel, payload) {
    return await this.publish(channel, JSON.stringify(payload));
  }
  /**
  * Subscribe to a channel and return an observable
  *
  * @param channel The channel to subscribe to
  * @param bufferMode If true, the message will be returned as a Buffer instead of a string
  * @returns An observable that emits messages received on the channel
  */
  subscribe(channel, bufferMode) {
    if (!this.subscribeClient) {
      throw new Error("Subscribe client is not defined");
    }
    const client = this.subscribeClient;
    return new import_rxjs.Observable((subscriber) => {
      function listener(message, _channel) {
        subscriber.next(message);
      }
      __name(listener, "listener");
      client.subscribe(channel, listener, bufferMode);
      return () => client.unsubscribe(channel, listener, bufferMode);
    });
  }
  /**
  * Same as subscribe, but parses the message as JSON
  */
  subscribeObject(channel) {
    return this.subscribe(channel).pipe((0, import_rxjs.map)((message) => JSON.parse(message.toString())));
  }
  async waitFor(channel) {
    const client = this.client.duplicate();
    return new Promise((resolve) => client.subscribe(channel, (m, c) => {
      if (channel === c) {
        client.unsubscribe();
        resolve(m);
      }
    }));
  }
  async waitForObject(channel) {
    const result = await this.waitFor(channel);
    return JSON.parse(result);
  }
  exist(key) {
    return this.client.exists(key).then((result) => result === 1);
  }
  del(key) {
    return this.client.del(key);
  }
  flush() {
    return this.client.flushAll();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RedisService
});
