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

        {a(props.users).sortBy("userName").map(user =>
            <ListGroupItem
                key={user.id}
                onClick={() => props.onClick(user.id)}
                className={props.selectedUser == user.id ? "active" : ""}
            >
                {user.userName}
            </ListGroupItem>
        )}
    </ListGroup>
    : <span><i className="fa fa-spinner fa-spin"/> User list loading...</span>;