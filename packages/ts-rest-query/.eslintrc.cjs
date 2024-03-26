const config = require('@luminate/project-config/eslint/base')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    // Trying to keep the codebase close to `@ts-rest/react-query`, so will be ignoring these for now
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'off',
  },
}
