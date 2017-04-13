/**
 * Created by Andy on 4/3/2017.
 */

import {SELECT_USER} from "../actions/users";
import {o} from "atp-sugar";

const initialState = {
    selectedUser: 0
};

export default (state = initialState, action) =>
    o(action.type).switch({
        [SELECT_USER]: () => o(state).merge({selectedUser: action.userId}).raw,
        default: () => state
    });
