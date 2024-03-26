import { transform } from '@wessberg/di-compiler'
import fs from 'fs'

export const diCompilerPlugin = {
  name: 'di-compiler',
  setup(build) {
    build.onLoad({ filter: /\.ts$/ }, async (args) => {
      let originalCode = await fs.promises.readFile(args.path, 'utf8')
      let { code } = transform(originalCode, args.path, {
        identifier: 'container',
        compilerOptions: {
          sourceMap: true,
          inlineSourceMap: true,
        },
      })
      return {
        contents: code,
        loader: 'ts',
      }
    })
  },
}
