
import React from "react";
import {connect} from "react-redux";

export default connect(
    state => ({userName: state.uac.profile.userName || <em>Not logged in</em>}),
    dispatch => ({})
)(({userName}) => <span>{userName}</span>);
