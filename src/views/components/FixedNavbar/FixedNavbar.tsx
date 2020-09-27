import React, { useMemo } from 'react';
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./useStyles";

export const FixedNavBar: React.FC = () => {
    const classes = useStyles();

    return useMemo(() => (
        <AppBar position="static">
            <Container>
                <Toolbar variant="dense">
                    <Typography variant="h6" className={classes.title}>
                        Star Wars Universe
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    ), [classes.title]);
};
