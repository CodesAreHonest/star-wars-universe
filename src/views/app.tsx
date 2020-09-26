import React from 'react';
import ApplicationRoutes from "./routes";
import { createMuiTheme, MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { StateProvider } from "../store";

const theme = createMuiTheme({});

const RootComponent = () => {
    return (
        <StateProvider>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <ApplicationRoutes/>
            </MuiThemeProvider>
        </StateProvider>
    )
};

export default RootComponent;
