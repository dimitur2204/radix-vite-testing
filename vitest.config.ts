import { defineConfig } from 'vitest/config';
import ViteTSconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [ViteTSconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
  },
});

