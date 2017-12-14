import React from 'react';
import {connectWithLifecycle} from 'react-lifecycle-component';
import {Link} from 'atp-react-tab-router';
import {User} from "../reducer/user";
import {get} from 'atp-pointfree';

export const UserLink = props => props.user
    ? <Link
        {...props}
        to={`/uac/user/${props.user.id}`}
        label={<span><i className="fa fa-user" /> User "{props.user.userName}"</span>}
        target="new"
      />
    : <div><i className="fa fa-spinner fa-spin" /> Loading...</div>;

export const UserLinkFull = connectWithLifecycle(
    (state, props) => ({
        user: User().select.one(get(state), props.userId)
    }),
    (dispatch, props) => ({
        componentDidMount: () => {dispatch(User().action.fetch(props.userId));}
    })
)(({user}) => user
    ? <UserLink user={user}>
        <i className="fa fa-user"/> {user.userName}
     </UserLink>
    : <div><i className="fa fa-spinner fa-spin" /> Loading...</div>
);
