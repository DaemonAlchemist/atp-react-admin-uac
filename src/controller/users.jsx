/**
 * Created by Andy on 3/19/2017.
 */

import React from "react";
import UserList from "../containers/UserList";
import {selectUser, addRole, removeRole} from "../actions/users";
import {connect} from "react-redux";
import {Col, Row, Button, Panel} from "react-bootstrap";

const UserListContainer = connect(
    state => state.uac.user.selectedUser.$as(userId => ({
        user: userId ? state.entities.user[userId] : null,
        allRoles: state.entities.role,
        userRoles: userId && state.entities.user[userId].roles
            ? state.entities.user[userId].roles.map(role => role.name)
            : []
    })),
    dispatch => ({dispatch})
)(props =>
    <Row>
        <UserList onClick={userId => props.dispatch(selectUser(userId))}/>
        <Col xs={6} sm={8} md={9}>
            {props.user
                ? <div>
                <h1>{props.user.userName}</h1>
                {props.allRoles
                    ? <Panel header={<span><i className="fa fa-sitemap"/> Roles</span>}>
                    {props.allRoles.$map(role =>
                        <Col key={role.id} xs={4} sm={3} md={2}>
                            {props.userRoles.includes(role.name)
                                ? <Button
                                bsStyle="success"
                                className="form-control"
                                onClick={() => props.dispatch(removeRole(props.user.id, role.id))}
                            >
                                {role.name}
                            </Button>
                                : <Button
                                bsStyle="danger"
                                className="form-control"
                                onClick={() => props.dispatch(addRole(props.user.id, role.id))}
                            >
                                {role.name}
                            </Button>
                            }
                        </Col>
                    ).$values()}
                </Panel>
                    : <span><i className="fa fa-spinner fa-spin" /> No user selected...</span>
                }
            </div>
                : <span><i className="fa fa-spinner fa-spin" /> No user selected...</span>
            }
        </Col>
    </Row>
);

export default () => <UserListContainer/>;
