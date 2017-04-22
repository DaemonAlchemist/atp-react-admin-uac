/**
 * Created by Andy on 3/27/2017.
 */

import React from "react";
import {Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {o, a} from "atp-sugar";
import NewRoleForm from "../../containers/role/form/create";

export default props =>
    <Col xs={6} sm={4} md={3}>
        {props.roles
            ?   <ListGroup>
                    <ListGroupItem>
                        <NewRoleForm/>
                    </ListGroupItem>

                    {a(o(props.roles).values()).sortBy("name").map(role =>
                        <ListGroupItem
                            key={role.id}
                            onClick={() => props.onClick(role.id)}
                            className={props.selectedRole == role.id ? "active" : ""}
                        >
                            {role.name}
                        </ListGroupItem>
                    )}
                </ListGroup>
            : <span><i className="fa fa-spinner fa-spin"/> Loading...</span>
        }
    </Col>;
