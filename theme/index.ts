import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'violet',
  radius: {
    md: '0.5rem',
  },
  shadows: {
    md: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});
