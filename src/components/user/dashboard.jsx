/**
 * Created by Andy on 4/21/2017.
 */

import React from "react";
import {Row, Col} from "react-bootstrap";
import UserDetails from "../../containers/user/details";
import UserList from "../../containers/user/list";

export default props =>
    <Row>
        <Col xs={6} sm={4} md={3}>
            <UserList onClick={props.selectUser}/>
        </Col>
        <Col xs={6} sm={8} md={9}>
            <UserDetails userId={props.userId} />
        </Col>
    </Row>;
