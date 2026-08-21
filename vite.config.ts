import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/pidpidpid/', // 👈 Add your exact GitHub repo name here
})
