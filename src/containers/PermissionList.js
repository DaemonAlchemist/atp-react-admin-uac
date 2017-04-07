/**
 * Created by Andy on 3/27/2017.
 */

import {connect} from "react-redux";
import PermissionList from "../components/permission/list";

export default connect(
    state => ({permissions: state.entities.permission}),
    dispatch => ({dispatch})
)(PermissionList);