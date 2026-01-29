import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'handson/challenge/test/**/*.{test.ts,test.tsx}',
      'handson/answer/test/**/*.{test.ts,test.tsx}',
      'src/**/*.test.{ts,tsx}',
    ],
    setupFiles: ['./vitest.setup.ts'],
  },
})
