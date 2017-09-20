/**
 * Created by Andy on 3/24/2017.
 */
import React from "react";
import {connect} from "react-redux";

export default connect(
    state => ({userName: state.uac.profile.user_name || <em>Not logged in</em>}),
    dispatch => ({})
)(props => <span>{props.userName}</span>);
