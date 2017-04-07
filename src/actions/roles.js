/**
 * Created by Andy on 3/24/2017.
 */

import rest from "atp-rest";
import {updateEntity, updateEntities} from "atp-entity";

export const NEW_ROLE_SEND = "atp-uac/new-role-send";
export const NEW_ROLE_SUCCESS = "atp-uac/new-role-success";
export const SELECT_ROLE = "atp-uac/select-role";

const loadAllRoles = () => rest()
    .get('role')
    .then((data, dispatch) => dispatch(updateEntities('role', data.results)))
    .thunk();

const createRole = name => rest()
    .post('role')
    .start((data, dispatch) => dispatch({type: NEW_ROLE_SEND, data}))
    .then((data, dispatch) => dispatch(updateEntity('role', data.results)))
    .send({name})
    .thunk();

const selectRole = roleId => rest()
    .get('role/' + roleId + "/details")
    .start((data, dispatch) => dispatch({type: SELECT_ROLE, roleId}))
    .then((data, dispatch) => dispatch(updateEntity('role', data.results)))
    .thunk();

const authorize = (roleId, permissionId) => rest()
    .post('role/' + roleId + '/permission')
    .then((data, dispatch) => dispatch(selectRole(roleId)))
    .send({permissionId})
    .thunk();

const deny =  (roleId, permissionId) => rest()
    .delete('role/' + roleId + '/permission/' + permissionId)
    .then((data, dispatch) => dispatch(selectRole(roleId)))
    .thunk();


export {loadAllRoles, createRole, selectRole, authorize, deny};