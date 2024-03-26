import { defineConfig } from 'tsup'

export default defineConfig({
  noExternal: ['@luminate/database'],
})
