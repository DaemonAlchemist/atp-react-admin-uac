/**
 * Created by Andy on 3/27/2017.
 */

import {connectWithLifecycle} from "react-lifecycle-component";
import UserList from "../../components/user/list";
import {User} from "../../reducer/user";
import {Role} from "../../reducer/role";

export default connectWithLifecycle(
    state => ({
        users: User().select.all(() => state),
        selectedUser: state.uac.user.selectedUser
    }),
    dispatch => ({
        componentDidMount: () => {
            dispatch(User().action.list({}));
            dispatch(Role().action.list({}));
        },
        dispatch
    })
)(UserList);