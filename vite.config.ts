import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import webExtension from 'vite-plugin-web-extension'

export default defineConfig({
  plugins: [
    preact(),
    webExtension({
      manifest: require('./manifest.json')
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
