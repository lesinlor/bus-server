import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
  routes: [{
    path: '/',
    alias: '/#',//url重定向，访问/的时候等于访问/#
    component: require('components/Home')
  }, {
    path: '/bus',
    component: require('views/Bus')
  }, {
    path: '/station',
    component: require('views/Station')
  }, {
  	path: '/busquery',
  	component: require('views/Busquery')
  }, {
  	path: '/stationquery',
  	component: require('views/Stationquery')
  }]
})

export default router
