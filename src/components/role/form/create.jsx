/**
 * Created by Andy on 4/21/2017.
 */

import React from "react";
import {Button, InputGroup} from "react-bootstrap";
import {Field} from "redux-form";

export default props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="roleName" placeholder="Role name" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-plus"/> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>;
