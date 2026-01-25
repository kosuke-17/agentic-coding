import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'handson/test/**/*.test.ts',
      'handson/challenge/test/**/*.{test.ts,test.tsx}',
      'handson/answer/test/**/*.{test.ts,test.tsx}',
    ],
    setupFiles: ['./vitest.setup.ts'],
  },
})
