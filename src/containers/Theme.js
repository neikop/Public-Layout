import { createTheme, ThemeProvider } from '@mui/material';

export const appTheme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
        inputProps: { autoSave: 'false' },
      },
    },
    MuiTypography: {
      defaultProps: {
        component: 'div',
      },
    },
    MuiButton: {
      styleOverrides: {
        textTransform: 'none',
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1440px !important',
        },
        maxWidthMd: {
          maxWidth: '1080px !important',
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiLink: {
      defaultProps: {
        target: '_blank',
      },
    },
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default Theme;
