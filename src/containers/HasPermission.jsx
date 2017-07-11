/**
 * Created by Andy on 3/24/2017.
 */
import React from "react";
import {connect} from "react-redux";
import {a} from "atp-sugar";

export default connect(
    state => ({userPermissions: state.uac.profile.permissions}),
    dispatch => ({})
)(props =>
    <div>
        {(!props.permissions || props.userPermissions && a(props.userPermissions).intersect(props.permissions).length > 0) && props.children}
    </div>
);