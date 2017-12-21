
import React from "react";
import {Col, Row} from "react-bootstrap";
import {InlineEdit} from "atp-inline-edit";
import {Assigner} from "atp-ui";
import {Icon} from 'react-font-awesome-5';

export default props => props.user ? <Row>
    <Col xs={12} sm={6} md={4}>
        <h1 style={{marginTop: 0}}>
            <InlineEdit.Text
                id="user.name.edit"
                value={props.user.userName}
                name="userName"
                onSave={props.saveUserName}
            />
        </h1>
    </Col>
    <Col xs={12}>
        {props.allRoles && props.userRoles
            ? <Assigner
                Icon={Icon.Sitemap}
                label="Roles"
                formId="userRolesAssigner"
                available={props.allRoles}
                assigned={props.userRoles}
                onAssign={props.joinRole}
                onUnassign={props.leaveRole}
              />
            : <span><Icon.Spinner spin /> Roles loading...</span>
        }
    </Col>
</Row> : null;
