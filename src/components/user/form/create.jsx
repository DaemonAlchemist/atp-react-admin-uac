
import React from "react";
import {InputGroup, Button} from "react-bootstrap";
import {Field} from "redux-form";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <form onSubmit={props.handleSubmit}>
        <InputGroup>
            <Field name="userName" placeholder="Username" component="input" className="form-control"/>
            <InputGroup.Button>
                <Button bsStyle="primary" type="submit"><Icon.Plus /> Create</Button>
            </InputGroup.Button>
        </InputGroup>
    </form>;
