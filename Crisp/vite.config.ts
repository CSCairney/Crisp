import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~/': path.resolve(__dirname, 'src/'),
      '~/modules/': path.resolve(__dirname, 'src/modules/'),
      '~/pages/': path.resolve(__dirname, 'src/pages/'),
      '~/routes/': path.resolve(__dirname, 'src/routes/'),
      '~/styles/': path.resolve(__dirname, 'src/styles/'),
      '~/assets/': path.resolve(__dirname, 'src/assets/'),
    },
  },
})
