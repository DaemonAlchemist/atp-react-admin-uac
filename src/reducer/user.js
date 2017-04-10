/**
 * Created by Andy on 4/3/2017.
 */

import {SELECT_USER} from "../actions/users";

const initialState = {
    selectedUser: 0
};

export default (state = initialState, action) =>
    action.type.$switch({
        [SELECT_USER]: () => state.$merge({selectedUser: action.userId}),
        default: () => state
    });
