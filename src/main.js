// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import './assets/remScale'

//将axios挂载到vue原型上
import axios from 'axios'
Vue.prototype.$http=axios

//将jquery挂载在vue原型上
import jquery from 'jquery'
Vue.prototype.$jq=jquery
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
