import { useStateValue } from "../../../store";
import SpeciesAPI from "../../../apis/species";
import { getListFailure, getListSuccess } from "../actions";
import { ISpeciesResponse, speciesResultType } from "../types";

export type UseSpeciesType = [
    speciesResultType[],
    (() => Promise<void>)];

export const useSpecies = () => {
    const [{ species: { list } }, dispatch] = useStateValue();

    const getList = () => {
        SpeciesAPI.getList()
            .then(response => {
                const { results } = response as ISpeciesResponse;
                dispatch(getListSuccess(results));
            })
            .catch(() => {
                dispatch(getListFailure());
            });
    };

    return [list, getList] as UseSpeciesType;
};