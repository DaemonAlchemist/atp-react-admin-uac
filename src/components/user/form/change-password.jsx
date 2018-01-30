
import React from "react";
import {Modal, FormGroup, Button} from "react-bootstrap";
import {Field} from "redux-form";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <Modal show={true} bsSize="small">
        <form onSubmit={props.handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title><Icon.Lock /> Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormGroup>
                    <Field type="password" name="currentPassword" placeholder="Current password" component="input" className="form-control" />
                </FormGroup>
                <FormGroup>
                    <Field type="password" name="newPassword" placeholder="New password" component="input" className="form-control" />
                </FormGroup>
                <FormGroup>
                    <Field type="password" name="newPasswordConfirm" placeholder="New password confirm" component="input" className="form-control" />
                </FormGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" type="submit">
                    <Icon.Lock/> Change Password
                </Button>
            </Modal.Footer>
        </form>
    </Modal>;
