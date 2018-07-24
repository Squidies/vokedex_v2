<template lang="pug">
.wrapper
  .splashscreen(v-if="!current_pokemon || searching") Vokédex
    pokeball(:class="{'searching': searching}")
  .infoscreen(v-else)
    .pokeinfo
      .avatar
        img(:src="current_pokemon.sprite")
      .name {{current_pokemon.name | capitalize}}
      .entry {{current_pokemon.dexEntry}}
      hr
      ul.stats
        li.baseXP BaseXP: {{current_pokemon.baseXP}} XP
        li.height Height: {{current_pokemon.height / 10}}m
        li.weight Weight: {{current_pokemon.weight / 10}}kg
        li.types
          ul
            li(v-for="(type, index) in current_pokemon.types") Type {{index + 1}}: {{type.type.name | capitalize}}
</template>

<script>
import _ from 'lodash'
import pokeball from '../ui/pokeball'

export default {
  name: 'DexDisplay',
  components: {
    'pokeball': pokeball
  },
  computed: {
    current_pokemon () {
      if (!_.isEmpty(this.$store.state.current_poke)) {
        return this.$store.state.current_poke
      }
    },
    searching () {
      return this.$store.state.searching
    }
  }
}
</script>

<style lang="scss">
@import '../static/__vars.scss';
@import '../static/__mixins.scss';

.wrapper {
  height: 115px;
  margin-top: 15px;
  overflow: auto;
  padding: 0 8px;
}

.splashscreen {
  @include flx_cc();
  width: 100%;
  height: 100%;
  color: $bg;
  overflow: hidden;
}

.pokeinfo {
  font-family: $mono;
}

.entry,
.stats {
  color: $bg;
}

.types ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.entry {
  font-size: 0.8rem;
}

.stats {
  list-style: none;
  margin: 0;
  padding: 0;
  color: lighten($bg, 50%);

  li {
    margin-left: 1rem;
  }

}

.name {
  font-size: 2rem;
  margin-left: 0;
  margin-bottom: 0.66rem;
  color: $bg;

}

.avatar {
  float: right;

  img {
    width: 120px;
    height: 120px;
  }
}
</style>
