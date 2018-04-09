import { app, router, store } from './app'

const isDev = process.env.NODE_ENV !== 'production'

console.log('client/index', 'server-entry.js')

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/**
 * 返回一个函数，该函数接受一个从服务端传递过来的 context 的参数
 * 将 vue 实例通过 promise 返回。 
 * context一般包含当前页面的url
 * 调用 vue-router 的 router.push(url) 切换到到对应的路由， 
 * 然后调用 getMatchedComponents 方法返回对应要渲染的组件
 * 这里会检查组件是否有 preFetch 方法，如果有就会执行它。
 */
export default context => {
    // set router's location
    router.push(context.url)
    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents) {
        return Promise.reject({ code: '404' });
    }
    console.log('context.url', context.url)
    const s = isDev && Date.now()

    // Call preFetch hooks on components matched by the route.
    // A preFetch hook dispatches a store action and returns a Promise,
    // which is resolved when the action is complete and store state has been
    // updated.
    return Promise.all(matchedComponents.map(component => {
        if (component.preFetch) {
            return component.preFetch(store)
        }
    })).then(() => {
        isDev && console.log(`data pre-fetch: ${Date.now() - s}ms`)
            // After all preFetch hooks are resolved, our store is now
            // filled with the state needed to render the app.
            // Expose the state on the render context, and let the request handler
            // inline the state in the HTML response. This allows the client-side
            // store to pick-up the server-side state without having to duplicate
            // the initial data fetching on the client.
            // 将服务端获取到的数据挂载到 context 对象上，
            // 后面会把这些数据直接发送到浏览器端与客户端的vue 实例进行数据(状态)同步
        context.initialState = store.state
        return app;
    })
}