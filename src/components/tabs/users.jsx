/**
 * Created by Andy on 3/21/2017.
 */

import React from "react";

import usersController from "../../controller/users";

export default {
    title: <span><i className="fa fa-users" /> Users</span>,
    id: () => 'uac-users',
    controller: usersController
};
