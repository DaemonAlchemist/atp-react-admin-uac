/**
 * Created by Andy on 3/27/2017.
 */

import React from "react";
import {Alert, Col, ListGroup, ListGroupItem, Button, InputGroup, FormControl} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {o} from "atp-sugar";

import {createUser} from "atp-uac";

const NewUserForm = reduxForm({
    form: 'new-user-form',
    onSubmit: (data, dispatch) => dispatch(createUser(data.userName))
})(props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="userName" placeholder="Username" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-plus"/> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>
);

export default props =>
    <Col xs={6} sm={4} md={3}>
        {props.users
            ?   <ListGroup>
                    <ListGroupItem>
                        <NewUserForm/>
                    </ListGroupItem>

                    {o(props.users).values().$sortBy("userName").map(user =>
                        <ListGroupItem
                            key={user.id}
                            onClick={() => props.onClick(user.id)}
                            className={props.selectedUser == user.id ? "active" : ""}
                        >
                            {user.userName}
                        </ListGroupItem>
                    )}
                </ListGroup>
            : <span><i className="fa fa-spinner fa-spin"/> Loading...</span>
        }
    </Col>;