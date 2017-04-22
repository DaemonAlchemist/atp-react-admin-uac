/**
 * Created by Andy on 4/21/2017.
 */

import {User} from "../../reducer/user";
import {connect} from "react-redux";
import UserDashboard from "../../components/user/dashboard";

export default connect(
    state => ({userId: state.uac.user.selectedUser}),
    dispatch => ({
        selectUser: userId => {
            dispatch(User().action.select(userId));
            dispatch(User().action.details(userId));
        }
    })
)(UserDashboard);
