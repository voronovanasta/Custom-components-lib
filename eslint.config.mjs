import js from '@eslint/js';
import pluginStorybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: [
      'dist/',
      'node_modules/',
      'storybook-static/',
      '**/*.bundle.js',
      '**/*.d.ts',
      'coverage/',
      'eslint.config.mjs',
      '.storybook/**',
      'src/.jest/identity-obj-proxy-esm.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    plugins: {
      react: pluginReact,
      jest: pluginJest,
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
    plugins: {
      jest: pluginJest,
    },
    extends: [pluginJest.configs['flat/recommended']],
  },
  {
    files: ['**/*.stories.@(js|jsx|ts|tsx)'],
    plugins: {
      storybook: pluginStorybook,
    },
  }
  //pluginStorybook.configs.flat.recommended
);
