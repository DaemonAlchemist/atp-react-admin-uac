/**
 * Created by Andy on 4/3/2017.
 */

import {SELECT_ROLE} from "../actions/roles";

const initialState = {
    selectedRole: 0
};

export default (state = initialState, action) =>
    action.type.$switch({
        [SELECT_ROLE]: () => state.$merge({selectedRole: action.roleId}),
        default: () => state
    });
