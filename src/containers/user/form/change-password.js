
import ChangePasswordForm from "../../../components/user/form/change-password";
import {reduxForm} from "redux-form";
import {User} from "../../../reducer/user";
import {connect} from 'react-redux';
import {compose} from 'atp-pointfree';
import {toggle} from 'basic-reducers';

export const passwordModalToggleId = 'atpUac.change.password.modal';

export default compose(
    connect(
        (state, props) => ({

        }),
        (dispatch, props) => ({
            onSubmit: credentials => {
                dispatch(toggle.hide(passwordModalToggleId));
                dispatch(User().action.update(props.id, credentials));
            }
        })
    ),
    reduxForm(
        {
            form: 'atp-uac/change-password-form'
        },
    )
)(ChangePasswordForm);
