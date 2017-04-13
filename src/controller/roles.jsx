/**
 * Created by Andy on 3/19/2017.
 */

import React from "react";
import RoleList from "../containers/RoleList";
import {selectRole, authorize, deny} from "../actions/roles";
import {connect} from "react-redux";
import {Col, Row, Button, Panel} from "react-bootstrap";
import {o} from "atp-sugar";

const RoleListContainer = connect(
    state => o(state.uac.role.selectedRole).as(roleId => ({
        role: roleId ? state.entities.role[roleId] : null,
        allPermissions: state.entities.permission,
        rolePermissions: roleId && state.entities.role[roleId].permissions
            ? state.entities.role[roleId].permissions.map(permission => permission.name)
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
                        {o(props.allPermissions).map(permission =>
                            <Col key={permission.id} xs={4} sm={3} md={2}>
                                {props.rolePermissions.includes(permission.name)
                                    ? <Button
                                        bsStyle="success"
                                        className="form-control"
                                        onClick={() => props.dispatch(deny(props.role.id, permission.id))}
                                      >
                                        {permission.name}
                                      </Button>
                                    : <Button
                                        bsStyle="danger"
                                        className="form-control"
                                        onClick={() => props.dispatch(authorize(props.role.id, permission.id))}
                                      >
                                        {permission.name}
                                      </Button>
                                }
                            </Col>
                        ).values()}
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