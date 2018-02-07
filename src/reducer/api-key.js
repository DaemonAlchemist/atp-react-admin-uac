
import {o} from "atp-sugar";
import {entityBoilerplate} from "atp-redux-entity";

export const keyType = 'apiKey';

//Reducer
export default (state, action) => o(action.type).switch({
    default: () => state
});

//Standard REST entity selectors and actions
export const ApiKey = () => entityBoilerplate(keyType, 'key');
