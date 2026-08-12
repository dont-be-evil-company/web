import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { svelteSitemap } from 'svelte-sitemap/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteSitemap({
      domain: 'https://the-dont-be-evil-company.com',
      trailingSlashes: false,
      ignore: ['/404.html', '/500.html', '/google*.html']
    })
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
