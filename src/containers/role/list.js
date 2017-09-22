/**
 * Created by Andy on 3/27/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import RoleList from "../../components/role/list";
import {Role} from "../../reducer/role";
import {Permission} from "../../reducer/permission";

export default connectWithLifecycle(
    state => ({
        roles: Role().selector.list(state, {}),
        selectedRole: state.uac.role.selectedRole
    }),
    dispatch => ({
        componentDidMount: () => {
            dispatch(Role().action.list({}));
            dispatch(Permission().action.list({}));
        },
        dispatch
    })
)(RoleList);