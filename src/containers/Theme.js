import { createTheme, ThemeProvider } from '@mui/material';

export const appTheme = createTheme({
  props: {
    MuiTextField: {
      InputLabelProps: { shrink: true },
      inputProps: { autoSave: 'false' },
    },
    MuiTypography: {
      component: 'div',
    },
    // MuiInputBase: {
    //   style: {
    //     backgroundColor: '#fff',
    //   },
    // },
    MuiButton: {
      style: {
        textTransform: 'none',
      },
    },
    MuiContainer: {
      maxWidth: 'xl',
    },
    MuiTooltip: {
      arrow: true,
    },
    MuiLink: {
      target: '_blank',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    // button: { fontWeight: 600, textTransform: 'none' },
    // h1: { fontWeight: 700 },
    // h2: { fontWeight: 700 },
    // h3: { fontWeight: 700 },
    // h4: { fontWeight: 700 },
    // h5: { fontWeight: 700 },
    // h6: { fontWeight: 700 },
    // subtitle1: { fontWeight: 600, lineHeight: 1.5 },
    // subtitle2: { fontWeight: 600, lineHeight: 1.43 },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '0.725rem',
      },
    },
    MuiIconButton: {
      sizeSmall: {
        padding: 8,
      },
    },
  },
  // palette: {
  //   primary: {
  //     main: color.primary,
  //   },
  //   secondary: {
  //     main: color.secondary,
  //   },
  //   common: {
  //     black: color.black,
  //   },
  // },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default Theme;
