import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Especifica el CARACTER A USER para importar por default desde ./src/* (se sutituye por "@")
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
