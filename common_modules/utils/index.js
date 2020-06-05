import { resource as resourceUtil } from './resource';
import { API as APIUtil } from './api';
import { Ajax as AjaxUtil } from './ajax';
import { Storage as StorageUtil } from './storage';
import { Validate as ValidateUtil } from './validate';
import { logout as logoutUtil } from './logout';
import { dict as dictUtil } from './dict';
import { constant as constantUtil } from './constant';
import { Alerts as AlertsUtil } from './alerts';
import { langx as langxUtil } from './lang';
import { cookie as cookieUtil } from './cookie';
import { myBrowser as myBrowserUtil } from './agent';

export const API = APIUtil;
export const resource = resourceUtil;
export const Ajax = AjaxUtil;
export const Storage = StorageUtil;
export const Validate = ValidateUtil;
export const logout = logoutUtil;
export const dict = dictUtil;
export const constant = constantUtil;
export const Alerts = AlertsUtil;
export const lang = langxUtil;
export const cookie = cookieUtil;
export const myBrowser = myBrowserUtil;
export const dialog = require('./dialog');
export const tree = require('./tree');