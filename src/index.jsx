/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";
import {Route} from 'react-router';
import {Link} from 'atp-react-tab-router';

import "./config";

import {logout} from "./reducer/login";
import UserName from "./containers/UserName";
import {UserLink, UserLinkFull} from "./components/links";

import Authenticated from "./containers/Authenticated";
import HasPermission from "./containers/HasPermission";
import LoginForm from "./containers/login/form";
import {Permission} from "./reducer/permission";
import {Role} from "./reducer/role";
import {User} from "./reducer/user";

import UserDashboard from "./containers/user/dashboard";
import PermissionList from "./containers/permission/list";
import RoleDashboard from "./containers/role/dashboard";

import isLoggedIn from "./reducer/login";
import profile from "./reducer/profile";
import loginToken from "./reducer/login-token";
import role from "./reducer/role";
import user from "./reducer/user";
import {getLoginToken} from './reducer/login-token';

import {combineReducers} from "redux";

export default {
    reducers: {
        uac: combineReducers({
            isLoggedIn,
            loginToken,
            profile,
            role,
            user
        })
    },
    routes: [
        <Route path="/uac/permissions" key="/uac/permissions" exact render={() => <PermissionList/>} />,
        <Route path="/uac/roles" key="/uac/roles" exact render={() => <RoleDashboard/>} />,
        <Route path="/uac/users" key="/uac/users" exact render={() => <UserDashboard/>} />
    ],
    init: {
        ui: {
            menus: {
                main: {
                    uac: {
                        label: <span><i className="fa fa-lock"></i> UAC</span>,
                        sortOrder: 0,
                        permissions: ['auth.permission.view', 'auth.role.view', 'auth.user.view'],
                        children: {
                            permissions: {
                                label: <Link to="/uac/permissions" label="Permissions" target="new"><i className="fa fa-lock"></i> Permissions</Link>,
                                noAnchor: true,
                                sortOrder: 0,
                                permissions: ['auth.permission.view'],
                            },
                            roles: {
                                label: <Link to="/uac/roles" label="Roles" target="new"><i className="fa fa-sitemap"></i> Roles</Link>,
                                noAnchor: true,
                                sortOrder: 1,
                                permissions: ['auth.role.view'],
                            },
                            users: {
                                label: <Link to="/uac/users" label="Users" target="new"><i className="fa fa-users"></i> Users</Link>,
                                noAnchor: true,
                                sortOrder: 1,
                                permissions: ['auth.user.view'],
                            }
                        }
                    }
                },
                altMain: {
                    uac: {
                        label: <span><i className="fa fa-user" /> <UserName/></span>,
                        sortOrder: 999,
                        children: {
                            myAccount: {
                                label: <span><i className="fa fa-user" /> My Account</span>,
                                sortOrder: 0,
                                onClick: () => false,
                            },
                            logout: {
                                label: <span><i className="fa fa-sign-out" /> Logout</span>,
                                sortOrder: 999,
                                onClick: dispatch => dispatch(logout()),
                            }
                        }
                    }
                }
            }
        }
    }
};

export {Authenticated, LoginForm, HasPermission, Role, User, Permission, getLoginToken, UserLink, UserLinkFull};