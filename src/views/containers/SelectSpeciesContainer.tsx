import React, { useEffect, useState, Fragment, useCallback } from "react";
import { useSpecies } from "../../states/species/hooks/useSpecies";
import { HTMLSelect } from "../components/HTMLSelect/HTMLSelect";
import { useSpeciesPeople } from "../../states/species/hooks/useSpeciesPeople";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    selectSpeciesBox: {
        paddingTop: "1em",
    },
    label           : {
        textAlign                     : "right",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        },
    },
    selectField     : {
        textAlign                     : "left",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        },
    }
}));

const SelectSpeciesContainer: React.FC = () => {

    const classes = useStyles();

    const [results, getList]                    = useSpecies();
    const [_, getSpeciesPeople]                 = useSpeciesPeople();
    const [selectedSpecies, setSelectedSpecies] = useState("");

    const onSelectChange = (event) => {
        const { value } = event.target;
        setSelectedSpecies(value);
        getSpeciesPeople(value);
    };

    useEffect(() => {
        getList();
    }, []);

    return (
        <Grid
            container
            className={classes.selectSpeciesBox}
            justify="center"
            alignItems="center"
            spacing={1}
        >
            {results.length > 0 && (
                <Fragment>
                    <Grid item xs={12} sm={6} className={classes.label}>
                        <Typography variant="h6" display="inline">
                            Pick A Species:
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.selectField}>
                        <Box component="span">
                            <HTMLSelect
                                value={selectedSpecies}
                                onSelectChange={onSelectChange}
                                results={results}
                            />
                        </Box>
                    </Grid>
                </Fragment>)}
        </Grid>
    )

};

export { SelectSpeciesContainer }