import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      input: {
        popup: fileURLToPath(
          new URL('./src/popup/index.html', import.meta.url)
        ),
        inject: fileURLToPath(new URL('./src/inject.ts', import.meta.url)),
        content: fileURLToPath(
          new URL('./src/content/index.ts', import.meta.url)
        ),
      },
      output: {
        name: '[name].[ext]',
        dir: 'dist',
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
