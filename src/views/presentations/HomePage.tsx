import React, { useState } from 'react';
import { Container, Box, Typography } from "@material-ui/core";
import { FixedNavBar } from "../components/FixedNavbar/FixedNavbar";
import { HTMLSelect } from "../components/HTMLSelect/HTMLSelect";
import { ScatterChart } from "../components/ScatterChart/ScatterChart";
import { SelectSpeciesContainer } from "../containers/SelectSpeciesContainer";
import { ScatterChartContainer } from "../containers/ScatterChartContainer";

type Props = {}

const HomePage = () => {

    document.title = "Star Wars Universe";

    return (
        <Box>
            <FixedNavBar/>
            <Container>
                <Box style={{ marginTop: "8px" }}>
                    <Typography variant="h5" display="inline">
                        Pick A Species
                    </Typography>

                    <Box component="span" style={{ marginLeft: "16px" }}>
                        <SelectSpeciesContainer/>
                    </Box>
                </Box>

                <Box style={{ marginTop: "16px" }}>
                    <ScatterChartContainer/>
                </Box>
            </Container>
        </Box>
    )
};

export default HomePage;