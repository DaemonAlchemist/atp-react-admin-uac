/**
 * Created by Andy on 3/27/2017.
 */

import {connect} from "react-redux";
import RoleList from "../components/role/list";

export default connect(
    state => ({roles: state.entities.role, selectedRole: state.uac.role.selectedRole}),
    dispatch => ({dispatch})
)(RoleList);