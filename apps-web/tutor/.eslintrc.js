const base = require('@luminate/project-config/eslint/next')

const config = {
  ...base,
  extends: [...(base.extends ?? []), 'plugin:storybook/recommended'],
}

module.exports = config
