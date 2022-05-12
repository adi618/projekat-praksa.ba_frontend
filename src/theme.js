import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// mui theme breakpoints:
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
    xxl: 1800,
  },
};

const font = 'Poppins, sans-serif';

// font weights:
const thin = 100;
const extraLight = 200;
const light = 300;
const regular = 400;
const medium = 500;
const semiBold = 600;
const bold = 700;
const extraBold = 800;
const black = 900;

// colors:
const primary500 = '#F3F3FF';
const primary600 = '#E7E7FF';
const primary800 = '#6363B1';

const accent500 = '#EAEAEA';
const error = '#ff0000';

const customTheme = createTheme({
  breakpoints,
  palette: {
    // colors:
    primary: { main: primary800, 500: primary500, 600: primary600 },
    accent: { 500: accent500 },
    error: { main: error },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: font,
    thin,
    extraLight,
    light,
    regular,
    medium,
    semiBold,
    bold,
    extraBold,
    black,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.Mui-disabled': {
            color: 'white',
          },
        },
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            backgroundColor: primary600,
            borderRadius: '8px',
            minWidth: '65%',
          },
        },
      ],
    },
    MuiBox: {
      variants: [
        {
          props: { variant: 'topLeftBorderRadius' },
          style: {
            borderRadius: '16px 0 0 0',
            overflow: 'hidden',
            boxShadow: `0 0 0px 10px ${primary800}`,
          },
        },
      ],
    },
  },
});

const theme = responsiveFontSizes(customTheme);

export default theme;
