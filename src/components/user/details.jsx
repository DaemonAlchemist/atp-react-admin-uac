
import React from "react";
import {Col, Row, Button} from "react-bootstrap";
import {InlineEdit} from "atp-inline-edit";
import {Assigner} from "atp-ui";
import {Icon} from 'react-font-awesome-5';
import ApiKeyList from "../../containers/api-key/list";

export default ({user, saveUserName, deleteUser, allRoles, userRoles, joinRole, leaveRole}) => user ? <Row>
    <Col xs={12} sm={6} md={4}>
        <h1 style={{marginTop: 0}}>
            <InlineEdit.Text
                id="user.name.edit"
                value={user.userName}
                name="userName"
                onSave={saveUserName}
            />
        </h1>
    </Col>
    <Col xs={12} sm={6} md={8} className="text-right">
        <Button bsSize="lg" bsStyle="danger" onClick={deleteUser}>
            <Icon.Times /> Delete user
        </Button>
    </Col>
    <Col xs={12}>
        <Row>
            <Col xs={12} sm={6}>
                {allRoles && userRoles
                    ? <Assigner
                        Icon={Icon.Sitemap}
                        label="Roles"
                        formId="userRolesAssigner"
                        available={allRoles}
                        assigned={userRoles}
                        onAssign={joinRole}
                        onUnassign={leaveRole}
                      />
                    : <span><Icon.Spinner spin /> Roles loading...</span>
                }
            </Col>
            <Col xs={12} sm={6}>
                <ApiKeyList userId={user.id} />
            </Col>
        </Row>
    </Col>
</Row> : null;
