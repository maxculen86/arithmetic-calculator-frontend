import { createTheme } from '@mui/material/styles';
import { Theme as AmplifyTheme } from '@aws-amplify/ui-react';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#047D95',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif',
  },
});

export const amplifyTheme: AmplifyTheme = {
  name: 'my-theme',
  tokens: {
    colors: {
      font: {
        primary: { value: baseTheme.palette.text.primary },
        secondary: { value: baseTheme.palette.text.secondary },
      },
      background: {
        primary: { value: baseTheme.palette.background.default },
        secondary: { value: baseTheme.palette.background.paper },
      },
      border: {
        primary: { value: baseTheme.palette.divider },
      },
    },
    fonts: {
      default: {
        variable: { value: baseTheme.typography.fontFamily || '' },
        static: { value: baseTheme.typography.fontFamily || '' },
      },
    },
    components: {
      button: {
        primary: {
          backgroundColor: { value: baseTheme.palette.primary.main },
          color: { value: baseTheme.palette.primary.contrastText },
        },
      },
    },
  },
};

export default baseTheme;