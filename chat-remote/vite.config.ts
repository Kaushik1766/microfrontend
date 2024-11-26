import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'chat',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App',
      './ChatHistory': './src/pages/ChatHistory/index',
    },
    shared: ['react', 'react-dom'],
  })
  ],
  build: {
    target: 'chrome89',
  },
  server: {
    port: 4001,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
