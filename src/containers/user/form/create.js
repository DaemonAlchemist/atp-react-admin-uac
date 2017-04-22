/**
 * Created by Andy on 4/21/2017.
 */

import {reduxForm} from "redux-form";
import NewUserForm from "../../../components/user/form/create";
import {User} from "../../../reducer/user";

export default reduxForm({
    form: 'new-user-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        User().action.post(data)(dispatch, getState).then(data => {
            User().action.list({})(dispatch, getState);
            dispatch(User().action.select(data.results.id));
        });
    })
})(NewUserForm);
