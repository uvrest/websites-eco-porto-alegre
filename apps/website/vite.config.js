import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { optimizeDeps } from '../../packages/config/vite.optimize.config.js';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
    resolve: {
      alias: {
        '@website': path.resolve(__dirname, './src'),
        '@uverest/config': path.resolve(__dirname, '../../packages/config'),
        '@uverest/shared': path.resolve(__dirname, '../../packages/shared'),
        '@uverest/themes': path.resolve(__dirname, '../../packages/themes'),
        '@uverest/design-system': path.resolve(__dirname, '../../packages/design-system'),
        '@uverest/services': path.resolve(__dirname, '../../packages/services'),
        '@uverest/utils': path.resolve(__dirname, '../../packages/utils'),
      },
    },
    optimizeDeps: optimizeDeps,
  };
});