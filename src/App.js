import React from "react";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Root from "./components/Root";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00BCD4',
        contrastText: '#121212'
      },
      secondary: {
        main: '#CDDC39',
        contrastText: '#121212'
      },
    }
  });

  return (
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
  );
}

export default App;
