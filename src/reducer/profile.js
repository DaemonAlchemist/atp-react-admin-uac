/**
 * Created by Andy on 3/24/2017.
 */

import {o} from "atp-sugar";
import rest from "atp-rest-client";

//Action types
export const PROFILE_LOAD = "atp-uac/profile-load";

//Reducer
export default (state = {}, action) =>
    o(action.type).switch({
        [PROFILE_LOAD]: () => action.profile,
        default: () => state
    });

//Action creators
export const loadProfile = () => rest()
    .module("appSecurity")
    .get('profile')
    .then(([data, dispatch]) => {
        console.log(data);
        const profile = o(data.user[0]).as(user => ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            enabled: true,
            locked: false,
            permissions: user.permission.map(p => p.permission)
        }));
        dispatch({
            type: PROFILE_LOAD,
            profile: profile
        });
    })
    .thunk();
