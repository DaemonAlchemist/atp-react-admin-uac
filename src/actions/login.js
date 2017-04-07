/**
 * Created by Andy on 3/24/2017.
 */

import rest from "atp-rest";

export const LOGIN_SEND = "atp-uac/login-send";
export const LOGIN_SUCCESS = "atp-uac/login";
export const LOGIN_FAIL = "atp-uac/login-fail";
export const LOGOUT = "atp-uac/logout";

export const login = credentials => rest()
    .post('login')
    .start((credentials, dispatch) => dispatch({type: LOGIN_SEND, credentials: credentials}))
    .then((data, dispatch) => dispatch({type: LOGIN_SUCCESS, }.$merge(data.results)))
    .catch((err, dispatch) => dispatch({type: LOGIN_FAIL, err}))
    .send(credentials)
    .thunk();

export const logout = () => ({type: LOGOUT});