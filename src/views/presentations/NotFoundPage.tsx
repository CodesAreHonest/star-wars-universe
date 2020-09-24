import React from "react";
import { Container, Typography, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router";

const NotFoundPage: React.FunctionComponent = () => {
    document.title = "Not Found";

    const history = useHistory();

    const navigateToHome = () => history.replace('/');

    return (
        <Container>
            <Box style={{ marginTop: '20vh', textAlign: "center" }}>
                <Typography variant="h1" component="h1">404</Typography>
                <Typography variant="h6" component="h6">Page Not Found.</Typography>
            </Box>

            <Button
                onClick={navigateToHome}
                fullWidth
                color="primary"
                variant="contained"
                style={{ marginTop: '36px' }}
            >Back To Home</Button>
        </Container>
    );
};

export default NotFoundPage;