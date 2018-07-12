<template lang="pug">
  .wrapper(v-if="current_pokemon")
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

.wrapper {
  max-height: 100%;
  overflow: auto;
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
