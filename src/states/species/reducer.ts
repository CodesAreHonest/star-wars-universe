import { speciesActionTypes, speciesReducerTypes } from "./types";
import { attributeMinAndMax, peopleScatterChartFormat } from "./utils";

export const INITIAL_STATE: speciesReducerTypes = {
    appendList  : [],
    list        : [],
    scatterChart: {
        data               : [],
        horizontalAttribute: {
            min: 0,
            max: 0
        },
        verticalAttribute  : {
            min: 0,
            max: 0
        }
    }
};

export const speciesReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case speciesActionTypes.APPEND_SPECIES_LIST: {
            return {
                ...state,
                appendList: [...state.appendList, ...action.payload]
            }
        }
        case speciesActionTypes.GET_LIST_SUCCESS: {
            return {
                ...state,
                list: state.appendList
            }
        }
        case speciesActionTypes.GET_LIST_FAILURE: {
            return {
                ...state,
                list: []
            }
        }
        case speciesActionTypes.GET_PEOPLE_SUCCESS: {

            const peopleResponseData = action.payload;

            const sourceObject = {
                data               : peopleScatterChartFormat(peopleResponseData),
                horizontalAttribute: attributeMinAndMax(peopleResponseData, "height"),
                verticalAttribute  : attributeMinAndMax(peopleResponseData, "mass")
            };

            return {
                ...state,
                scatterChart: Object.assign(
                    state.scatterChart,
                    sourceObject
                )
            }
        }
        case speciesActionTypes.GET_PEOPLE_FAILURE: {
            return {
                ...state,
                people: []
            }
        }
        default:
            return state;
    }
};