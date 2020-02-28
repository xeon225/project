import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: window.sessionStorage.getItem('user')
  },
  mutations: {
    GET_USER: (state, data) => {
      state.user = data
      window.sessionStorage.setItem('user', data)
    }
  }
})
