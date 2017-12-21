
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {identity} from 'atp-pointfree';

export default withRouter(connect(
    state => ({isLoggedIn: state.uac.isLoggedIn || false}),
    dispatch => ({})
)(({isLoggedIn, yes, no, children}) => isLoggedIn && yes || !isLoggedIn && no
    ? React.Children.map(children, identity)
    : null
));