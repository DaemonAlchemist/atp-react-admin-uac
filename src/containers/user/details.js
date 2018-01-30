
import {connect} from "react-redux";
import UserDetails from "../../components/user/details";
import {User, UserRole} from "../../reducer/user";
import {Role} from "../../reducer/role";
import {toggle} from 'atp-ui';
import {get} from 'atp-pointfree';
import {passwordModalToggleId} from "./form/change-password";

export default connect(
    (state, props) => ({
        user: User().select.one(get(state), props.userId),
        allRoles: Role().select.all(get(state)),
        userRoles: props.userId
            ? Role().select.byIdList(get(state), User().roles.select.all(get(state), props.userId))
            : [],
        isPasswordModalVisible: toggle.isVisible(get(state), passwordModalToggleId),
    }),
    (dispatch, props) => ({
        saveUserName: (data, dispatch) => {dispatch(User().action.update(props.userId, data));},
        joinRole: role => dispatch(User().roles.action.post(props.userId, role.id)),
        leaveRole: role => dispatch(User().roles.action.delete(props.userId, role.id)),
        showPasswordModal: () => {dispatch(toggle.show(passwordModalToggleId))}
    })
)(UserDetails);