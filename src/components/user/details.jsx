/**
 * Created by Andy on 4/21/2017.
 */

import React from "react";
import {Col, Row, Panel} from "react-bootstrap";
import {InlineEdit} from "atp-inline-edit";
import {Assigner} from "atp-ui";

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
        <Panel header={<span><i className="fa fa-sitemap"/> Roles</span>}>
            {props.allRoles && props.userRoles
                ? <Assigner
                    available={props.allRoles}
                    assigned={props.userRoles}
                    onAssign={props.joinRole}
                    onUnassign={props.leaveRole}
                />
                : <span><i className="fa fa-spinner fa-spin"/> Roles loading...</span>
            }
        </Panel>
    </Col>
</Row> : null;
