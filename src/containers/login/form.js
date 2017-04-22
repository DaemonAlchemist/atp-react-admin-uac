/**
 * Created by Andy on 3/24/2017.
 */

import LoginForm from "../../components/login/form";
import {reduxForm} from "redux-form";

import {login} from "../../reducer/login";

export default reduxForm({
    form: 'atp-uac/login-form',
    onSubmit: (credentials, dispatch) => dispatch(login(credentials))
})(LoginForm);
