import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
Vue.prototype.$http = axios


sync(store, router)

const app = new Vue({
    store,
    router,
    ...App
})

export { app, router, store }
