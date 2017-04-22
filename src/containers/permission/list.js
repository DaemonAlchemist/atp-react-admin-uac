/**
 * Created by Andy on 3/27/2017.
 */

import {connect} from "react-redux";
import PermissionList from "../../components/permission/list";
import {Permission} from "../../reducer/permission";

export default connect(
    state => ({permissions: Permission().selector.list(state, {})}),
    dispatch => ({dispatch})
)(PermissionList);