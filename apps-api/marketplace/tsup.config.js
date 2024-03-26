import { luminateTsupConfig } from '@luminate/tsup'

import { diCompilerPlugin } from './di-compiler-plugin'

export default luminateTsupConfig((options) => ({
  ...options,
  esbuildPlugins: [diCompilerPlugin],
  bundle: true,
}))
