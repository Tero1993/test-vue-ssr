module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/clear.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/partly-cloudy.png";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(7);


var isDev = "production" !== 'production';

console.log('client/index', 'server-entry.js');

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
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
    // set router's location
    __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].push(context.url);
    var matchedComponents = __WEBPACK_IMPORTED_MODULE_0__app__["a" /* router */].getMatchedComponents();
    if (!matchedComponents) {
        return Promise.reject({ code: '404' });
    }
    console.log('context.url', context.url);
    var s = isDev && Date.now();

    // Call preFetch hooks on components matched by the route.
    // A preFetch hook dispatches a store action and returns a Promise,
    // which is resolved when the action is complete and store state has been
    // updated.
    return Promise.all(matchedComponents.map(function (component) {
        if (component.preFetch) {
            return component.preFetch(__WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */]);
        }
    })).then(function () {
        isDev && console.log('data pre-fetch: ' + (Date.now() - s) + 'ms');
        // After all preFetch hooks are resolved, our store is now
        // filled with the state needed to render the app.
        // Expose the state on the render context, and let the request handler
        // inline the state in the HTML response. This allows the client-side
        // store to pick-up the server-side state without having to duplicate
        // the initial data fetching on the client.
        // 将服务端获取到的数据挂载到 context 对象上，
        // 后面会把这些数据直接发送到浏览器端与客户端的vue 实例进行数据(状态)同步
        context.initialState = __WEBPACK_IMPORTED_MODULE_0__app__["b" /* store */].state;
        return __WEBPACK_IMPORTED_MODULE_0__app__["c" /* app */];
    });
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__store__["a"]; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_5_axios___default.a;

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]);

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(_extends({
    store: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */],
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_3__App_vue___default.a));



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var Home = __webpack_require__(25);
var Login = __webpack_require__(26);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    mode: 'history',
    scrollBehavior: function scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
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
    }]
});

router.beforeEach(function (to, from, next) {
    // router.app.$store.dispatch('hideHeaderNav')
    console.log('client/index/router', __filename);
    next();

    // if (from.name && process.env.VUE_ENV === 'client') {
    //     preFetchData(store).then(data => {
    //         next(vm => {
    //             router.app.$store.dispatch('hideHeaderNav')
    //         })
    //     })
    // } else {
    //     next()
    // }
});

/* harmony default export */ __webpack_exports__["a"] = (router);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/index.js"))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var state = {
    TkData: {}
};

var mutations = {
    SET_TK_DATA: function SET_TK_DATA(state, data) {
        state.TkData = data;
    },
    GET_TK_DATA: function GET_TK_DATA(state, data) {
        state.TkData = data;
    }
};

var actions = {
    // ...
    FETCH_HOME_DATA: function FETCH_HOME_DATA(_ref) {
        var commit = _ref.commit,
            dispatch = _ref.dispatch,
            state = _ref.state;

        var key = '2459115';
        var label = 'NewYork';
        var t1 = new Date().getTime();
        console.log('服务端开始获取数据', t1);
        var statement = 'select * from weather.forecast where woeid=' + key;
        var url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' + statement;
        return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(url).then(function (response) {
            var t2 = new Date().getTime();
            console.log('服务端完成获取数据, 用时', t2 - t1);
            var results = response.data.query.results || {};
            results.reqSt = t1;
            results.reqEd = t2;
            results.reqSp = t2 - t1;
            results.key = key;
            results.label = label;
            results.created = response.data.query.created;
            console.log('results', results);
            // 把数据存到Vuex里面
            commit('SET_TK_DATA', results);
            console.log('服务端数据处理完成, 用时', new Date().getTime() - t1);
        }).catch(function (error) {
            console.log('err', error);
        });
    }
};

var getters = {
    TkData: function TkData(state) {
        return state.TkData;
    }
};

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
});

console.log('client/index/store', __filename);

/* harmony default export */ __webpack_exports__["a"] = (store);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/index.js"))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

