/**
 * Created by Andy on 3/24/2017.
 */
import React from "react";
import {connect} from "react-redux";
import {o} from "atp-sugar";

export default connect(
    state => ({userPermissions: state.uac.profile.permissions}),
    dispatch => ({})
)(props =>
    <div>
        {(!props.permissions || props.userPermissions && o(props.userPermissions).intersect(props.permissions)) && props.children}
    </div>
);