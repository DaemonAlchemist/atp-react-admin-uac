
import React from "react";
import {connect} from "react-redux";
import {a} from "atp-sugar";
import {identity} from 'atp-pointfree';

export default connect(
    state => ({userPermissions: state.uac.profile.permissions}),
    dispatch => ({})
)(({permissions, userPermissions, yes, no, children}) => {
    const hasPermission = !permissions || userPermissions && a(userPermissions).intersect(permissions).length > 0;

    return hasPermission && (yes || !yes && !no) || !hasPermission && no
        ? React.Children.map(children, identity)
        : null;
});