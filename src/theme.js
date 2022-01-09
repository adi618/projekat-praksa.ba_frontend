import { createTheme } from "@mui/material/styles";

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

const font = "Signika, sans-serif";

const light = 300;
const regular = 400;
const medium = 500;
const semiBold = 600;
const bold = 700;

const primary = "#F3F3FF";

const theme = createTheme({
  breakpoints,
  palette: {
    primary: { main: primary },
  },
  typography: {
    fontFamily: font,
    light,
    regular,
    medium,
    semiBold,
    bold,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "example" },
          style: {},
        },
      ],
    },
  },
});

export default theme;
