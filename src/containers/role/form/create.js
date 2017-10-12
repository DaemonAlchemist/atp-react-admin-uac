/**
 * Created by Andy on 4/21/2017.
 */

import {reduxForm} from "redux-form";
import {Role} from "../../../reducer/role";
import NewRoleForm from "../../../components/role/form/create";

export default reduxForm({
    form: 'new-role-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        Role().action.post({name: data.roleName})(dispatch, getState).then(data => {
            Role().action.collection.get({})(dispatch, getState);
            dispatch(Role().action.select(data.results.id));
        });
    })
})(NewRoleForm);
