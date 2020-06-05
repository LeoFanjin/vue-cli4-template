import { myBrowser } from 'utils';

const env = process.env.NODE_ENV || 'development';
let config = require(`../config/env.${env}`);

G = Object.assign({}, G, config, APP_CONFIG[env], {
  lang: 'zh',
  sys_sign: 'system_sign',
  errorPage: '/error',
  messageLock: false,
  homePage: '/home',
  loginPage: '/login',
  maskLevel: 0
});

if (!G.isRelyAPI) {
  G.localResource = require('../ap-base/local-resources');
}

if (myBrowser() === 'Safari' && G.supportSafari) {
  let urlArray = G.base_api.split('/');
  let base_api = window.location.protocol + '//' + window.location.host;
  if (urlArray.length >= 4) {
    base_api += '/' + urlArray[3];
  }
  G.base_api = base_api;
}
