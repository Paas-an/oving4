import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    email: ''
  },
  mutations: {
    setName(state, name) {
      state.name = name
    },
    setEmail(state, email) {
      state.email = email
    }
  },
  actions: {
    submitForm({ commit }, payload) {
      commit('setName', payload.name)
      commit('setEmail', payload.email)
    }
  }
})