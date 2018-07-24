<template lang="pug">
.ControlBttns
  .leftbttn(@click="toggleZoom")
    span.magzoom.in(v-if="isZoomed")
    span.magzoom.out(v-else)
  .center
    .startselect
      .bttn.start
      .bttn.select
    .pokeid
      .id
        div(v-if="currentPokeID") \#{{currentPokeID}}
  .rightdpad
    .dpad(@click="toggleShowStats" title="Show PokéStats")
</template>

<script>
export default {
  name: 'ControlBttns',
  methods: {
    toggleZoom () {
      this.$store.dispatch('togglezoom')
    },
    toggleShowStats () {
      this.$store.dispatch('toggleshowstats')
    }
  },
  computed: {
    currentPokeID () {
      return this.$store.state.current_poke.id
    },
    isZoomed () {
      return this.$store.state.zoom
    }
  }
}
</script>

<style scoped lang="scss">

</style>
