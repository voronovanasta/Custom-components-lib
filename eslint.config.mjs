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
      'jest/globals': true,
    },
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      prettier: prettier,
      js,
      jest,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: ['js/recommended', 'plugin:jest/recommended'],
    rules: {
      ...js.configs.recommended.rules,
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
