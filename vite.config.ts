import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd())
      ]
    }
  },
  build: {
    // Ensure assets are properly referenced with base path
    assetsDir: 'assets'
  }
});
