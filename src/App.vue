<template lang="pug">
  #Vokedex
    dex-list
    dex-display
</template>

<script>
/* eslint-disable */
import _ from 'lodash'
import axios from 'axios'
import DexList from './components/DexList'
import DexDisplay from './components/DexDisplay'

const _BASE_URL = 'https://pokeapi.co/api/v2'

export default {
  name: 'Vokedex',
  components: {
    'dex-list': DexList,
    'dex-display': DexDisplay
  },
  mounted () {
    // initialize app if pokelist is empty
    if (_.isEmpty(this.$store.state.pokelist)) this.initialize()
  },
  methods: {
    initialize () {
      this.$store.dispatch('clear_state')
      this.get_pokemon_list()
    },
    get_pokemon_list () {
      // get total pokecount
      axios.get(`${_BASE_URL}/pokemon-species`)
        .then(response => {
          this.get_pokemon(response.data.count)
        })
    },
    get_pokemon (count) {
      axios.get(`${_BASE_URL}/pokemon-species?limit=${count}`)
        .then(response => {
          // extract id from pokemon-species url and create new pokelist with id
          let list = _.map(response.data.results, result => {
            let id = result.url.match(/(\/\d{1,3}\/)/g)[0].replace(/\/*\//g, '').toString()
            return {
              name: result.name,
              url: result.url,
              id: id
            }
          })
          this.$store.dispatch('update_list', list)
        })
    }
  }
}
</script>

<style lang="scss">
  #Vokedex {
    // display: flex;
  }
</style>
