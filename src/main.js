// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from '@/store'

import 'alucy/lib/style.min.css'

// 项目api 挂载全局变量
import api from '@/utils/Api'
Vue.prototype.$api = api

import { Console } from '@/utils/function'
Vue.prototype.console = Console

// // 弹窗插件
// import 'vue2-toast/lib/toast.css';
// import toast from 'vue2-toast';
// Vue.use(toast);

// 弹窗插件
import 'lucy-toast/lib/toast.css';
import toast from 'lucy-toast';
Vue.use(toast);


// 挂载axios
// import axios from '@/utils/http'
// Vue.prototype.$axios = axios


import lucy from 'lucy-test01'

Vue.prototype.lucy = lucy


// import sj from './page/sj/index.js'

// Vue.use(sj);


import LucyUI from './UI'
import './UI/lib/css/index.css';
console.log(LucyUI)
Vue.use(LucyUI);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
