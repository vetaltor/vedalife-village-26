import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import { generateScopedName } from './tools/generateScopedName.ts';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: env.VITE_BASE_URL, // GitHub repository name
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
    server: {
      port: 3000,
    },
    css: {
      modules: {
        // Option A: Custom function for complete control
        generateScopedName: generateScopedName,

        // Option B: Template string (Uncomment to use instead of a function)
        // generateScopedName: '[name]__[local]___[hash:base64:5]'
      },
    },
  };
});
