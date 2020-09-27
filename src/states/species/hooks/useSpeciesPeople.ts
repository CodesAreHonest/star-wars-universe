import axios from "axios";

import { useStateValue } from "../../../store";
import { getPeopleFailure, getPeopleSuccess } from "../actions";
import { ISpeciesPeopleResponse } from "../types";

export type UseSpeciesType = [
    any,
    ((species: string) => Promise<void>)];

export const useSpeciesPeople = () => {
    const [{ species: { list, scatterChart } }, dispatch] = useStateValue();

    const getSpeciesPeople = (species) => {

        const selectedSpecies = list.find(value => {
            return value.name === species
        });

        if (selectedSpecies === undefined)
            return;

        const { people } = selectedSpecies;

        const axiosGetPromises = people.map(value => {
            return new Promise((resolve, reject) => {
                axios.get(value)
                    .then(response => resolve(response.data))
                    .catch(err => reject(err))
            })
        });

        axios.all(axiosGetPromises)
            .then((response) => {
                dispatch(getPeopleSuccess(response as ISpeciesPeopleResponse[]));
            })
            .catch(() => dispatch(getPeopleFailure()))
    };

    return [scatterChart, getSpeciesPeople] as UseSpeciesType;
};