import React, { useEffect, useState } from "react";
import { useSpecies } from "../../states/species/hooks/useSpecies";
import { HTMLSelect } from "../components/HTMLSelect/HTMLSelect";
import { useSpeciesPeople } from "../../states/species/hooks/useSpeciesPeople";

const SelectSpeciesContainer: React.FC = () => {

    const [results, getList]                    = useSpecies();
    const [peoples, getSpeciesPeople]           = useSpeciesPeople();
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
        <HTMLSelect
            value={selectedSpecies}
            onSelectChange={onSelectChange}
            results={results}
        />
    )

};

export { SelectSpeciesContainer }