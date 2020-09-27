import React from 'react';
import { Container, Box } from "@material-ui/core";
import { FixedNavBar } from "../components/FixedNavbar/FixedNavbar";
import { SelectSpeciesContainer } from "../containers/SelectSpeciesContainer";
import { ScatterChartContainer } from "../containers/ScatterChartContainer";

const HomePage = () => {

    document.title = "Star Wars Universe";

    return (
        <Box>
            <FixedNavBar/>
            <Container>
                <SelectSpeciesContainer/>

                <Box style={{ marginTop: "8px" }}>
                    <ScatterChartContainer/>
                </Box>
            </Container>
        </Box>
    )
};

export default HomePage;