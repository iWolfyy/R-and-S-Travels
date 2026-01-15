import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/R-and-S-Travels/', // Match your repository name exactly!
  plugins: [react()],
})
