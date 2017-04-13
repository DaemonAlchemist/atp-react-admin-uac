/**
 * Created by Andy on 3/27/2017.
 */

import React from "react";
import {Alert, Col, ListGroup, ListGroupItem, Button, InputGroup, FormControl} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {o} from "atp-sugar";
import {createPermission} from "atp-uac";

const NewPermissionForm = reduxForm({
    form: 'new-permission-form',
    onSubmit: (data, dispatch) => dispatch(createPermission(data.permissionName))
})(props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="permissionName" placeholder="Permission name" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-plus"/> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>
);

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