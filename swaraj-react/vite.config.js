import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' is required on Cloudflare Pages so JS/CSS load from the site root.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
