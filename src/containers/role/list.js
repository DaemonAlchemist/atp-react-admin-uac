/**
 * Created by Andy on 3/27/2017.
 */

import {connect} from "react-redux";
import RoleList from "../../components/role/list";
import {Role} from "../../reducer/role";

export default connect(
    state => ({
        roles: Role().selector.list(state, {}),
        selectedRole: state.uac.role.selectedRole
    }),
    dispatch => ({dispatch})
)(RoleList);