
import {connectWithLifecycle} from "react-lifecycle-component";
import PermissionList from "../../components/permission/list";
import {Permission} from "../../reducer/permission";

export default connectWithLifecycle(
    state => ({permissions: Permission().select.all(() => state)}),
    dispatch => ({
        componentDidMount: () => {
            dispatch(Permission().action.collection.get({}));
        },
        dispatch
    })
)(PermissionList);