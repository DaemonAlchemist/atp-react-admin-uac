/**
 * Created by Andy on 3/19/2017.
 */

import React from "react";
import RoleList from "../containers/RoleList";
import {selectRole, authorize, deny} from "../actions/roles";
import {connect} from "react-redux";
import {Col, Row, Button, Panel} from "react-bootstrap";
import {o, a} from "atp-sugar";
import {Assigner} from "atp-ui";

const RoleListContainer = connect(
    state => o(state.uac.role.selectedRole).as(roleId => ({
        role: roleId ? state.entities.role[roleId] : null,
        allPermissions: state.entities.permission,
        rolePermissions: roleId && state.entities.role[roleId].permissions
            ? state.entities.role[roleId].permissions
            : []
    })),
    dispatch => ({dispatch})
)(props =>
    <Row>
        <RoleList onClick={roleId => props.dispatch(selectRole(roleId))}/>
        <Col xs={6} sm={8} md={9}>
            {props.role
                ? <div>
                <h1>{props.role.name}</h1>
                {props.allPermissions
                    ? <Panel header={<span><i className="fa fa-lock"/> Permissions</span>}>
                        <Assigner
                            available={o(props.allPermissions).values()}
                            assigned={props.rolePermissions}
                            onAssign={permission => props.dispatch(authorize(props.role.id, permission.id))}
                            onUnassign={permission => props.dispatch(deny(props.role.id, permission.id))}
                        />
                    </Panel>
                    : <span><i className="fa fa-spinner fa-spin" /> No role selected...</span>
                }
            </div>
                : <span><i className="fa fa-spinner fa-spin" /> No role selected...</span>
            }
        </Col>
    </Row>
);

export default () => <RoleListContainer/>;
