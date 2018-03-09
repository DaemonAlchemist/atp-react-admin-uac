
import React from "react";
import {Col, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import {o} from "atp-sugar";
import NewPermissionForm from "../../containers/permission/form/create";
import {Icon} from 'react-font-awesome-5';
import {DeleteButton} from 'atp-ui';

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
                            <div style={{float: "right"}}>
                                <DeleteButton
                                    id={`permissionDeleteBtn${permission.id}`}
                                    onClick={props.onDelete(permission.id)}
                                    message={`Are you sure you want to delete the permission ${permission.name}`}
                                />
                            </div>
                        </ListGroupItem>
                    )}
                </ListGroup>
            : <span><Icon.Spinner spin /> Loading...</span>
        }
    </Col>;