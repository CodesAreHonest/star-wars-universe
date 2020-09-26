import React from 'react';
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

type FixedNavBarProps = {}

export const FixedNavBar: React.FC = ({}: FixedNavBarProps) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar variant="dense">
                    <Typography variant="h6">
                        Star Wars Universe
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
};
