import React from 'react'
import Header from './Header'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { theme } from "../theme";

export default ({children}) => {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header />
          <div>{children}</div>
        </>
      </ThemeProvider>
    );
}