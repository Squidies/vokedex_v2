<template lang="pug">
.list
  ul
    li.li(v-if="list.length === 0") Sorry, no Pokémon found.
    li.li(v-else v-for="(poke) in list" @click="get_poke_info(poke.url, poke.id)") \#{{ formatPokeID(poke.id) }}: {{poke.name | capitalize}}
  .search
    input.pokesearch(type="text" v-model="searchString" placeholder="Search by Name or PokéID")
    button.btn.clear(@click="clearSearchInput") Clear
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

      this.$store.dispatch('is_searching')

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
        // finished searching
        .then(() => {
          this.$store.dispatch('done_searching')
        })
    },
    formatPokeID (id) {
      return (id).toString().padStart(2, '0')
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

<style lang="scss">
@import '../static/__vars.scss';

.list-scrollbar {
  width: 275px;
  height: 100px;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;

  ul {
    overflow: auto;
    width: 300px;
    height: 100px;
    padding: 4px 8px;
    margin: 0;
    border: 4px solid $listouter;
    border-bottom: 0;
    border-radius: 8px 8px 0 0;
    color: $bg;
    background: $color;
    list-style: none;
  }
}

.li {
  cursor: pointer;
}

.search {
  display: flex;
  width: 300px;
  justify-content: space-between;
  border: 4px solid $listouter;
  border-top: 0;
  border-radius: 0 0 8px 8px;
  background: $color;
}

.pokesearch {
  flex: 1;
  background: darken($color, 3%);
  padding: 8px;
  border: 0;
  color: $bg;
  font-size: 14px;
  border-radius: 0 0 0 4px;

  &::placeholder {
    color: $bg;
  }
}

.clear {
  appearance: none;
  border: 0;
  border-radius: 0 0 4px 0;
  background: $dexred;
  font-size: 14px;
  color: $color;
}
</style>
