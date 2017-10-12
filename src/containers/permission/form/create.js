/**
 * Created by Andy on 4/21/2017.
 */

import {reduxForm} from "redux-form";
import {Permission} from "../../../reducer/permission";
import NewPermissionForm from "../../../components/permission/form/create";

export default reduxForm({
    form: 'new-permission-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        Permission().action.create(data)(dispatch, getState).then(data => {
            Permission().action.collection.get({})(dispatch, getState);
        });
    })
})(NewPermissionForm);
