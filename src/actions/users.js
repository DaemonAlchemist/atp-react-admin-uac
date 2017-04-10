/**
 * Created by Andy on 3/24/2017.
 */

import rest from "atp-rest";
import {updateEntity, updateEntities} from "atp-entity";

export const NEW_USER_SEND = "atp-uac/new-user-send";
export const NEW_USER_SUCCESS = "atp-uac/new-user-success";
export const SELECT_USER = "atp-uac/select-user";

const loadAllUsers = () => rest()
    .get('user')
    .then((data, dispatch) => dispatch(updateEntities('user', data.results)))
    .thunk();

const createUser = userName => rest()
    .post('user')
    .start((data, dispatch) => dispatch({type: NEW_USER_SEND, data}))
    .then((data, dispatch) => dispatch(updateEntity('user', data.results)))
    .send({userName})
    .thunk();

const selectUser = userId => rest()
    .get('user/' + userId + "/details")
    .start((data, dispatch) => dispatch({type: SELECT_USER, userId}))
    .then((data, dispatch) => dispatch(updateEntity('user', data.results)))
    .thunk();

const addRole = (userId, roleId) => rest()
    .post('user/' + userId + '/role')
    .then((data, dispatch) => dispatch(selectUser(userId)))
    .send({roleId})
    .thunk();

const removeRole =  (userId, roleId) => rest()
    .delete('user/' + userId + '/role/' + roleId)
    .then((data, dispatch) => dispatch(selectUser(userId)))
    .thunk();

export {loadAllUsers, createUser, selectUser, addRole, removeRole};