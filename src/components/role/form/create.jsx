
import React from "react";
import {Button} from "react-bootstrap";
import {Field} from "redux-form";
import {Icon} from 'react-font-awesome-5';

export default props =>
    <form onSubmit={props.handleSubmit}>
        <Field name="roleName" placeholder="Role name" component="input" className="form-control"/>
        <Button bsStyle="link" style={{position: "absolute", top: "10px", right: "16px", color: "#000"}} type="submit"><Icon.Plus /> Create</Button>
    </form>;
