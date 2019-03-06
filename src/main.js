// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/utils/reset.scss'


import LucyUI from './components'
import './components/lib/css/index.css';
import './components/lib/css/iconfont.css'

// import '../static/lui.min.css'
// import LucyUI from '../static/lui.min.js'
Vue.use(LucyUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
