/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";

import "./config";

import {addTab} from "atp-ui";
import {logout} from "./reducer/login";
import UserName from "./containers/UserName";

import Authenticated from "./containers/Authenticated";
import HasPermission from "./containers/HasPermission";
import LoginForm from "./containers/login/form";
import {Permission} from "./reducer/permission";
import {Role} from "./reducer/role";
import {User} from "./reducer/user";
import UserDashboard from "./containers/user/dashboard";

import PermissionList from "./containers/permission/list";
import RoleDashboard from "./containers/role/dashboard";
import {Row} from "react-bootstrap";

import isLoggedIn from "./reducer/login";
import profile from "./reducer/profile";
import loginToken from "./reducer/login-token";
import role from "./reducer/role";
import user from "./reducer/user";
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
                                label: <span><i className="fa fa-lock"></i> Permissions</span>,
                                sortOrder: 0,
                                permissions: ['auth.permission.view'],
                                onClick: dispatch => {
                                    dispatch(addTab({
                                        title: <span><i className="fa fa-lock" /> Permissions</span>,
                                        id: () => 'uac-permissions',
                                        controller: () => <Row><PermissionList/></Row>
                                    }));
                                }
                            },
                            roles: {
                                label: <span><i className="fa fa-sitemap"></i> Roles</span>,
                                sortOrder: 1,
                                permissions: ['auth.role.view'],
                                onClick: dispatch => {
                                    dispatch(addTab({
                                        title: <span><i className="fa fa-sitemap" /> Roles</span>,
                                        id: () => 'uac-roles',
                                        controller: () => <RoleDashboard/>
                                    }));
                                }
                            },
                            users: {
                                label: <span><i className="fa fa-users"></i> Users</span>,
                                sortOrder: 1,
                                permissions: ['auth.user.view'],
                                onClick: dispatch => {
                                    dispatch(addTab({
                                        title: <span><i className="fa fa-users" /> Users</span>,
                                        id: () => 'uac-users',
                                        controller: () => <UserDashboard/>
                                    }));
                                }
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

export {Authenticated, LoginForm, HasPermission, Role, User, Permission};