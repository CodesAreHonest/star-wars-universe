import {  INITIAL_STATE as SPECIES_STATE } from "./species/reducer";
import { speciesReducerTypes } from "./species/types";

export type InitialStateType = {
    species: speciesReducerTypes
}

export const initialState = {
    species: SPECIES_STATE
};