import type { Preview } from '@storybook/react-webpack5';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      codePanel: true
    }
  },

  tags: ['autodocs']
};

export default preview;
