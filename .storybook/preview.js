import { themes } from '@storybook/theming';

export const parameters = {
  backgrounds: {
    default: 'dark-mode',
    values: [
      {
        name: 'dark-mode',
        value: '#222425',
      },
      {
        name: 'light-mode',
        value: '#FFF',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
    source: { excludeDecorators: true },
  },
};
