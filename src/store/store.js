import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'

Vue.use(Vuex)

const state = {
  pokelist: [],
  current_poke: {}
}

const mutations = {
  CLEAR_STATE (state) {
    state.pokelist = []
  },
  UPDATE_LIST (state, list) {
    state.pokelist = list
  },
  UPDATE_CURRENT_POKE (state, poke) {
    state.current_poke = poke
  }
}

const actions = {
  clear_state ({commit}) {
    commit('CLEAR_STATE')
  },
  update_list ({commit}, list) {
    commit('UPDATE_LIST', list)
  },
  update_current_poke ({commit}, poke) {
    commit('UPDATE_CURRENT_POKE', poke)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
