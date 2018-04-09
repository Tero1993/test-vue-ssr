import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const state = {
    TkData: {}
}

const mutations = {
    SET_TK_DATA(state, data) {
        state.TkData = data
    },
    GET_TK_DATA(state, data) {
        state.TkData = data
    }
}

const actions = {
    // ...
    FETCH_HOME_DATA: ({ commit, dispatch, state }) => {
        const key = '2459115'
        const label = 'NewYork'
        const t1 = new Date().getTime();
        console.log('服务端开始获取数据', t1);
        const statement = 'select * from weather.forecast where woeid=' + key;
        const url = 'https://query.yahooapis.com/v1/public/yql?format=json&q=' +
            statement;
        return axios.get(url).then((response) => {
                const t2 = new Date().getTime();
                console.log('服务端完成获取数据, 用时', t2 - t1);
                const results = response.data.query.results || {};
                results.reqSt = t1;
                results.reqEd = t2;
                results.reqSp = t2 - t1;
                results.key = key;
                results.label = label;
                results.created = response.data.query.created;
                console.log('results', results);
                // 把数据存到Vuex里面
                commit('SET_TK_DATA', results)
                console.log('服务端数据处理完成, 用时', new Date().getTime() - t1);
            })
            .catch((error) => {
                console.log('err', error);
            })
    }
}

const getters = {
    TkData: state => state.TkData,
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

console.log('client/index/store', __filename)

export default store