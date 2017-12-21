
import {connectWithLifecycle} from "react-lifecycle-component";
import RoleList from "../../components/role/list";
import {Role} from "../../reducer/role";
import {Permission} from "../../reducer/permission";

export default connectWithLifecycle(
    state => ({
        roles: Role().select.all(() => state),
        selectedRole: state.uac.role.selectedRole
    }),
    dispatch => ({
        componentDidMount: () => {
            dispatch(Role().action.collection.get({}));
            dispatch(Permission().action.collection.get({}));
        },
        dispatch
    })
)(RoleList);