
const nunjucks = require('nunjucks')
const path = require('path')
// const pug = require('pug')
const VueSSR = require('vue-ssr')
// const vueRender = require('../vue-ssr/renderer')

// webpack server-side bundle config
const serverConfig = require('../../build/webpack.server')

const indexRenderer = new VueSSR({
    projectName: 'index',
    rendererOptions: {
        cache: require('lru-cache')({
            max: 10240,
            maxAge: 1000 * 60 * 15
        })
    }, 
    webpackServer: serverConfig
})

function sRender (req, res) {
    // return function (req, res) {
        // console.log('template', template('index'))
        // const temp = template(data.fileName, { data: data })
        const temp = nunjucks.render(path.join(__dirname, '../views/' + 'index' + '.html'), {
            data: {
                fileName: 'index',
                title: 'home',
                bundle: 'home',
                tem: '{{ APP }}'
            }
        })
        // const temp = template('index', {
        //     title: '233',
        //     bundle: 'index'
        // })
        console.log('temp', temp, typeof temp)
        console.log('server/view', __filename)
        indexRenderer.render(req, res, temp)
    // }
}

// pug
// function render (view, data) {
//     return pug.compileFile(path.join(__dirname, '../views/' + view + '.pug'), {
//         cache: true
//     })(data)
// }

// function index (req, res) {
//     const template = render('index', { title: 'cov-x', bundle: 'index' })
//     console.log('template', template);
//     indexRenderer.render(req, res, template)
// }

module.exports = {
    sRender,
    // index
}