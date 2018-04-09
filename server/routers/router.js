const express = require('express')
const router = express.Router()

const View = require('./view')

console.log('server/routers', __filename)

// router.get('/', View.index)
// router.get('/phome', View.index)
// router.get('/article', View.index)
// router.get('/tag', View.index)
// const rs = 
// router.get('/login', function(req, res) {
//   View.sRender({
//     fileName: 'test',
//     title: '登录',
//     bundle: 'login',
//     tem: '{{ APP }}'
//   }, req, res)
// })
// router.get('/login', View.sRender)
router.get('/home', View.sRender)
// router.get('/testPage', function(req, res) {
//   View.sRender({
//     fileName: 'test',
//     title: 'testPage',
//     bundle: 'testPage',
//     tem: '{{ APP }}'
//   }, req, res)
// })
console.log('ViewViewView', View.sRender);

router.get('/login', function (req, res) {
  res.render('login', { title: 'login', bundle: 'login'})
})

const tk = {
  a: 233,
}
router.get('/tt', function (req, res) {
  res.render('index.html', {
    tk:tk,
  })
})


module.exports = router