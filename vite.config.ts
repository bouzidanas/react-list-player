import { defineConfig } from 'vite'
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'rpp',
      fileName: 'rpp',
    },
  },
  plugins: [dts()],
});