
import React from "react";
import {Button, InputGroup} from "react-bootstrap";
import {Field} from "redux-form";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="roleName" placeholder="Role name" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><Icon.Plus /> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>;
