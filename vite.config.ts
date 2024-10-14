import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/

import type { UserConfig as VitestUserConfig } from 'vitest/config';
declare module 'vite' {
  export interface UserConfig {
    test: VitestUserConfig['test'];
  }
}
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: 'src/app/testSetup.ts',
    testMatch: ['src/?(*.)+(test).tsx'],
    globals: true,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@store': path.resolve(__dirname, 'src/app/store'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
});
