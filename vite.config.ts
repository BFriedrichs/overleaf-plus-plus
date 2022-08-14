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

const replaceCode = () => {
  return {
    name: 'replace-code',

    generateBundle(code, bundle) {
      const inlinedFiles = ['storage.js'];
      const storedCode = {};
      for (const key of inlinedFiles) {
        const code = bundle['assets/' + key].code;
        const exportRx = /export\{([a-z]+ as [a-z]+,?)+\};/;
        const exports = code.match(exportRx);
        const exportVars = exports[0].matchAll(/([a-z]+) as ([a-z]+),?/g);

        const outVars = [];
        const returnStrings = [];
        for (const v of exportVars) {
          const internal = v[1];
          const out = v[2];
          returnStrings.push(`${out}:${internal}`);
          outVars.push(out);
        }
        const fullCode = `(() => {${code.replace(
          exportRx,
          ''
        )}return {${returnStrings.join(',')}}})();`;

        storedCode[key] = fullCode;
      }

      for (const key of inlinedFiles) {
        // eslint-disable-next-line no-useless-escape, prettier/prettier
        const importRx = new RegExp(`import\{([a-z]+ as [a-z]+,?)+\}from"\.\/${key}";`);
        for (const bundleKey of Object.keys(bundle)) {
          if (!bundle[bundleKey].code) {
            continue;
          }
          const code = bundle[bundleKey].code;

          let stored = storedCode[key];
          const imports = code.match(importRx);
          if (imports) {
            const importVars = imports[0].matchAll(/([a-z]+) as ([a-z]+),?/g);
            const importStrings = [];
            for (const v of importVars) {
              const out = v[1];
              const exposed = v[2];
              importStrings.push(`${out}: ${exposed}`);
            }
            stored = `const {${importStrings.join(',')}}=${stored}`;
          }

          bundle[bundleKey].code = code.replace(importRx, stored);
        }
      }
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    // sourcemap: 'inline',
    rollupOptions: {
      preserveEntrySignatures: 'strict',
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
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
      plugins: [iifeWrap(), replaceCode()],
    },
  },
});
