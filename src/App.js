import React from "react";
import FourierWavelet from "./components/FourierWavelet/FourierWavelet";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

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
        <FourierWavelet />
      </ThemeProvider>
  );
}

export default App;
