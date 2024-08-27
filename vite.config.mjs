import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
          ],
          app: ['./src/main.tsx', './src/App.tsx'],
          framework: [
            '@mantine/core',
            '@mantine/hooks',
          ],
        },
      },
    },
    outDir: './docs',
    chunkSizeWarningLimit: 600,
  },
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//     },
//   },
// });