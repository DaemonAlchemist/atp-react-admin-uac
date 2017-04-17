/**
 * Created by Andy on 3/19/2017.
 */

import React from "react";
import UserList from "../containers/UserList";
import {selectUser, addRole, removeRole} from "../actions/users";
import {connect} from "react-redux";
import {Col, Row, Button, Panel, InputGroup, FormControl} from "react-bootstrap";
import {o} from "atp-sugar";
import {Assigner} from "atp-ui";
import {InlineEdit} from "atp-inline-edit";

const UserListContainer = connect(
    state => o(state.uac.user.selectedUser).as(userId => ({
        user: userId ? state.entities.user[userId] : null,
        allRoles: state.entities.role,
        userRoles: userId && state.entities.user[userId].roles
            ? state.entities.user[userId].roles
            : []
    })),
    dispatch => ({dispatch})
)(props =>
    <Row>
        <UserList onClick={userId => props.dispatch(selectUser(userId))}/>
        <Col xs={6} sm={8} md={9}>
            {props.user
                ? <Row>
                    <Col xs={12} sm={6} md={4}>
                        <h1>
                            <InlineEdit.Text
                                id="user.name.edit"
                                value={props.user.userName}
                                onSave={(data, dispatch) => alert(JSON.stringify(data))}
                            />
                        </h1>
                    </Col>
                    <Col xs={12}>
                        {props.allRoles
                            ? <Panel header={<span><i className="fa fa-sitemap"/> Roles</span>}>
                                <Assigner
                                    available={o(props.allRoles).values()}
                                    assigned={props.userRoles}
                                    onAssign={role => props.dispatch(addRole(props.user.id, role.id))}
                                    onUnassign={role => props.dispatch(removeRole(props.user.id, role.id))}
                                />
                            </Panel>
                            : <span><i className="fa fa-spinner fa-spin" /> No user selected...</span>
                        }
                    </Col>
                </Row>
                : <span><i className="fa fa-spinner fa-spin" /> No user selected...</span>
            }
        </Col>
    </Row>
);

export default () => <UserListContainer/>;
