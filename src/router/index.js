import Vue from 'vue';
import VueRouter from 'vue-router';
import { Storage, logout } from 'utils';

Vue.use(VueRouter);

G.homePage = G.homePage || '/home';

// 解决vue-router3.0以上重复点菜单报错的问题
// 其实就是捕捉到错误但不做处理
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (index.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "index" */ '@/ap-base/index.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () =>
          import(
            /* webpackChunkName: "home" */ '@/ap-base/system/home/main.vue'
          )
      },
      require('../views/demo/router'),
      require('../views/about/router'),
      // require('../views/registeredUser/router'),
      {
        path: '404',
        name: '_404',
        component: () =>
          import(
            /* webpackChunkName: "_404" */ '@/ap-base/system/error/404/main.vue'
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      let user_info = Storage.get(G.storage_key);
      if (to && to.path !== G.loginPage) {
        if (_.isEmpty(user_info)) {
          logout();
        } else {
          next();
        }
      } else if (to && to.path === G.loginPage) {
        if (!_.isEmpty(user_info)) {
          next(G.homePage);
        } else {
          next();
        }
      }
      next();
    },
    redirect: G.homePage
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/ap-base/system/login/main.vue')
  },
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "404" */ '@/ap-base/system/404/main.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
