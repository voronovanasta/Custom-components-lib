import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      prettier,
      react: pluginReact,
      jest: pluginJest,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: ['plugin:jest/recommended', 'plugin:jest/recommended'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
