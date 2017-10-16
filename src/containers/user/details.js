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
        userRoles: props.userId
            ? Role().select.byIdList(() => state, User().roles.select.all(() => state, props.userId))
            : []
    }),
    (dispatch, props) => ({
        joinRole: role => dispatch(User().roles.action.post(props.userId, role.id)),
        leaveRole: role => dispatch(User().roles.action.delete(props.userId, role.id))
    })
)(UserDetails);