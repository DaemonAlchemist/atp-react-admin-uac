
import React from "react";
import {Col, Row, Button} from "react-bootstrap";
import {InlineEdit} from "atp-inline-edit";
import {Assigner} from "atp-ui";
import {Icon} from 'react-font-awesome-5';
import ApiKeyList from "../../containers/api-key/list";

export default ({user, updateUser, updateEnabled, updateLocked, deleteUser, allRoles, userRoles, joinRole, leaveRole}) => user ? <Row>
    <Col xs={12} sm={10} md={8}>
        <h1 style={{marginTop: 0}}>
            <InlineEdit.Text id="user.name.edit" inline value={user.userName} name="userName" onSave={updateUser}/>
            (<InlineEdit.Text id="user.firstName.edit" inline value={user.firstName} name="firstName" onSave={updateUser}/>&nbsp;
             <InlineEdit.Text id="user.lastName.edit" inline value={user.lastName} name="lastName" onSave={updateUser}/>)
        </h1>
        <h2>
            <InlineEdit.Text
                id="user.email.edit"
                inline
                value={user.email}
                name="email"
                label="Email address"
                placeHolder="No email address set"
                onSave={updateUser}
            />
        </h2>
    </Col>
    <Col xs={12} sm={2} md={4} className="text-right">
        <InlineEdit.Toggle enabled={user.enabled} update={updateEnabled}/>
        <InlineEdit.Toggle enabled={!user.locked} labelEnabled="Unlocked" labelDisabled="Locked" update={updateLocked}/>
        <Button bsSize="lg" bsStyle="danger" onClick={deleteUser}>
            <Icon.Times /> Delete user
        </Button>
        <br/>
        <h2><InlineEdit.Text id="user.password.edit" inline value="" name="newPassword" label="New password" placeHolder="Set new password" onSave={updateUser} /></h2>
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
