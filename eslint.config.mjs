import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  globalIgnores([
    '**/.DS_Store',
    '**/node_modules',
    'build',
    '.svelte-kit',
    'package',
    '**/.env',
    '**/.env.*',
    '!**/.env.example',
    '**/pnpm-lock.yaml',
    '**/package-lock.json',
    '**/yarn.lock'
  ]),

  js.configs.recommended,

  svelte.configs.recommended,

  // Disable Svelte formatting rules that conflict with Prettier
  svelte.configs.prettier,

  {
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,

      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    rules: {
      'svelte/no-at-html-tags': 'off'
    }
  },

  eslintPluginPrettierRecommended
]);
