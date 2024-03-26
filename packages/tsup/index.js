import { findAllPackageMetadatas } from '@luminate/workspace'

/** @type {typeof import('tsup').defineConfig} */
export const luminateTsupConfig = (options) => {
  const noExternal = findAllPackageMetadatas(['packages/database']).map((p) => p.name)

  return (_cliOptions) => {
    /** @type {import('tsup').Options} */
    const defaultOptions = {
      entry: ['src/main.ts'],
      splitting: true,
      noExternal: noExternal,
      minify: false,
      clean: true,
      outDir: 'dist',
      // TODO: Prisma doesn't support ESM yet
      // https://github.com/prisma/prisma/issues/5030
      format: ['cjs'],
      sourcemap: true,
    }
    if (typeof options !== 'function') {
      return defaultOptions
    }
    return options(defaultOptions)
  }
}
