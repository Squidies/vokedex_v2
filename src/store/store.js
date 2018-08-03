import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  pokelist: [],
  pokelistexists: false,
  current_poke: {},
  first_power_up: true,
  power: false,
  searching: false,
  zoom: false,
  showstats: false,
  theme: 'default'
}

const mutations = {
  CLEAR_STATE (state) {
    state.pokelist = []
  },
  UPDATE_LIST (state, list) {
    state.pokelist = list
  },
  LIST_EXISTS (state) {
    state.pokelistexists = true
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
  },
  FIRST_POWER_UP (state) {
    state.first_power_up = false
  },
  TOGGLE_ZOOM (state) {
    state.zoom = !state.zoom
  },
  TOGGLE_SHOW_STATS (state) {
    state.showstats = !state.showstats
  },
  CHANGE_THEME (state, theme) {
    state.theme = theme
  }
}

const actions = {
  clear_state ({commit}) {
    commit('CLEAR_STATE')
  },
  update_list ({commit}, list) {
    commit('UPDATE_LIST', list)
    commit('LIST_EXISTS')
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
  },
  first_power_up ({commit}) {
    commit('FIRST_POWER_UP')
  },
  togglezoom ({commit}) {
    commit('TOGGLE_ZOOM')
  },
  toggleshowstats ({commit}) {
    commit('TOGGLE_SHOW_STATS')
  },
  change_theme ({commit}, theme) {
    commit('CHANGE_THEME', theme)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
