const path = require('path')
const webpack = require('webpack')
const webpackHotMiddlewareConfig = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
const getEntries = require('./getEntries')

module.exports = {
    context: path.resolve(__dirname, '../'),
    // entry: getEntries(null, null, false),
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: 'client/[name].js',
        chunkFilename: 'client/[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
                loader: 'file-loader',
                query: {
                    name: 'file/[name].[ext]'
                }
            },
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: "style-loader" // creates style nodes from JS strings 
            //     }, {
            //         loader: "css-loader" // translates CSS into CommonJS 
            //     }, {
            //         loader: "sass-loader" // compiles Sass to CSS 
            //     }]
            // }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}