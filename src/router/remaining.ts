export const remainingRouter: AppRouteRecordRaw[] = [
    // 路由重定向
    {
        path: '/',
        redirect: '/login',
        name: 'Redirect',
        meta: {}
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            icon: 'StarFilled',
            hidden: true
        },
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/homepage',
        name: 'HomePage',
        meta: {
            title: '主页',
            icon: 'StarFilled',
        },
        component: () => import('@/views/HomePage/index.vue')
    },

]
