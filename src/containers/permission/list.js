/**
 * Created by Andy on 3/27/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import PermissionList from "../../components/permission/list";
import {Permission} from "../../reducer/permission";

export default connectWithLifecycle(
    state => ({permissions: Permission().select.all(() => state)}),
    dispatch => ({
        componentDidMount: () => {
            dispatch(Permission().action.list({}));
        },
        dispatch
    })
)(PermissionList);