/**
 * Created by Andy on 3/19/2017.
 */

import {connect} from "react-redux";
import {Role} from "../../reducer/role";
import RoleDashboard from "../../components/role/dashboard";

export default connect(
    state => ({roleId: state.uac.role.selectedRole}),
    dispatch => ({
        onSelect: roleId => {
            dispatch(Role().action.select(roleId));
            dispatch(Role().action.details(roleId));
        }
    })
)(RoleDashboard);
