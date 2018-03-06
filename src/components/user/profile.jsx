
import React from 'react';
import {Row, Col, Button, Panel, Badge} from 'react-bootstrap';
import ChangePasswordModal from "../../containers/user/form/change-password";
import ApiKeyList from "../../containers/api-key/list";
import {Icon} from 'react-font-awesome-5';
import {InlineEdit} from "atp-inline-edit";
import HasPermission from "../../containers/HasPermission";

export default ({user, isPasswordModalVisible, showPasswordModal, updateUser, userRoles}) =>
    <Row>
        <Col xs={6} xsOffset={3}>
            <Row>
                <Col xs={12} sm={6}>
                    <Panel>
                        <Panel.Heading>
                            Profile Info
                        </Panel.Heading>
                        <Panel.Body>
                            <Row>
                                <Col xs={3}><b>First name:</b></Col>
                                <Col xs={9}>
                                    <InlineEdit.Text
                                    id="user.firstName.edit"
                                    value={user.firstName}
                                    name="firstName"
                                    onSave={updateUser(user.id)}
                                />
                                </Col>
                                <Col xs={3}><b>Last name:</b></Col>
                                <Col xs={9}>
                                    <InlineEdit.Text
                                    id="user.lastName.edit"
                                    value={user.lastName}
                                    name="lastName"
                                    onSave={updateUser(user.id)}
                                />
                                </Col>
                                <Col xs={3}><b>Username:</b></Col>
                                <Col xs={9}>
                                    <InlineEdit.Text
                                        id="user.name.edit"
                                        value={user.userName}
                                        name="userName"
                                        onSave={updateUser(user.id)}
                                    />
                                </Col>
                                <Col xs={9} xsOffset={3}>
                                    <Button onClick={showPasswordModal}>
                                        <Icon.Lock/> Change password
                                    </Button>
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col xs={12} sm={6}>
                    <HasPermission permissions={['auth.role.view']}>
                        <Panel>
                            <Panel.Heading>Roles</Panel.Heading>
                            <Panel.Body>
                                <Row>
                                    <Col xs={12}>
                                        {userRoles.sort().map(role => <Badge style={{margin: "4px"}}>{role.name}</Badge>)}
                                    </Col>
                                </Row>
                            </Panel.Body>
                        </Panel>
                    </HasPermission>
                </Col>
                <Col xs={12}>
                    <Panel>
                        <Panel.Heading>
                            Permissions
                        </Panel.Heading>
                        <Panel.Body>
                            <Row>
                                <Col xs={12}>
                                    {user.permissions.sort().map(name => <Badge style={{margin: "4px"}}>{name}</Badge>)}
                                </Col>
                            </Row>
                        </Panel.Body>
                    </Panel>
                </Col>
                <HasPermission permissions={['auth.key.view']}>
                    <Col xs={12}>
                        <ApiKeyList userId={user.id} />
                    </Col>
                </HasPermission>
            </Row>
        </Col>
        {isPasswordModalVisible && <ChangePasswordModal id={user.id} />}
    </Row>;