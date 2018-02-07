
import Profile from "../../components/user/profile";
import {applyLifecycle} from "react-lifecycle-component";
import {connect} from 'react-redux';
import {toggle} from 'atp-ui';
import {passwordModalToggleId} from "./form/change-password";
import {compose, get} from 'atp-pointfree';
import {User} from "../../reducer/user";
import {Role} from "../../reducer/role";

export default compose(connect(
    (state, props) => ({
        user: state.uac.profile,
        isPasswordModalVisible: toggle.isVisible(get(state), passwordModalToggleId),
        userRoles: state.uac.profile.id
            ? Role().select.byIdList(get(state), User().roles.select.all(get(state), state.uac.profile.id))
            : [],
    }),
    (dispatch, props) => ({
        dispatch,
        updateUser: userId => (data, dispatch) => {dispatch(User().action.update(userId, data));},
        showPasswordModal: () => {dispatch(toggle.show(passwordModalToggleId))}
    }),
    (stateProps, dispatchProps, props) => ({
        ...stateProps,
        ...dispatchProps,
        ...props,
        componentDidMount: () => {
            if(stateProps.user.id) {
                dispatchProps.dispatch(User().action.details(stateProps.user.id));
                dispatchProps.dispatch(Role().action.collection.get({}));
            }
        },
    })
), applyLifecycle)(Profile);
