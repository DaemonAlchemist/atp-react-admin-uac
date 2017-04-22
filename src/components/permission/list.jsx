/**
 * Created by Andy on 3/27/2017.
 */

import React from "react";
import {Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {o} from "atp-sugar";
import NewPermissionForm from "../../containers/permission/form/create";

export default props =>
    <Col xs={6} sm={4} md={3}>
        {props.permissions
            ?   <ListGroup>
                    <ListGroupItem>
                        <NewPermissionForm/>
                    </ListGroupItem>
                    {o(props.permissions).values().sort((a, b) => a.name.localeCompare(b.name)).map(permission =>
                        <ListGroupItem key={permission.id}>
                            {permission.name}
                        </ListGroupItem>
                    )}
                </ListGroup>
            : <span><i className="fa fa-spinner fa-spin"/> Loading...</span>
        }
    </Col>;