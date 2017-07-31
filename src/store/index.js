import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

// 数据部分
const state = {
	latitude: '',
	shopDetail:''
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})