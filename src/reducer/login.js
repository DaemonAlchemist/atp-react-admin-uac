/**
 * Created by Andy on 3/24/2017.
 */

import {LOGIN_SUCCESS, LOGOUT} from "../actions/login";
import {o} from "atp-sugar";

export default (state = false, action) =>
    o(action.type).switch({
        [LOGIN_SUCCESS]: () => true,
        [LOGOUT]: () => false,
        default: () => state
    });
