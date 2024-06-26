const { defineConfig } = require('eslint-define-config')

const config = defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
  },
  ignorePatterns: [
    '.next',
    'dist',
    'apps/api/src/graphql.ts',
    'packages/codegen/src/generated/index.tsx',
  ],
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: '18.2.0',
    },
    next: {
      rootDir: ['apps/*/'],
    },
  },
})

module.exports = config
