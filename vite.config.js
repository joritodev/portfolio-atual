const { defineConfig, loadEnv } = require('vite');
const react = require('@vitejs/plugin-react');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true
    },
    define: {
      'process.env': env
    }
  };
});
