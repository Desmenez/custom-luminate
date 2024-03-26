import { defineConfig } from 'tsup'

export default defineConfig({
  bundle: false,
  format: ['cjs', 'esm'],
})
