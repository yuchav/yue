import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';

import Util from './libs/util';
import App from './app.vue';

import './styles/reset.css';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    //mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    //global loading show
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    //global loading hide
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});