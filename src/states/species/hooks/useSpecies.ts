import { useStateValue } from "../../../store";
import SpeciesAPI from "../../../apis/species";
import { getListFailure, appendSpeciesList, getListSuccess } from "../actions";
import { ISpeciesResponse, speciesResultType } from "../types";
import axios from "axios";

export type UseSpeciesType = [
    speciesResultType[],
    (() => Promise<void>)];

export const useSpecies = () => {
    const [{ species: { list } }, dispatch] = useStateValue();

    const getList = () => {
        SpeciesAPI.getList()
            .then(response => {
                const { results, next } = response as ISpeciesResponse;
                getSubsequenceList(results, next);
            })
            .catch(() => {
                dispatch(getListFailure());
            });
    };

    const getSubsequenceList = (results, nextUrl: string | null) => {
        if (nextUrl !== null) {
            dispatch(appendSpeciesList(results));
            axios.get(nextUrl)
                .then(response => {
                    const { results, next } = response.data as ISpeciesResponse;
                    getSubsequenceList(results, next);
                })
                .catch(err => {
                    console.warn(err);
                });

            return;
        }

        dispatch(getListSuccess());
    };

    return [list, getList] as UseSpeciesType;
};