import React from 'react';
import ApplicationRoutes from "./routes";
import { createMuiTheme, MuiThemeProvider, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({});

const RootComponent = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ApplicationRoutes/>
      </MuiThemeProvider>
  )
};

export default RootComponent;
