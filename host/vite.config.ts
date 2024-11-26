import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'host',
    filename: 'remoteEntry.js',
    remotes: {
      chat: {
        name: 'chat',
        type: 'module',
        entry: 'http://localhost:4001/remoteEntry.js',
      },
    },
    shared: ['react', 'react-dom'],
  })
  ],
  build: {
    target: 'chrome89',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
