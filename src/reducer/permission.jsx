
import {entityBoilerplate} from "atp-redux-entity";
import {a} from "atp-sugar";

export const permissionType = 'uacPermission';
export const permissionName = 'permission';

//Helper selectors
export const hasPermissions = (getState, permissions) => a(permissions).intersect(getState().uac.profile.permissions).length > 0;
export const hasPermission = (getState, permission) => hasPermissions(getState, [permission]);

export const Permission = () => entityBoilerplate(permissionType, 'permission');
