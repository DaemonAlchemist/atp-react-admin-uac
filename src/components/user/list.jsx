
import React from "react";
import {ListGroup, ListGroupItem, Button} from "react-bootstrap";
import {a} from "atp-sugar";
import NewUserForm from "../../containers/user/form/create";
import {Icon} from 'react-font-awesome-5';

export default ({users, onClick, selectedUser, onDelete}) => users ?
    <ListGroup>
        <ListGroupItem>
            <NewUserForm/>
        </ListGroupItem>

        {a(users).sortBy("userName").map(user =>
            <ListGroupItem
                key={user.id}
                onClick={() => onClick(user.id)}
                className={selectedUser == user.id ? "active" : ""}
            >
                {user.userName}
            </ListGroupItem>
        )}
    </ListGroup>
    : <span><Icon.Spinner spin /> User list loading...</span>;