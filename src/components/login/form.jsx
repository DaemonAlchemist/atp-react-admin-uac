
import React from "react";
import {Modal, FormGroup, Button} from "react-bootstrap";
import {Field} from "redux-form";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <Modal show={true} bsSize="small">
        <form onSubmit={props.handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title><Icon.SignInAlt /> Login</Modal.Title>
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
                <Button bsStyle="link" type="submit">
                    <Icon.SignInAlt/> Login
                </Button>
            </Modal.Footer>
        </form>
    </Modal>;
