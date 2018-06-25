<template lang="pug">
  .list
    .search
      input.pokesearch(type="text" v-model="searchString" placeholder="Search by Name or PokéID")
      button.btn.clear(@click="clearSearchInput") clear
    ul
      li.li(v-if="list.length === 0") Sorry, no Pokémon found.
      li.li(v-else v-for="(poke) in list" @click="get_poke_info(poke.url, poke.id)") \#{{ formatPokeID(poke.id) }}: {{ capitalize(poke.name) }}
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
const _BASE_URL = 'https://pokeapi.co/api/v2'

export default {
  name: 'DexList',
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    get_poke_info (url, id) {
      let pokeURL = `${_BASE_URL}/pokemon/${id}`
      let poke = {}

      // get dex flavor text
      axios.get(url)
        .then(response => {
          let dexEntry = _.find(response.data.flavor_text_entries, text => {
            return text.language.name === 'en'
          })
          return dexEntry.flavor_text
        })
        // build current pokemon data
        .then(dexEntry => {
          axios.get(pokeURL)
            .then(response => {
              poke.id = response.data.id
              poke.name = response.data.name
              poke.height = response.data.height
              poke.weight = response.data.weight
              poke.baseXP = response.data.base_experience
              poke.sprite = response.data.sprites.front_default
              poke.types = response.data.types
              poke.dexEntry = dexEntry // returned from previous axios Promise

              this.$store.dispatch('update_current_poke', poke)
            })
        })
    },
    formatPokeID (id) {
      return (id).toString().padStart(2, '0')
    },
    capitalize (val) {
      return _.capitalize(val)
    },
    clearSearchInput () {
      this.searchString = ''
    }
  },
  computed: {
    list () {
      let pokelist = this.$store.state.pokelist

      return pokelist.filter(pokelist => {
        // - search by name
        // - search by id
        // - else return the whole list
        if (isNaN(this.searchString)) {
          return pokelist.name.toLowerCase().includes(this.searchString.toLowerCase())
        } else if (!isNaN(this.searchString)) {
          return pokelist.id.replace(/^0+/, '').includes(this.searchString.replace(/^0+/, ''))
        } else {
          return pokelist
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list {
  max-height: 300px;
  overflow: auto;
}

.li {
  cursor: pointer;
}
</style>
