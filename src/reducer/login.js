/**
 * Created by Andy on 3/24/2017.
 */

import {LOGIN_SUCCESS, LOGOUT} from "../actions/login";

export default (state = false, action) =>
    action.type.$switch({
        [LOGIN_SUCCESS]: () => true,
        [LOGOUT]: () => false,
        default: () => state
    });
