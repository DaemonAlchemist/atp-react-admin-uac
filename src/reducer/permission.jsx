/**
 * Created by Andy on 4/19/2017.
 */

import {entityBoilerplate} from "atp-redux-entity";

export const permissionType = 'uacPermission';
export const permissionName = 'permission';

export const Permission = () => entityBoilerplate(permissionType, 'permission');
