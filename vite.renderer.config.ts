import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import autoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config
export default defineConfig(async () => {
  const vue = (await import('@vitejs/plugin-vue')).default;
  const tailwindcss = (await import('@tailwindcss/vite')).default;

  return {
    plugins: [
      vue(), //
      tailwindcss(),
      autoImport({
        imports: [
          'vue', //
          'vue-router',
          'pinia',
          'vue-i18n',
          {
            'naive-ui': [
              ['useDialog', '$useDialog'], //
              ['useMessage', '$useMessage'],
              ['useNotification', '$useNotification'],
              ['useLoadingBar', '$useLoadingBar'],
            ],
          },
        ],
        dts: 'src/renderer/auto-imports.d.ts',
      }),
    ],
    build: {
      target: 'es2020',
      rollupOptions: {
        input: [
          resolve(__dirname, 'html/index.html'),
          resolve(__dirname, 'html/dialog.html'),
          resolve(__dirname, 'html/setting.html'),
        ],
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@common': resolve(__dirname, 'src/common'),
        '@main': resolve(__dirname, 'src/main'),
        '@renderer': resolve(__dirname, 'src/renderer'),
        '@locales': resolve(__dirname, 'locales'),
      },
    },
  };
});
