import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@heroicons/react'],
  },
  resolve: {
    alias: {
      '@mui/icons-material': '@mui/icons-material',
    },
  },
})
