<template lang="pug">

  #Vokedex
    .list
      ul
        li.li(v-for="(poke, index) in list" @click="get_poke_info(poke.url)") \#{{ formatPokeID(index) }}: {{poke.name}}
    .display
      .wrapper(v-if="current_pokemon")
        .avatar
          img(:src="current_pokemon.sprite")
        .entry {{current_pokemon.dex_entry}}
        br
        .stats
          .name name: {{current_pokemon.name}}
          .id id: {{current_pokemon.id}}
          .baseXP baseXP: {{current_pokemon.baseXP}}
          .height height: {{current_pokemon.height / 10}} m
          .weight weight: {{current_pokemon.weight / 10}} kg
          .types
            ul
              li(v-for="(type, index) in current_pokemon.types") Type {{index + 1}}: {{type.type.name}}

</template>

<script>
/* eslint-disable */
import _ from 'lodash'
import axios from 'axios'

const _BASE_URL = 'https://pokeapi.co/api/v2'

export default {
  name: 'Vokedex',
  methods: {
    // initialize app
    initialize () {
      this.$store.dispatch('clear_state')
      this.get_pokemon_list()
    },
    get_pokemon_list () {
      axios.get(`${_BASE_URL}/pokemon-species`)
        .then(response => {
          this.get_pokemon(response.data.count)
        })
    },
    get_pokemon (count) {
      axios.get(`${_BASE_URL}/pokemon-species?limit=${count}`)
        .then(response => {
          this.$store.dispatch('update_list', response.data.results)
        })
    },
    get_poke_info (url) {
      // extract id from pokemon-species url
      // --> create url to pokemon resource for stats
      let id = url.match(/(\/\d{1,3}\/)/g)[0].replace(/\/*\//g, '').toString()
      let poke_url = `${_BASE_URL}/pokemon/${id}`
      let poke = {}

      // get dex flavor text
      axios.get(url)
        .then(response => {
          let dex_entry = _.find(response.data.flavor_text_entries, text => {
            return text.language.name === "en"
          })
          return dex_entry.flavor_text
        })
        // build current pokemon data
        .then(dex_entry => {
          axios.get(poke_url)
            .then(response => {
              poke.id = response.data.id
              poke.name = response.data.name
              poke.height = response.data.height
              poke.weight = response.data.weight
              poke.baseXP = response.data.base_experience
              poke.sprite = response.data.sprites.front_default
              poke.types = response.data.types
              poke.dex_entry = dex_entry
              this.$store.dispatch('update_current_poke', poke)
            })
        })
    },
    // format poke-id
    formatPokeID (id) {
      return (id + 1).toString().padStart(2, '0')
    }
  },
  mounted () {
    this.initialize()
  },
  computed: {
    list () {
      return this.$store.state.pokelist
    },
    current_pokemon () {
      if(!_.isEmpty(this.$store.state.current_poke)) {
        return this.$store.state.current_poke
      }
    }
  }
}
</script>

<style lang="scss">
  #Vokedex {
    // display: flex;
  }

  .list {
    max-height: 300px;
    overflow: auto;
  }

  .li {
    cursor: pointer;
  }
</style>
