/**
 * Created by Andy on 4/3/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate, relatedEntityBoilerplate, updateEntity, entityUpdated} from "atp-entity";
import {Permission, permissionType, permissionName} from "./permission";
import {User} from "./user";

//Entity types
export const roleType = 'uacRole';
export const roleName = 'role';

//Action types
export const SELECT_ROLE = 'atp-uac/role/select';

//Initial state
const initialState = {
    selectedRole: 0
};

//Reducer
export default (state = initialState, action) =>
    o(action.type).switch({
        [SELECT_ROLE]: () => o(state).merge({selectedRole: action.roleId}).raw,
        default: () => state
    });

//REST selectors and actions
export const Role = () => o(entityBoilerplate(roleType, 'role')).as(role => o(role)
    .merge({
        action: {
            select: roleId => ({type: SELECT_ROLE, roleId}),
            details: roleId => (dispatch, getState) => {
                Role().action.fetch(roleId)(dispatch, getState);
                Role().permissions.action.list(roleId, {})(dispatch, getState);
            },
        },
        permissions: role.children('permission', Permission()),
        users: role.children('user', User())
    }).raw
);
