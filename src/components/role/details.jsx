/**
 * Created by Andy on 4/21/2017.
 */

import React from "react";
import {Panel} from "react-bootstrap";
import {Assigner} from "atp-ui";

export default props => props.role ?
    <div>
        <h1 style={{marginTop: 0}}>{props.role.name}</h1>
        {props.allPermissions && props.rolePermissions
            ? <Assigner
                icon="fa fa-lock"
                label="Permissions"
                formId="rolePermissionAssigner"
                available={props.allPermissions}
                assigned={props.rolePermissions}
                onAssign={props.onAuthorize}
                onUnassign={props.onDeny}
              />
            : <span><i className="fa fa-spinner fa-spin" /> Permissions loading...</span>
        }
    </div>
    : null;
