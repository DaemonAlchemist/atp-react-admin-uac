
import React from 'react';
import {connectWithLifecycle} from 'react-lifecycle-component';
import {Link} from 'atp-react-tab-router';
import {User} from "../reducer/user";
import {get} from 'atp-pointfree';
import {Icon} from 'react-font-awesome-5';

export const UserLink = props => props.user
    ? <Link
        {...props}
        to={`/uac/user/${props.user.id}`}
        label={<span><Icon.User /> User "{props.user.userName}"</span>}
        target="new"
      />
    : <div><Icon.Spinner spin /> Loading...</div>;

export const UserLinkFull = connectWithLifecycle(
    (state, props) => ({
        user: User().select.one(get(state), props.userId)
    }),
    (dispatch, props) => ({
        componentDidMount: () => {dispatch(User().action.fetch(props.userId));}
    })
)(({user}) => user
    ? <UserLink user={user}>
        <span  style={{whiteSpace: "nowrap"}}>
            <Icon.User /> {user.userName}
        </span>
     </UserLink>
    : <div><Icon.Spinner spin /> Loading...</div>
);
