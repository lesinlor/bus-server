import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		busList: '',
		busInfo: '',
		city: ''
	},
	getter: {
		busList: state => state.busList,
		busInfo: state => state.busInfo,
		city: state => state.city
	},
	mutations: {
		setBusList(state, data){
			state.busList = data;
		},
		setBusInfo(state, data){
			state.busInfo = data
		},
		setCity(state, data){
			state.city = data
		}
	}
})

export default store