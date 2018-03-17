
import React from "react";
import {Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {o, a} from "atp-sugar";
import NewRoleForm from "../../containers/role/form/create";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <Col xs={12} sm={4} md={3} lg={2}>
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
            : <span><Icon.Spinner spin /> Loading...</span>
        }
    </Col>;
