/**
 * Created by Andy on 3/27/2017.
 */

import {connect} from "react-redux";
import UserList from "../../components/user/list";
import {User} from "../../reducer/user";

export default connect(
    state => ({
        users: User().selector.list(state, {}),
        selectedUser: state.uac.user.selectedUser
    }),
    dispatch => ({dispatch})
)(UserList);