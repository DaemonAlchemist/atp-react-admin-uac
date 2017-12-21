
import React from "react";
import {Assigner} from "atp-ui";
import {Icon} from 'react-font-awesome-5';

export default props => props.role ?
    <div>
        <h1 style={{marginTop: 0}}>{props.role.name}</h1>
        {props.allPermissions && props.rolePermissions
            ? <Assigner
                Icon={Icon.Lock}
                label="Permissions"
                formId="rolePermissionAssigner"
                available={props.allPermissions}
                assigned={props.rolePermissions}
                onAssign={props.onAuthorize}
                onUnassign={props.onDeny}
              />
            : <span><Icon.Spinner spin /> Permissions loading...</span>
        }
    </div>
    : null;
