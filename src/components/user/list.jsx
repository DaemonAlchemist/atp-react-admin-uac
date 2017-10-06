/**
 * Created by Andy on 3/27/2017.
 */

import React from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {a} from "atp-sugar";

import NewUserForm from "../../containers/user/form/create";

export default props => props.users ?
    <ListGroup>
        <ListGroupItem>
            <NewUserForm/>
        </ListGroupItem>

        {a(props.users).sortBy("user_name").map(user =>
            <ListGroupItem
                key={user.id}
                onClick={() => props.onClick(user.id)}
                className={props.selectedUser == user.id ? "active" : ""}
            >
                {user.user_name}
            </ListGroupItem>
        )}
    </ListGroup>
    : <span><i className="fa fa-spinner fa-spin"/> User list loading...</span>;