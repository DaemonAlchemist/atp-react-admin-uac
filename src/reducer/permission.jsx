
import {entityBoilerplate} from "atp-redux-entity";

export const permissionType = 'uacPermission';
export const permissionName = 'permission';

export const Permission = () => entityBoilerplate(permissionType, 'permission');