// import umHeader from './components/Header.vue'

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    console.log('index/App.vue');
  },

  methods: {}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// const computed = { ...mapGetters([ 'TkData' ])}
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Home',
    serverCacheKey: function serverCacheKey() {
        return 'home';
    },
    data: function data() {
        return {
            selectedCities: '',
            selectOptions: [{ code: 2357536, name: 'Austin, TX' }, { code: 2367105, name: 'Boston, MA' }, { code: 2379574, name: 'Chicago, IL' }, { code: 2459115, name: 'New York, NY' }, { code: 2475687, name: 'Portland, OR' }, { code: 2487956, name: 'San Francisco, CA' }, { code: 2490383, name: 'Seattle, WA' }],
            cityCodeToName: {
                2357536: 'Austin, TX',
                2367105: 'Boston, MA',
                2379574: 'Chicago, IL',
                2459115: 'New York, NY',
                2475687: 'Portland, OR',
                2487956: 'San Francisco, CA',
                2490383: 'Seattle, WA'
            },
            isShowDialog: false,
            isLoading: true,
            weatherData: [this.TkData()],
            visibleCards: {},
            daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        };
    },
    preFetch: function preFetch(store) {
        console.log('preFetch');
        return Promise.resolve(store.dispatch('FETCH_HOME_DATA'));
    },

    methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['TkData']), {
        updateForecasts: function updateForecasts() {
            var _this = this;

            var keys = Object.keys(this.visibleCards);
            keys.forEach(function (key) {
                _this.getForecast(key);
            });
        },
        updateForecastCard: function updateForecastCard() {
            console.log('close loading');
            if (this.isLoading) {
                this.isLoading = false;
            }
        },
        saveSelectedCities: function saveSelectedCities() {
            var selectedCities = JSON.stringify(this.selectedCities);
            localStorage.selectedCities = selectedCities;
        },
        getForecast: function getForecast(key, label) {
            var _this2 = this;

            var statement = 'select * from weather.forecast where woeid=' + key;
            var url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' + statement;
            this.$http.get(url).then(function (res) {
                console.log('res', res);
                var results = res.data.query.results || {};
                results.key = key;
                results.label = label;
                results.created = res.data.query.created;
                _this2.weatherData.push(results);
            }).catch(function (err) {
                console.log('err', err);
            });
            console.log('client-fetchdata');
        },
        toggleAddDialog: function toggleAddDialog(visible) {
            this.isShowDialog = visible;
        },
        getIconClass: function getIconClass(weatherCode) {
            // Weather codes: https://developer.yahoo.com/weather/documentation.html#codes
            weatherCode = parseInt(weatherCode);
            switch (weatherCode) {
                case 25: // cold
                case 32: // sunny
                case 33: // fair (night)
                case 34: // fair (day)
                case 36: // hot
                case 3200:
                    // not available
                    return 'clear-day';
                case 0: // tornado
                case 1: // tropical storm
                case 2: // hurricane
                case 6: // mixed rain and sleet
                case 8: // freezing drizzle
                case 9: // drizzle
                case 10: // freezing rain
                case 11: // showers
                case 12: // showers
                case 17: // hail
                case 35: // mixed rain and hail
                case 40:
                    // scattered showers
                    return 'rain';
                case 3: // severe thunderstorms
                case 4: // thunderstorms
                case 37: // isolated thunderstorms
                case 38: // scattered thunderstorms
                case 39: // scattered thunderstorms (not a typo)
                case 45: // thundershowers
                case 47:
                    // isolated thundershowers
                    return 'thunderstorms';
                case 5: // mixed rain and snow
                case 7: // mixed snow and sleet
                case 13: // snow flurries
                case 14: // light snow showers
                case 16: // snow
                case 18: // sleet
                case 41: // heavy snow
                case 42: // scattered snow showers
                case 43: // heavy snow
                case 46:
                    // snow showers
                    return 'snow';
                case 15: // blowing snow
                case 19: // dust
                case 20: // foggy
                case 21: // haze
                case 22:
                    // smoky
                    return 'fog';
                case 24: // windy
                case 23:
                    // blustery
                    return 'windy';
                case 26: // cloudy
                case 27: // mostly cloudy (night)
                case 28: // mostly cloudy (day)
                case 31:
                    // clear (night)
                    return 'cloudy';
                case 29: // partly cloudy (night)
                case 30: // partly cloudy (day)
                case 44:
                    // partly cloudy
                    return 'partly-cloudy-day';
            }
        },
        addCity: function addCity() {
            // Add the newly selected city
            var select = document.getElementById('selectCityToAdd');
            // var selected = select.options[select.selectedIndex];
            var key = select.value;
            var label = this.cityCodeToName[key];
            if (!this.selectedCities) {
                this.selectedCities = [];
            }
            this.getForecast(key, label);
            this.selectedCities.push({ key: key, label: label });
            this.saveSelectedCities();
            this.toggleAddDialog(false);
        }
    }),
    created: function created() {
        console.log('created', new Date().getTime());
        console.log('server fetch data', this.weatherData);
        // this.getForecast('2459115', 'NewYork')
        this.updateForecastCard();
    },
    mounted: function mounted() {
        console.log('mounted', new Date().getTime());
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Login',
    serverCacheKey: function serverCacheKey() {
        return 'login';
    },
    methods: {
        refresh: function refresh() {
            console.log('123', this, this.$http);
            // location.reload()
        }
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "*{box-sizing:border-box}body,html{padding:0;margin:0;height:100%;width:100%;font-family:Helvetica,Verdana,sans-serif;font-weight:400;font-display:optional;color:#444;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}html{overflow:hidden}body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:stretch;align-content:stretch;background:#ececec}#app,.content,.main,.view{height:100%}.header{width:100%;height:56px;color:#fff;background:#3f51b5;position:fixed;font-size:20px;box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 2px 9px 1px rgba(0,0,0,.12),0 4px 2px -2px rgba(0,0,0,.2);padding:16px 16px 0;will-change:transform;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:center;align-content:center;transition:-webkit-transform .233s cubic-bezier(0,0,.21,1) .1s;transition:transform .233s cubic-bezier(0,0,.21,1) .1s;transition:transform .233s cubic-bezier(0,0,.21,1) .1s,-webkit-transform .233s cubic-bezier(0,0,.21,1) .1s;z-index:1000}.header .headerButton{width:24px;height:24px;margin-right:16px;text-indent:-30000px;overflow:hidden;opacity:.54;transition:opacity .333s cubic-bezier(0,0,.21,1);border:none;outline:none;cursor:pointer}.header #butRefresh{background:url(" + __webpack_require__(18) + ") 50% no-repeat}.header #butAdd{background:url(" + __webpack_require__(17) + ") 50% no-repeat}.header__title{font-weight:400;font-size:20px;margin:0;-webkit-box-flex:1;-ms-flex:1;flex:1}.loader{left:50%;top:50%;position:fixed;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loader #spinner{box-sizing:border-box;stroke:#673ab7;stroke-width:3px;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:line 1.6s cubic-bezier(.4,0,.2,1) infinite,rotate 1.6s linear infinite;animation:line 1.6s cubic-bezier(.4,0,.2,1) infinite,rotate 1.6s linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(450deg);transform:rotate(450deg)}}@-webkit-keyframes line{0%{stroke-dasharray:2,85.964;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dasharray:65.973,21.9911;stroke-dashoffset:0}to{stroke-dasharray:2,85.964;stroke-dashoffset:-65.973;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}@keyframes line{0%{stroke-dasharray:2,85.964;-webkit-transform:rotate(0);transform:rotate(0)}50%{stroke-dasharray:65.973,21.9911;stroke-dashoffset:0}to{stroke-dasharray:2,85.964;stroke-dashoffset:-65.973;-webkit-transform:rotate(90deg);transform:rotate(90deg)}}.main{padding-top:60px;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.dialog-container{background:rgba(0,0,0,.57);position:fixed;left:0;top:0;width:100%;height:100%;opacity:0;pointer-events:none;will-change:opacity;transition:opacity .333s cubic-bezier(0,0,.21,1)}.dialog-container--visible{opacity:1;pointer-events:auto}.dialog{background:#fff;border-radius:2px;box-shadow:0 0 14px rgba(0,0,0,.24),0 14px 28px rgba(0,0,0,.48);min-width:280px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%) translateY(30px);transform:translate(-50%,-50%) translateY(30px);transition:-webkit-transform .333s cubic-bezier(0,0,.21,1) .05s;transition:transform .333s cubic-bezier(0,0,.21,1) .05s;transition:transform .333s cubic-bezier(0,0,.21,1) .05s,-webkit-transform .333s cubic-bezier(0,0,.21,1) .05s}.dialog>div{padding-left:24px;padding-right:24px}.dialog-title{padding-top:20px;font-size:1.25em}.dialog-body{padding-top:20px;padding-bottom:24px}.dialog-body select{width:100%;font-size:2em}.dialog-buttons{padding:8px!important;float:right}.card{padding:16px;position:relative;box-sizing:border-box;background:#fff;border-radius:2px;margin:16px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.weather-forecast .location{font-size:1.75em}.weather-forecast .date,.weather-forecast .description{font-size:1.25em}.weather-forecast .current{display:-webkit-box;display:-ms-flexbox;display:flex}.weather-forecast .current .icon{width:128px;height:128px}.weather-forecast .current .visual{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:4em}.weather-forecast .current .visual .scale{font-size:.5em;vertical-align:super}.weather-forecast .current .description,.weather-forecast .current .visual{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.weather-forecast .current .sunset:before{content:\"Sunset: \";color:#888}.weather-forecast .current .wind:before{content:\"Wind: \";color:#888}.weather-forecast .current .sunrise:before{content:\"Sunrise: \";color:#888}.weather-forecast .current .humidity:before{content:\"Humidity: \";color:#888}.weather-forecast .current .pollen:before{content:\"Pollen Count: \";color:#888}.weather-forecast .current .pcount:before{content:\"Pollen \";color:#888}.weather-forecast .future{display:-webkit-box;display:-ms-flexbox;display:flex}.weather-forecast .future .oneday{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.weather-forecast .future .oneday .icon{width:64px;height:64px;margin-left:auto;margin-right:auto}.weather-forecast .future .oneday .temp-high,.weather-forecast .future .oneday .temp-low{display:inline-block}.weather-forecast .future .oneday .temp-low{color:#888}.weather-forecast .icon{background-repeat:no-repeat;background-size:contain}.weather-forecast .icon.clear-day{background-image:url(" + __webpack_require__(2) + ")}.weather-forecast .icon.clear-night{background-image:url(" + __webpack_require__(2) + ")}.weather-forecast .icon.rain{background-image:url(" + __webpack_require__(19) + ")}.weather-forecast .icon.snow{background-image:url(" + __webpack_require__(21) + ")}.weather-forecast .icon.sleet{background-image:url(" + __webpack_require__(20) + ")}.weather-forecast .icon.windy{background-image:url(" + __webpack_require__(23) + ")}.weather-forecast .icon.fog{background-image:url(" + __webpack_require__(16) + ")}.weather-forecast .icon.cloudy{background-image:url(" + __webpack_require__(15) + ")}.weather-forecast .icon.partly-cloudy-day{background-image:url(" + __webpack_require__(3) + ")}.weather-forecast .icon.partly-cloudy-night{background-image:url(" + __webpack_require__(3) + ")}.weather-forecast .icon.thunderstorms{background-image:url(" + __webpack_require__(22) + ")}@media (max-width:450px){.weather-forecast .date,.weather-forecast .description{font-size:.9em}.weather-forecast .current .icon{width:96px;height:96px}.weather-forecast .current .visual{font-size:3em}.weather-forecast .future .oneday .icon{width:32px;height:32px}}.mdl-button{background:transparent;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;line-height:1;letter-spacing:0;overflow:hidden;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:none;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:hsla(0,0%,62%,.2)}.mdl-button:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button:active{background-color:hsla(0,0%,62%,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button.mdl-button--colored:focus:not(:active){background-color:rgba(0,0,0,.12)}.mdl-button--primary.mdl-button--primary{color:#3f51b5}.mdl-button--primary.mdl-button--primary .mdl-ripple{background:#fff}.mdl-button--primary.mdl-button--primary.mdl-button--fab,.mdl-button--primary.mdl-button--primary.mdl-button--raised{color:#fff;background-color:#3f51b5}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/cloudy.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/fog.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/ic_add_white_24px.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/ic_refresh_white_24px.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/rain.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/sleet.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/snow.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/thunderstorm.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/wind.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(29),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content home"
  }, [_c('header', {
    staticClass: "header"
  }, [_c('h1', {
    staticClass: "header__title"
  }, [_vm._v("Weather Demo")]), _vm._v(" "), _c('button', {
    staticClass: "headerButton",
    attrs: {
      "id": "butRefresh",
      "aria-label": "Refresh"
    },
    on: {
      "click": _vm.updateForecasts
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "headerButton",
    attrs: {
      "id": "butAdd",
      "aria-label": "Add"
    },
    on: {
      "click": function($event) {
        _vm.toggleAddDialog(true)
      }
    }
  })]), _vm._v(" "), _c('main', {
    staticClass: "main"
  }, _vm._l((_vm.weatherData), function(w, index) {
    return _c('div', {
      key: index,
      staticClass: "card cardTemplate weather-forecast"
    }, [_c('div', {
      staticClass: "city-key",
      attrs: {
        "hidden": ""
      }
    }, [_vm._v(_vm._s(w.key))]), _vm._v(" "), _c('div', {
      staticClass: "card-last-updated",
      attrs: {
        "hidden": ""
      }
    }, [_vm._v(_vm._s(new Date(w.created)))]), _vm._v(" "), _c('div', {
      staticClass: "location"
    }, [_vm._v(_vm._s(w.label))]), _vm._v(" "), _c('div', {
      staticClass: "date"
    }, [_vm._v(_vm._s(w.channel.item.condition.date))]), _vm._v(" "), _c('div', {
      staticClass: "description"
    }, [_vm._v(_vm._s(w.channel.item.condition.text))]), _vm._v(" "), _c('div', {
      staticClass: "current"
    }, [_c('div', {
      staticClass: "visual"
    }, [_c('div', {
      staticClass: "icon",
      class: _vm.getIconClass(w.channel.item.condition.code)
    }), _vm._v(" "), _c('div', {
      staticClass: "temperature"
    }, [_c('span', {
      staticClass: "value"
    }, [_vm._v(_vm._s(Math.round(w.channel.item.condition.temp)))]), _vm._v(" "), _c('span', {
      staticClass: "scale"
    }, [_vm._v("°F")])])]), _vm._v(" "), _c('div', {
      staticClass: "description"
    }, [_c('div', {
      staticClass: "humidity"
    }, [_vm._v(_vm._s(Math.round(w.channel.atmosphere.humidity)) + "%")]), _vm._v(" "), _c('div', {
      staticClass: "wind"
    }, [_c('span', {
      staticClass: "value"
    }, [_vm._v(_vm._s(Math.round(w.channel.wind.speed)))]), _vm._v(" "), _c('span', {
      staticClass: "scale"
    }, [_vm._v("mph")]), _vm._v(" "), _c('span', {
      staticClass: "direction"
    }, [_vm._v(_vm._s(w.channel.wind.direction))]), _vm._v("°\n                        ")]), _vm._v(" "), _c('div', {
      staticClass: "sunrise"
    }, [_vm._v(_vm._s(w.channel.astronomy.sunrise))]), _vm._v(" "), _c('div', {
      staticClass: "sunset"
    }, [_vm._v(_vm._s(w.channel.astronomy.sunset))])])]), _vm._v(" "), _c('div', {
      staticClass: "future"
    }, _vm._l((_vm.daysOfWeek), function(d, idx) {
      return _c('div', {
        key: idx,
        staticClass: "oneday"
      }, [_c('div', {
        staticClass: "date"
      }, [_vm._v(_vm._s(d[(idx + new Date()) % 7]))]), _vm._v(" "), _c('div', {
        staticClass: "icon",
        class: _vm.getIconClass(w.channel.item.forecast[idx].code)
      }), _vm._v(" "), _c('div', {
        staticClass: "temp-high"
      }, [_c('span', {
        staticClass: "value"
      }, [_vm._v(_vm._s(w.channel.item.forecast[idx].high))]), _vm._v("°\n                        ")]), _vm._v(" "), _c('div', {
        staticClass: "temp-low"
      }, [_c('span', {
        staticClass: "value"
      }, [_vm._v(_vm._s(w.channel.item.forecast[idx].low))]), _vm._v("°\n                        ")])])
    }))])
  })), _vm._v(" "), _c('div', {
    staticClass: "dialog-container",
    class: _vm.isShowDialog ? 'dialog-container--visible' : ''
  }, [_c('div', {
    staticClass: "dialog"
  }, [_c('div', {
    staticClass: "dialog-title"
  }, [_vm._v("Add new city")]), _vm._v(" "), _c('div', {
    staticClass: "dialog-body"
  }, [_c('select', {
    attrs: {
      "id": "selectCityToAdd"
    }
  }, _vm._l((_vm.selectOptions), function(o, idx) {
    return _c('option', {
      key: idx,
      domProps: {
        "value": o.code
      }
    }, [_vm._v(_vm._s(o.name))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "dialog-buttons"
  }, [_c('button', {
    staticClass: "button",
    attrs: {
      "id": "butAddCity"
    },
    on: {
      "click": _vm.addCity
    }
  }, [_vm._v("Add")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "id": "butAddCancel"
    },
    on: {
      "click": function($event) {
        _vm.toggleAddDialog(false)
      }
    }
  }, [_vm._v("Cancel")])])])]), _vm._v(" "), (_vm.isLoading) ? _c('div', {
    staticClass: "loader"
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32"
    }
  }, [_c('circle', {
    attrs: {
      "id": "spinner",
      "cx": "16",
      "cy": "16",
      "r": "14",
      "fill": "none"
    }
  })])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "content home"
  }, [_vm._v("\n         it's fake Login\n         "), _c('button', {
    on: {
      "click": _vm.refresh
    }
  }, [_vm._v(" refresh ")])])])
},staticRenderFns: []}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view', {
    staticClass: "view"
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(31)("b093782a", content, true);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(32)

module.exports = function (parentId, list, isProduction) {
  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    var context = __VUE_SSR_CONTEXT__
    var styles = context._styles

    if (!styles) {
      styles = context._styles = {}
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get : function() {
          return (
            context._renderedStyles ||
            (context._renderedStyles = renderStyles(styles))
          )
        }
      })
    }

    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        style.ids.push(part.id)
        style.css += '\n' + part.css
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);