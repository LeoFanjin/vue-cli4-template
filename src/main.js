// 引入全局变量、UI组件、样式文件、图标库等
import './plugins/index';

import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store';

// 用于单点登录发起jsonp请求
import jsonp from 'jsonp';

Vue.config.productionTip = false;

// 非单点登录
/* new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App)
}).$mount('#app'); */

// 单点登录
const GetQueryString = (name) => {
  let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return '';
};
let token = GetQueryString('t') || '';
if (!token) {
  let name = `token_${G.sys_sign}`;
  let r = new RegExp(`(?:^|;\\s*)${name}=([^;]*)`),
    m = document.cookie.match(r);
  token = (m && m[1]) || '';
}
if (token) {
  let jump = GetQueryString(`jump_${G.sys_sign}`);
  G.token = token;
  document.cookie = `token_${G.sys_sign}=${token}`;
  G.jump = jump;
  document.cookie = `jump_${G.sys_sign}=${jump}`;
  jsonp(
    `${G.base_api}/ap-system/UserLoginForChild?authorization=${token}`,
    {
      timeout: 60000
    },
    (err, results) => {
      if (err) {
        Vue.prototype.$message.error(
          typeof err === 'string' ? err : '登录失败'
        );
      } else {
        if (results.status === 1) {
          let data = results.data;
          if (data.organizationEntity && data.userEntity) {
            data.userEntity.organ = data.organizationEntity;
          }
          G.USER_INFO = data.userEntity;
          G.OPTIONS = data.operationEntities;

          // 单点登录成功后初始化Vue
          new Vue({
            i18n,
            router,
            store,
            render: (h) => h(App)
          }).$mount('#app');
        } else {
          Vue.prototype.$message.error(
            typeof results.message === 'string' ? err : '登录失败'
          );
        }
      }
    }
  );
}
