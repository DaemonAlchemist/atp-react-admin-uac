
import rest from "atp-rest-client";
import {o} from "atp-sugar";
import config from "atp-config";
import {PROFILE_LOAD, loadProfile} from "./profile";
import {addError} from 'atp-flash';

//Action types
export const LOGIN_SEND = "atp-uac/login-send";
export const LOGIN_SUCCESS = "atp-uac/login";
export const LOGIN_FAIL = "atp-uac/login-fail";
export const LOGOUT = "atp-uac/logout";

//Reducer
export default (state = false, action) =>
    o(action.type).switch({
        [LOGIN_SUCCESS]: () => true,
        [LOGOUT]: () => false,
        default: () => state
    });

const parseLoginToken = (data, response) =>
    o(config.get("login.tokenPath").split(":")).as(tokenPath =>
        tokenPath.shift() === "HEADER"
            ? response.header[tokenPath[0]]
            : tokenPath.reduce((cur, index) => cur[index], data)
    );

//Action creators
export const login = credentials => rest()
    .module("login")
    .post('login')
    .start((credentials, dispatch) => dispatch({type: LOGIN_SEND, credentials: credentials}))
    .then(([data, dispatch, getState, response]) => {
        dispatch({
            type: LOGIN_SUCCESS,
            loginToken: parseLoginToken(data, response)
        });
        if(typeof data.results.profile !== "undefined") {
            dispatch({
                type: PROFILE_LOAD,
                profile: data.results.profile
            });
        } else {
            dispatch(loadProfile());
        }
    })
    .catch(([err, dispatch]) => {
        dispatch({type: LOGIN_FAIL, err});
        dispatch(addError("Login failed: " + err));
    })
    .send(credentials)
    .thunk();

export const logout = () => ({type: LOGOUT});
