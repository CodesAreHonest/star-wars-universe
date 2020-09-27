import { ISpeciesPeopleResponse, speciesActionTypes, speciesResultType } from "./types";

export const appendSpeciesList = (results: speciesResultType) => ({
    type   : speciesActionTypes.APPEND_SPECIES_LIST,
    payload: results
});

export const getListSuccess = () => ({
    type: speciesActionTypes.GET_LIST_SUCCESS,
});

export const getListFailure = () => ({
    type: speciesActionTypes.GET_LIST_FAILURE
});

export const getPeopleFailure = () => ({
    type: speciesActionTypes.GET_PEOPLE_FAILURE
});

export const getPeopleSuccess = (speciesPeople: ISpeciesPeopleResponse[]) => ({
    type   : speciesActionTypes.GET_PEOPLE_SUCCESS,
    payload: speciesPeople
});

