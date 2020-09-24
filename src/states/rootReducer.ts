import { speciesReducer} from "./species/reducer";
import { InitialStateType } from "./initialState";

const rootReducer = ({ species }: InitialStateType, action: any) => ({
    species: speciesReducer(species, action)
});

export default rootReducer;