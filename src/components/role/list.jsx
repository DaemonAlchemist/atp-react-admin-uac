/**
 * Created by Andy on 3/27/2017.
 */

import React from "react";
import {Alert, Col, ListGroup, ListGroupItem, Button, InputGroup, FormControl} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {o} from "atp-sugar";

import {createRole} from "atp-uac";

const NewRoleForm = reduxForm({
    form: 'new-role-form',
    onSubmit: (data, dispatch) => dispatch(createRole(data.roleName))
})(props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="roleName" placeholder="Role name" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-plus"/> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>
);

export default props =>
    <Col xs={6} sm={4} md={3}>
        {props.roles
            ?   <ListGroup>
                    <ListGroupItem>
                        <NewRoleForm/>
                    </ListGroupItem>

                    {o(props.roles).$values().$sortBy("name").map(role =>
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
