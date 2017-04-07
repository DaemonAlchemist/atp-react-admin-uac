/**
 * Created by Andy on 3/21/2017.
 */

import React from "react";

import permissionsController from "../../controller/permissions";

export default {
    title: <span><i className="fa fa-lock" /> Permissions</span>,
    id: () => 'uac-permissions',
    controller: permissionsController
};
