import { app, store } from './app'

store.replaceState(window.__INITIAL_STATE__)
console.log('client-test')
app.$mount('#app')
