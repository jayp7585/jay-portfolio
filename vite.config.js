
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jay-portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  }
})
