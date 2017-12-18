/**
 * Created by Andy on 4/21/2017.
 */

import {connect} from "react-redux";
import RoleDetails from "../../components/role/details";
import {Role} from "../../reducer/role";
import {Permission} from "../../reducer/permission";

export default connect(
    (state, props) => ({
        role: Role().select.one(() => state, props.roleId),
        allPermissions: Permission().select.all(() => state),
        rolePermissions: props.roleId
            ? Permission().select.byIdList(() => state, Role().permissions.select.all(() => state, props.roleId))
            : []
    }),
    (dispatch, props) => ({
        onAuthorize: permission => dispatch(Role().permissions.action.post(props.roleId, permission.id)),
        onDeny: permission => dispatch(Role().permissions.action.delete(props.roleId, permission.id))
    })
)(RoleDetails);
