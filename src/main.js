// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // const user = store.state.user ? store.state.user : window.sessionStorage.getItem('user')
  if (to.matched.some(record => record.meta.requireLogin)) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('user')) { // 判断当前用户的登录信息loginInfo是否存在
      console.log(sessionStorage.getItem('user'), 1)
      next()
    } else {
      console.log(2)
      next({
        path: '/login'
      })
    }
  } else {
    console.log(sessionStorage.getItem('user'), 3)
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,
  router
})
