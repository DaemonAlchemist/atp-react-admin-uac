/**
 * Created by Andy on 4/21/2017.
 */

import {connect} from "react-redux";
import UserDetails from "../../components/user/details";
import {User, UserRole} from "../../reducer/user";
import {Role} from "../../reducer/role";

export default connect(
    (state, props) => ({
        user: User().select.one(() => state, props.userId),
        allRoles: Role().select.all(() => state),
        userRoles: props.userId ? UserRole(props.userId).select.list(() => state, {}) : []
    }),
    (dispatch, props) => ({
        joinRole: role => dispatch(UserRole(props.userId).action.join(role.id)),
        leaveRole: role => dispatch(UserRole(props.userId).action.leave(role.id))
    })
)(UserDetails);