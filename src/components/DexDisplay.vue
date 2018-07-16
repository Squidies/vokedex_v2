<template lang="pug">
.wrapper
  .splashscreen(v-if="!current_pokemon") Vokédex
    .pokeball
  .infoscreen(v-else)
    .pokeinfo
      .avatar
        img(:src="current_pokemon.sprite")
      .stats
        .name name: {{current_pokemon.name}}
        .id id: {{current_pokemon.id}}
        .baseXP baseXP: {{current_pokemon.baseXP}}
        .height height: {{current_pokemon.height / 10}} m
        .weight weight: {{current_pokemon.weight / 10}} kg
        .types
          ul
            li(v-for="(type, index) in current_pokemon.types") Type {{index + 1}}: {{type.type.name}}
    .entry {{current_pokemon.dexEntry}}
</template>

<script>
import _ from 'lodash'
// import { Scrolly, ScrollyViewport, ScrollyBar } from 'vue-scrolly'

export default {
  name: 'DexDisplay',
  computed: {
    current_pokemon () {
      if (!_.isEmpty(this.$store.state.current_poke)) {
        return this.$store.state.current_poke
      }
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
</style>
