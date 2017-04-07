/**
 * Created by Andy on 3/24/2017.
 */
import React from "react";
import {connect} from "react-redux";

export default connect(
    state => ({userPermissions: state.uac.profile.permissions}),
    dispatch => ({})
)(props =>
    <div>
        {(!props.permissions || props.userPermissions && props.userPermissions.$intersect(props.permissions)) && props.children}
    </div>
);