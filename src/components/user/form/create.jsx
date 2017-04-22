/**
 * Created by Andy on 4/21/2017.
 */

import React from "react";
import {InputGroup, Button} from "react-bootstrap";
import {Field} from "redux-form";

export default props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="userName" placeholder="Username" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><i className="fa fa-plus"/> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>;
