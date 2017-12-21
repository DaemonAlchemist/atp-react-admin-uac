
import React from "react";
import {connect} from "react-redux";
import {a} from "atp-sugar";
import {identity} from 'atp-pointfree';

export default connect(
    state => ({userPermissions: state.uac.profile.permissions}),
    dispatch => ({})
)(({permissions, userPermissions, children}) =>
    !permissions || userPermissions && a(userPermissions).intersect(permissions).length > 0
        ? React.Children.map(children, identity)
        : null
);