import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: []
  },
  mutations: {
    SET_INVENTORY (state, payload) {
      state.inventory = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/inventories')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetch (context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/inventories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_INVENTORY', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    inventory (state) {
      return state.inventory
    }
  }
})
