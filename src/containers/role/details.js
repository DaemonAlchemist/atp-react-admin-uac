/**
 * Created by Andy on 4/21/2017.
 */

import {connect} from "react-redux";
import RoleDetails from "../../components/role/details";
import {Role, RolePermission} from "../../reducer/role";
import {Permission} from "../../reducer/permission";

export default connect(
    (state, props) => ({
        role: Role().selector.single(state, props.roleId),
        allPermissions: Permission().selector.list(state, {}),
        rolePermissions: props.roleId ? RolePermission(props.roleId).selector.list(state, {}) : null
    }),
    (dispatch, props) => ({
        onAuthorize: permission => dispatch(RolePermission(props.roleId).action.authorize(permission.id)),
        onDeny: permission => dispatch(RolePermission(props.roleId).action.deny(permission.id))
    })
)(RoleDetails);
