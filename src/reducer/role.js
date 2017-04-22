/**
 * Created by Andy on 4/3/2017.
 */

import {o} from "atp-sugar";
import {entityBoilerplate, relatedEntityBoilerplate} from "atp-entity";
import {permissionType, permissionName} from "./permission";

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
export const Role = () => o(entityBoilerplate(roleType, 'role'))
    .merge({
        action: {
            select: roleId => ({type: SELECT_ROLE, roleId}),
            details: roleId => (dispatch, getState) => {
                Role().action.get(roleId)(dispatch, getState);
                RolePermission(roleId).action.list({})(dispatch, getState);
            },
        }
    }).raw;

export const RolePermission = roleId => o(relatedEntityBoilerplate(permissionType, 'role/' + roleId + "/permission", permissionName))
    .merge({
        action: {
            authorize: permissionId => (dispatch, getState) => {
                RolePermission(roleId).action.post(permissionId)(dispatch, getState)
                    .then(data => Role().action.details(roleId)(dispatch, getState));
            },
            deny: permissionId => (dispatch, getState) => {
                RolePermission(roleId).action.delete(permissionId)(dispatch, getState)
                    .then(data => Role().action.details(roleId)(dispatch, getState));
            }
        }
    }).raw;
