import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    root: 'client',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'client/src/components'),
            '@view': path.resolve(__dirname, 'client/src/view'),
            '@assets': path.resolve(__dirname, 'client/src/assets')
        }
    },
    server: {
        proxy: {
            '/': 'http://127.0.0.1:7002'
        }
    },
    build: {
        outDir: '../app/public'
    },
    plugins: [vue()]
})
