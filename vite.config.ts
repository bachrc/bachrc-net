import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  
  build: {
    // Ensure assets are properly referenced with base path
    assetsDir: 'assets'
  }
});
