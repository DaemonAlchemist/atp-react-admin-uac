
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
            dispatch(User().action.collection.get({}));
            dispatch(Role().action.collection.get({}));
        },
        dispatch
    })
)(UserList);