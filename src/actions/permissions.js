/**
 * Created by Andy on 3/24/2017.
 */

import rest from "atp-rest";
import {updateEntity, updateEntities} from "atp-entity";

export const NEW_PERMISSON_SEND = "atp-uac/new-permission-send";
export const NEW_PERMISSON_SUCCESS = "atp-uac/new-permission-success";

const loadAllPermissions  = () => rest()
    .get('permission')
    .then((data, dispatch) => dispatch(updateEntities('permission', data.results)))
    .thunk();

const createPermission = name => rest()
    .post('permission')
    .start((data, dispatch) => dispatch({type: NEW_PERMISSON_SEND, name}))
    .then((data, dispatch) => dispatch(updateEntity('permission', data.results)))
    .send({name})
    .thunk();

export {loadAllPermissions, createPermission};