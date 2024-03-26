const config = require('@luminate/project-config/eslint/base')

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ...config,
  rules: {
    ...config.rules,
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
