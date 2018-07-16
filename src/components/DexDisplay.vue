<template lang="pug">
.wrapper
  .splashscreen(v-if="!current_pokemon || searching") Vokédex
    pokeball(:class="{'searching': searching}")
  .infoscreen(v-else)
    .pokeinfo
      .stats
        .name Name: {{current_pokemon.name | capitalize}}
        .id ID: \#{{current_pokemon.id}}
        .baseXP BaseXP: {{current_pokemon.baseXP}} XP
        .height Height: {{current_pokemon.height / 10}}m
        .weight Weight: {{current_pokemon.weight / 10}}kg
        .types
          ul
            li(v-for="(type, index) in current_pokemon.types") Type {{index + 1}}: {{type.type.name | capitalize}}
      .avatar
        img(:src="current_pokemon.sprite")
    .entry {{current_pokemon.dexEntry}}
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
}

.pokeball {
  @include flx_cc();
  width: 80px;
  height: 80px;
  margin: 4px;
  border-radius: 50%;
  box-shadow: 0 0 2px $listouter;
  background: $pokeball;
  transform: rotate(15deg);

  &:after {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid $dexbgalt;
    background: white;
    content: '';
  }
}

.splashscreen {
  @include flx_cc();
  width: 100%;
  height: 100%;
  color: $bg;
}

.pokeinfo {
  display: flex;
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
</style>
