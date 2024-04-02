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
  createIdentity: () => createIdentity,
  createPolicy: () => createPolicy
});
module.exports = __toCommonJS(src_exports);
function createPolicy({ name, permissions, roles }) {
  return {
    name,
    permissions,
    roles
  };
}
__name(createPolicy, "createPolicy");
function createIdentity({ identities, policies }) {
  const table = {};
  const allPerm = {};
  policies.forEach((policy) => {
    Object.keys(policy.roles).forEach((role) => {
      const key = `${policy.name}.${role}`;
      allPerm[key] = /* @__PURE__ */ new Set();
      const permissions = policy.roles[role];
      if (permissions === "*") {
        Object.keys(policy.permissions).forEach((permission) => {
          policy.permissions[permission].forEach((p) => {
            allPerm[key].add(`${policy.name}.${permission}.${p}`);
          });
        });
      } else {
        permissions.forEach((permissions2) => {
          if (permissions2.endsWith(".*")) {
            policy.permissions[permissions2.replace(".*", "")].forEach((p) => {
              allPerm[key].add(`${policy.name}.${permissions2.replace(".*", "")}.${p}`);
            });
            return;
          }
          allPerm[key].add(`${policy.name}.${permissions2}`);
        });
      }
    });
  });
  Object.keys(identities).forEach((role) => {
    table[role] = {};
    identities[role].forEach((policy) => {
      Object.keys(policy).forEach((_role) => {
        const permissions = allPerm[policy];
        permissions.forEach((permission) => {
          table[role][permission] = true;
        });
      });
    });
  });
  const enforce = /* @__PURE__ */ __name((identity, permissions) => {
    return permissions.every((permission) => {
      return table[identity] !== void 0 && table[identity][permission] === true;
    });
  }, "enforce");
  const identityList = Object.keys(table);
  const allPermissions = Object.values(allPerm).flatMap((p) => [
    ...p
  ]);
  return {
    identities: identityList,
    allPermissions,
    enforce
  };
}
__name(createIdentity, "createIdentity");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createIdentity,
  createPolicy
});
