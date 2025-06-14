import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    // Добавляем правило для обработки SCSS
    config.module = config.module || { rules: [] };
    config.module.rules!.push({
      test: /\.s[ac]ss$/i,
      use: [
        // В зависимости от окружения можно использовать style-loader или MiniCssExtractPlugin.loader
        require.resolve('style-loader'), // или MiniCssExtractPlugin.loader
        require.resolve('css-loader'),
        require.resolve('sass-loader'),
      ],
    });
    return config;
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
