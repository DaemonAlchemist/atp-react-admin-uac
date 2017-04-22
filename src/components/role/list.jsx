/**
 * Created by Andy on 3/27/2017.
 */

import React from "react";
import {Col, ListGroup, ListGroupItem, Button, InputGroup} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {o, a} from "atp-sugar";
import {Role} from "../../reducer/role";

const NewRoleForm = reduxForm({
    form: 'new-role-form',
    onSubmit: (data, dispatch) => dispatch((dispatch, getState) => {
        Role().action.post({name: data.roleName})(dispatch, getState).then(data => {
            Role().action.list({})(dispatch, getState);
            dispatch(Role().action.select(data.results.id));
        });
    })
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
