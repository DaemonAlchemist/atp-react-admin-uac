/**
 * Created by Andy on 3/24/2017.
 */
import React from "react";
import {connect} from "react-redux";

export default connect(
    state => ({userName: state.uac.profile.userName || "Not logged in"}),
    dispatch => ({})
)(props => <span>{props.userName}</span>);
