/**
 * Created by Andy on 3/24/2017.
 */

import {LOGIN_SUCCESS} from "../actions/login";

export default (state = {}, action) =>
    action.type.$switch({
        [LOGIN_SUCCESS]: () => action.profile,
        default: () => state
    });
