const routers = [{
    path: '/',
    redirect: '/index'
},{
    path: '/index',
    meta: {
        title: 'It Works'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;