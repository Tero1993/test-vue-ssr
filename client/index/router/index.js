import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = require('../views/Home.vue')
const Login = require('../views/Login.vue')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, ]
})

router.beforeEach((to, from, next) => {
    // router.app.$store.dispatch('hideHeaderNav')
    console.log('client/index/router', __filename)
    next()

    // if (from.name && process.env.VUE_ENV === 'client') {
    //     preFetchData(store).then(data => {
    //         next(vm => {
    //             router.app.$store.dispatch('hideHeaderNav')
    //         })
    //     })
    // } else {
    //     next()
    // }
})

export default router