// @ts-check
const { defineConfig } = require('eslint-define-config')
const base = require('./base')
const config = defineConfig({
  ...base,
  extends: [...(base.extends ?? []), 'next/core-web-vitals'],
})

module.exports = config
