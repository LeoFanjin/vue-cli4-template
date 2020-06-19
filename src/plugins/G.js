import { myBrowser } from 'utils';

import appConfig from '../config/index';

let indexConfig = Object.assign({}, G);

Object.assign(G, appConfig, {
  sys_sign: 'system_sign',
  errorPage: '/error',
  messageLock: false,
  homePage: '/home',
  loginPage: '/login',
  maskLevel: 0
});

indexConfig.system_code && (G.system_code = indexConfig.system_code);
indexConfig.title && (G.title = indexConfig.title);
indexConfig.base_api && (G.base_api = indexConfig.base_api);
indexConfig.portalPage && (G.portalPage = indexConfig.portalPage);
indexConfig.loginPage && (G.loginPage = indexConfig.loginPage);

if (!G.isRelyAPI) {
  G.localResource = require('@/ap-base/local-resources');
}

if (myBrowser() === 'Safari' && G.supportSafari) {
  let urlArray = G.base_api.split('/');
  let base_api = window.location.protocol + '//' + window.location.host;
  if (urlArray.length >= 4) {
    base_api += '/' + urlArray[3];
  }
  G.base_api = base_api;
}
