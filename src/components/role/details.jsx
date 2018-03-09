
import React from "react";
import {Assigner} from "atp-ui";
import {Icon} from 'react-font-awesome-5';
import {Button} from 'react-bootstrap';
import {DeleteButton} from 'atp-ui';

export default props => props.role ?
    <div>
        <div style={{float: "right"}}>
            <DeleteButton
                id={`roleDeleteBtn${props.role.id}`}
                onClick={props.deleteRole}
                text="Delete role"
                size="lg"
                message={`Are you sure you want to delete the '${props.role.name}' role?  This cannot be undone.`}
                width="250px"
            />
        </div>

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
