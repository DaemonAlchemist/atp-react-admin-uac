
import {o} from "atp-sugar";
import {entityBoilerplate, } from "atp-redux-entity";
import {Role, roleType, roleName} from "./role";
import {ApiKey} from './api-key';

//REST types
export const userType = "uacUser";
export const userName = "user";

//Action types
export const SELECT_USER = "atp-uac/user-select";

//Initial state
const initialState = {
    selectedUser: 0
};

//Reducer
export default (state = initialState, action) =>
    o(action.type).switch({
        [SELECT_USER]: () => o(state).merge({selectedUser: action.userId}).raw,
        default: () => state
    });

//Standard REST selectors and actions
export const User = () => o(entityBoilerplate(userType, 'user')).as(user => o(user)
    .merge({
        action: {
            select: userId => ({type: SELECT_USER, userId}),
            details: userId => (dispatch, getState) => {
                User().action.fetch(userId)(dispatch, getState);
                User().roles.action.list(userId, {})(dispatch, getState);
            },
        },
        roles: user.children('role', Role),
        keys: user.children('key', ApiKey)
    })
).raw;
