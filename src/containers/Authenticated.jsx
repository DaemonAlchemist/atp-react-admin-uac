/**
 * Created by Andy on 3/24/2017.
 */
import React from "react";
import {connect} from "react-redux";

export default connect(
    state => ({isLoggedIn: state.uac.isLoggedIn || false}),
    dispatch => ({})
)(props => <div>{(props.isLoggedIn && props.yes || !props.isLoggedIn && props.no) && props.children}</div>);