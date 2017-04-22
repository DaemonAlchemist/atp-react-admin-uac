/**
 * Created by Andy on 4/3/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate, relatedEntityBoilerplate} from "atp-entity";
import {roleType, roleName} from "./role";

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
export const User = () => o(entityBoilerplate(userType, 'user'))
    .merge({
        action: {
            select: userId => ({type: SELECT_USER, userId}),
            details: userId => (dispatch, getState) => {
                User().action.get(userId)(dispatch, getState);
                UserRole(userId).action.list({})(dispatch, getState);
            },
        }
    }).raw;
export const UserRole = userId => o(relatedEntityBoilerplate(roleType, 'user/' + userId + "/role", roleName))
    .merge({
        action: {
            join: roleId => (dispatch, getState) => {
                UserRole(userId).action.post(roleId)(dispatch, getState)
                    .then(data => User().action.details(userId)(dispatch, getState));
            },
            leave: roleId => (dispatch, getState) => {
                UserRole(userId).action.delete(roleId)(dispatch, getState)
                    .then(data => User().action.details(userId)(dispatch, getState));
            }
        }
    }).raw;
