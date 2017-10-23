/**
 * Created by Andy on 3/24/2017.
 */

import React from "react";
import {Modal, FormGroup, Button} from "react-bootstrap";
import {Field} from "redux-form";

export default props =>
    <Modal show={true} bsSize="small">
        <form onSubmit={props.handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormGroup>
                    <Field type="text" name="userName" placeholder="Username" component="input" className="form-control" />
                </FormGroup>
                <FormGroup>
                    <Field type="password" name="password" placeholder="Password" component="input" className="form-control" />
                </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" type="submit">
                    <i className="fa fa-sign-in" /> Login
                </Button>
            </Modal.Footer>
        </form>
    </Modal>;
