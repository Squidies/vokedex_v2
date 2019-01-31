<template lang="pug">
.list
  .loading(v-if="!listexists") ...loading
  .emptylist(v-else-if="list.length === 0 && listexists") Sorry, no Pokémon found.
  form.pokelist(v-else tabindex="4")
    div(v-for="(poke) in list")
      input(type="radio"
            name="pokemon"
            :id="`id_${poke.id}`"
            @keyup.enter.prevent.stop="get_poke_info(poke.url, poke.id)")
      label(:for="`id_${poke.id}`" @click="get_poke_info(poke.url, poke.id)") \#{{ formatPokeID(poke.id) }}: {{poke.name | capitalize}}
  .search
    input.pokesearch(type="text" v-model="searchString" placeholder="Search by Name or PokéID" tabindex="2")
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
    listexists () {
      return this.$store.state.pokelistexists
    },
    list () {
      // - strip spaces from input and check
      // against current pokelist. remove entries as
      // needed

      let pokelist = this.$store.state.pokelist
      let string = _.trim(this.searchString)

      return pokelist.filter(pokelist => {
        if (isNaN(this.searchString)) {
          // - search by name
          return pokelist.name.toLowerCase().includes(string.toLowerCase())
        } else if (!isNaN(this.searchString)) {
          // - search by id
          return pokelist.id.replace(/^0+/, '').includes(string.replace(/^0+/, ''))
        } else {
          // - else return the whole list
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

  .loading,
  .emptylist,
  form {
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

.pokelist {
  label {
    cursor: pointer;
  }
}

.search {
  display: flex;
  width: 300px;
  justify-content: space-between;
  border: 4px solid $listouter;
  border-top: 0;
  border-radius: 0 0 8px 8px;
  background: $color;

  input:focus {
    z-index: 1001;
  }
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
  z-index: 1000;
}
</style>
