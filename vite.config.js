import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Recharts imports react-is; ensure both are pre-bundled so dev resolves correctly.
    include: ['react-is', 'recharts'],
  },
})
