/**
 * Created by Andy on 3/24/2017.
 */

import {LOGIN_SUCCESS} from "../reducer/login";
import {o} from "atp-sugar";

export default (state = {}, action) =>
    o(action.type).switch({
        [LOGIN_SUCCESS]: () => action.loginToken,
        default: () => state
    });
