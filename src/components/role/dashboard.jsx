
import React from "react";
import {Col, Row} from "react-bootstrap";
import RoleList from "../../containers/role/list";
import RoleDetails from "../../containers/role/details";

export default props =>
    <Row>
        <RoleList onClick={props.onSelect}/>
        <Col xs={12} sm={8} md={6} lg={6}>
            <RoleDetails roleId={props.roleId} />
        </Col>
    </Row>