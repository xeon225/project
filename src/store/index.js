import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {},
    token: '',
    user_id: ''
  },
  getters: {
    user (state) {
      if (!_.size(state.user)) {
        var user = {}
        var u = JSON.parse(window.localStorage.getItem('user'))
        if (u) {
          user = u
        }
        localStorage.setItem('user', JSON.stringify(user))
        state.user = user // this.$store.commit("setUser", user);
        return user
      }
      return state.user
    },
    token (state) {
      return state.token
    }

  },
  mutations: {
    GET_USER: (state, user) => {
      var _user = _.merge({}, state.user)
      if (!_.size(_user)) {
        _user = {}
      }
      _.each(user, function (value, key) {
        _user[key] = value
      })
      sessionStorage.setItem('user', JSON.stringify(_user))
      state.user = _user
    },
    GET_TOKEN (state, token) {
      sessionStorage.setItem('token', token)
      state.token = token
    },
    LOGOUT (state) {
      sessionStorage.clear()
      state.user = {}
      state.token = null
    }
  }
})
