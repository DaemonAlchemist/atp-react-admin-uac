/**
 * Created by Andy on 3/24/2017.
 */

import rest from "atp-rest";
import {updateEntity, updateEntities} from "atp-entity";

export const NEW_USER_SEND = "atp-uac/new-user-send";
export const NEW_USER_SUCCESS = "atp-uac/new-user-success";

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

export {loadAllUsers, createUser};