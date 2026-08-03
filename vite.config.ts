import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // `process.cwd()` is deterministic for both `vite dev` and `vite build`
      // (npm always launches Vite from the project root), unlike `__dirname`
      // / `import.meta.url`, which Vite's config bundler mangles in dev.
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
  build: {
    // Route-level code splitting is handled with React.lazy() in App.tsx
    sourcemap: false,
    target: 'es2020',
    assetsInlineLimit: 4096,
  },
  server: {
    port: 5173,
    host: true,
  },
});
