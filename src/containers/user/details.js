
import {connect} from "react-redux";
import UserDetails from "../../components/user/details";
import {User} from "../../reducer/user";
import {Role} from "../../reducer/role";
import {get} from 'atp-pointfree';

export default connect(
    (state, props) => ({
        user: User().select.one(get(state), props.userId),
        allRoles: Role().select.all(get(state)),
        userRoles: props.userId
            ? Role().select.byIdList(get(state), User().roles.select.all(get(state), props.userId))
            : [],
    }),
    (dispatch, props) => ({
        updateUser: (data, dispatch) => {dispatch(User().action.update(props.userId, data));},
        updateEnabled: enabled => {dispatch(User().action.update(props.userId, {enabled}))},
        updateLocked: unlocked => {dispatch(User().action.update(props.userId, {locked: !unlocked}))},
        deleteUser: () => {dispatch(User().action.delete(props.userId));},
        joinRole: role => {dispatch(User().roles.action.post(props.userId, role.id));},
        leaveRole: role => {dispatch(User().roles.action.delete(props.userId, role.id));},
    })
)(UserDetails);