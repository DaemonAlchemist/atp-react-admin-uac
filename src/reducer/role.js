/**
 * Created by Andy on 4/3/2017.
 */

import {SELECT_ROLE} from "../actions/roles";
import {o} from "atp-sugar";

const initialState = {
    selectedRole: 0
};

export default (state = initialState, action) =>
    o(action.type).switch({
        [SELECT_ROLE]: () => o(state).merge({selectedRole: action.roleId}).raw,
        default: () => state
    });
