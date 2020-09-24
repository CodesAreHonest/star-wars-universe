import { speciesActionTypes, speciesReducerTypes } from "./types";

export const INITIAL_STATE: speciesReducerTypes = {
    data: []
};

export const speciesReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case speciesActionTypes.TEST_ACTION: {
            return {
                ...state,
                data: [123]
            }
        }
        default:
            return state;
    }
};