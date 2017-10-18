/**
 * Created by Andy on 4/21/2017.
 */

import {reduxForm} from "redux-form";
import NewUserForm from "../../../components/user/form/create";
import {User} from "../../../reducer/user";

export default reduxForm({
    form: 'new-user-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        User().action.create(data, (data, dispatch, getState) => {
            dispatch(User().action.select(data.results.id));
        })(dispatch, getState);
    })
})(NewUserForm);
