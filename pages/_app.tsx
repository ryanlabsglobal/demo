import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProvider } from "../store/ContextProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//The theme variable creates a custom theme for Material UI
//This allows us to have consistant components and steamlines the build process

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "1rem",
            boxShadow: "none",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            color: "#15B50F",
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#ffffff",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#0F73B5",
      },
      secondary: {
        main: "#1D8C9F",
      },
      success: {
        main: "#15B50f",
      },
      error: {
        main: "#B50F0F",
      },
      warning: {
        main: "#D85B00",
      },
      text: {
        primary: "#ffffff",
      },
      background: {
        paper: "#103C55",
        default: "#164D6C",
      },
    },
    typography: {
      h1: {
        fontFamily: "Lato",
        fontWeight: 700,
        fontSize: "48px",
        textTransform: "uppercase",
      },
      h2: {
        fontFamily: "Lato",
        fontWeight: 700,
        fontSize: "34px",
        textTransform: "uppercase",
      },
      h3: {
        fontFamily: "Lato",
        fontWeight: 400,
        fontSize: "24px",
        textTransform: "uppercase",
      },
      h4: {
        fontFamily: "Lato",
        fontWeight: 700,
        fontSize: "24px",
        textTransform: "uppercase",
      },
      h5: {
        fontFamily: "Lato",
        fontWeight: 700,
      },
      h6: {
        fontFamily: "Lato",
        fontWeight: 700,
      },
      subtitle1: {
        fontFamily: "Lato",
        fontWeight: 400,
        fontSize: "20px",
      },
      subtitle2: {
        fontFamily: "Lato",
        fontWeight: 700,
        fontSize: "20px",
      },
      body1: {
        fontFamily: "Lato",
        fontWeight: 400,
        fontSize: "14px",
      },
      body2: {
        fontFamily: "Lato",
        fontWeight: 400,
        fontSize: "12px",
      },
      caption: {
        fontFamily: "Lato",
        fontWeight: 700,
        fontSize: "10px",
      },
      button: {
        fontFamily: "Lato",
        fontWeight: 400,
      },
    },
  });
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;
