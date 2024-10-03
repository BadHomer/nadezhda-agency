import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],

    server: {
        host: true,
        port: 3333,
        hmr: {
            path: '/ws',
            clientPort: 3332,
            port: 3332
        },
        watch: {
            usePolling: true,
        },

    }
})
