import React, { createContext, useContext, useReducer } from 'react';
import rootReducer from "../states/rootReducer";
import { initialState, InitialStateType } from "../states/initialState";

type IStateContext = [InitialStateType, React.Dispatch<any>];

const CONTEXT_INITIAL_STATE: IStateContext = [initialState, () => null];

const StateContext = createContext(CONTEXT_INITIAL_STATE);

export const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch]    = useReducer(rootReducer, initialState);
    const value: IStateContext = [state, dispatch];
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateValue = () => useContext(StateContext);
