import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'


Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/views/auth/Login.vue')
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: () =>
            import ('@/views/auth/Forgot.vue')
    },
    {
        path: '/sent',
        name: 'Sent',
        component: () =>
            import ('@/views/auth/Sent.vue')
    },
    {
        path: '/reset',
        name: 'Reset',
        component: () =>
            import ('@/views/auth/Reset.vue')
    },
    {
        path: '/resetsuccess',
        name: 'ResetSuccess',
        component: () =>
            import ('@/views/auth/ResetSuccess.vue')
    },
    {
        path: '/',
        redirect: '/dashboard/home'
    },
    {
        path: '/dashboard',
        component: () =>
            import ('@/views/Dashboard.vue'),
        children: [{
                path: 'home',
                name: 'Home',
                component: () =>
                    import ('@/views/dashboard/Home.vue')
            },
            {
                path: 'customer/add',
                name: 'CustomerAdd',
                component: () =>
                    import ('@/views/dashboard/CustomerAdd.vue')
            },
            {
                path: 'customer/add/success',
                name: 'CustomerAddSuccess',
                component: () =>
                    import ('@/views/dashboard/CustomerAddSuccess.vue')
            },
            {
                path: 'customer/all',
                name: 'CustomerAll',
                component: () =>
                    import ('@/views/dashboard/CustomerAll.vue')
            },
            {
                path: 'package/all',
                name: 'PackageAll',
                component: () =>
                    import ('@/views/dashboard/PackageAll.vue')
            },
            {
                path: 'package/add',
                name: 'PackageAdd',
                component: () =>
                    import ('@/views/dashboard/PackageAdd.vue')
            },
            {
                path: 'package/add/success',
                name: 'PackageAddSuccess',
                component: () =>
                    import ('@/views/dashboard/PackageAddSuccess.vue')
            },
            {
                path: 'category/all',
                name: 'CategoryAll',
                component: () =>
                    import ('@/views/dashboard/CategoryAll.vue')
            },
            {
                path: 'category/add',
                name: 'CategoryAdd',
                component: () =>
                    import ('@/views/dashboard/CategoryAdd.vue')
            },
            {
                path: 'category/add/success',
                name: 'CategoryAddSuccess',
                component: () =>
                    import ('@/views/dashboard/CategoryAddSuccess.vue')
            }

        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    console.log("beforeEach", to);
    if (to.path.indexOf('/dashboard') != -1) {
        if (!localStorage.logged) {
            next({ path: '/login' });
        }
    }
    next();
})
export default router