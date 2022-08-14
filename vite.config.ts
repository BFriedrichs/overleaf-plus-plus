import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import preact from '@preact/preset-vite';

const iifeWrap = () => {
  return {
    name: 'iife-wrap-content',

    generateBundle(code, bundle) {
      const codeBundle = bundle['assets/content.js'];
      codeBundle['code'] = `(() => {${codeBundle['code']}})();`;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    // sourcemap: 'inline',
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
      plugins: [iifeWrap()],
    },
  },
});
