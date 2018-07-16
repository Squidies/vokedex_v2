import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  pokelist: [],
  current_poke: {},
  power: false,
  searching: false
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
  },
  TOGGLE_POWER (state) {
    state.power = !state.power
  },
  IS_SEARCHING (state) {
    state.searching = true
  },
  DONE_SEARCHING (state) {
    state.searching = false
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
  },
  toggle_power ({commit}) {
    commit('TOGGLE_POWER')
  },
  is_searching ({commit}) {
    commit('IS_SEARCHING')
  },
  done_searching ({commit}) {
    commit('DONE_SEARCHING')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
