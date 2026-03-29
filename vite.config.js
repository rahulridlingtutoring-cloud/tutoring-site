import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Only ONE export default block allowed!
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})