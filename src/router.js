const routers = [{
    path: '/',
    redirect: '/index'
},{
    path: '/index',
    meta: {
        title: 'Index Page'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/about',
    meta: {
        title: 'ABout Page'
    },
    component: (resolve) => require(['./views/about.vue'], resolve)
}];
export default routers;