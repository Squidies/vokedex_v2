<template lang="pug">
#Vokedex.Dex(:class="[{closed: !hasPower}, theme]")
  left-page
  hinge
  right-page
  theme-switcher
</template>

<script>
/* eslint-disable */
import _ from 'lodash'
import axios from 'axios'

import leftPage from './ui/leftpage'
import Hinge from './ui/hinge'
import rightPage from './ui/rightpage'
import ThemeSwitcher from './components/ThemeSwitcher'

const _BASE_URL = 'https://pokeapi.co/api/v2'

export default {
  name: 'Vokedex',
  components: {
    'left-page': leftPage,
    'hinge': Hinge,
    'right-page': rightPage,
    'theme-switcher': ThemeSwitcher
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

          // update new pokelist to data store
          this.$store.dispatch('update_list', list)
        })
    }
  },
  computed: {
    hasPower () {
      return this.$store.state.power
    },
    theme () {
      return this.$store.state.theme
    }
  }
}
</script>

<style lang="scss">
@import 'static/__vars.scss';
@import 'static/__mixins.scss';

body {
  @include flx_cc();
  background: $color;
  color: $color;
  font-family: $sans;
}

*:focus {
  box-shadow: 0 0 3px 3px $outline;
}

.Dex {
  position: relative;
  display: flex;
  align-items: flex-end;
  // opacity: 0.3;

  // -- start/select buttons for left and right pages

  .startselect {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 130px;

    .bttn {
      width: 55px;
      height: 10px;
      border-radius: 4px;
      box-shadow: 0 0 3px $black;
      background: $vuegreendark;
    }
  }
}
</style>
