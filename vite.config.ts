import { configDefaults, defineConfig } from 'vitest/config';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import magicalSvg from 'vite-plugin-magical-svg';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), magicalSvg({ target: 'react' }), viteCommonjs()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@e2e': path.resolve(__dirname, './__e2e__'),
    },
  },
  optimizeDeps: {
    exclude: ['react-hook-form'],
    esbuildOptions: {
      plugins: [
        esbuildCommonjs(['countup.js'])
      ]
    }
  },
  test: {
    exclude: [...configDefaults.exclude, '**/__e2e__/**'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    coverage: {
      exclude: ['./__e2e__'],
    },
    deps: {
      inline: [
        "countup.js"
      ]
    },
  },
});
