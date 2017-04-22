/**
 * Created by Andy on 4/21/2017.
 */

import {reduxForm} from "redux-form";
import {Permission} from "../../../reducer/permission";
import NewPermissionForm from "../../../components/permission/form/create";

export default reduxForm({
    form: 'new-permission-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        Permission().action.post(data)(dispatch, getState).then(data => {
            Permission().action.list({})(dispatch, getState);
        });
    })
})(NewPermissionForm);
