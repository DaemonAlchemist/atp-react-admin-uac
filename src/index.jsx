/**
 * Created by Andy on 3/18/2017.
 */

import React from "react";

import permissionsTab from "./components/tabs/permissions";
import rolesTab from "./components/tabs/roles";
import usersTab from "./components/tabs/users";
import {addTab} from "atp-ui";
import uac from "./reducer";
import {logout} from "./actions/login";
import UserName from "./containers/UserName";

import Authenticated from "./containers/Authenticated";
import HasPermission from "./containers/HasPermission";
import LoginForm from "./containers/forms/LoginForm";
import {loadAllPermissions, createPermission} from "./actions/permissions";
import {loadAllRoles, createRole} from "./actions/roles";
import {loadAllUsers, createUser} from "./actions/users";

export default {
    reducers: {
        uac
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
                                    dispatch(loadAllPermissions());
                                    dispatch(addTab(permissionsTab));
                                }
                            },
                            roles: {
                                label: <span><i className="fa fa-sitemap"></i> Roles</span>,
                                sortOrder: 1,
                                permissions: ['auth.role.view'],
                                onClick: dispatch => {
                                    dispatch(loadAllRoles());
                                    dispatch(loadAllPermissions());
                                    dispatch(addTab(rolesTab));
                                }
                            },
                            users: {
                                label: <span><i className="fa fa-users"></i> Users</span>,
                                sortOrder: 1,
                                permissions: ['auth.user.view'],
                                onClick: dispatch => {
                                    dispatch(loadAllUsers());
                                    dispatch(loadAllRoles());
                                    dispatch(addTab(usersTab));
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

export {Authenticated, LoginForm, HasPermission, createPermission, createRole, createUser};