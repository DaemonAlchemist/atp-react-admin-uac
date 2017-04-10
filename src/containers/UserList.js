/**
 * Created by Andy on 3/27/2017.
 */

import {connect} from "react-redux";
import UserList from "../components/user/list";

export default connect(
    state => ({users: state.entities.user, selectedUser: state.uac.user.selectedUser}),
    dispatch => ({dispatch})
)(UserList);