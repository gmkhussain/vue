/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({ // NOTE:  The ```createApp``` method is for Vue 3, `new Vue`
  // That is typically your root Vue instance that the rest of the application descends from. This hangs off the root element declared in an html document
    el: '#app',
  store: store, // as global objec
  router,
  components: { App },
  template: '<App/>'
})

