const webpack = require('webpack')
const base = require('./webpack.base')
const getEntries = require('./getEntries')
module.exports = Object.assign({}, base, {
    target: 'node',
    devtool: false,
    entry: getEntries(null, ['login'], true),
    output: Object.assign({}, base.output, {
        filename: 'server/[name].js',
        libraryTarget: 'commonjs2'
    }),
    // 我们一般不想把 node_modules 里的库也打包进来，因此把这些库全部用externals引入。
    // 一般采用的方式是直接遍历package.json里的dependencies(和devDependencies) 
    // 或 node_modules 文件夹来生成 externals 配置。
    // 当然，也可以用第三方的插件webpack-node-externals，但是原理也类似。
    externals: Object.keys(require('../package.json').dependencies),
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
        })
    ]
})