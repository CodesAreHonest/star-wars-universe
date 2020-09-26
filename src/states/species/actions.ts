import { ISpeciesPeopleResponse, speciesActionTypes, speciesResultType } from "./types";

export const getListSuccess = (results: speciesResultType) => {
    return {
        type   : speciesActionTypes.GET_LIST_SUCCESS,
        payload: results
    }
};

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

