<template lang="pug">
form.themeswitch
  .theme
    input(type="radio" name="theme" id="default" value="default")
    label(for="default") Default
  .theme
    input(type="radio" name="theme" id="original" value="original" v-model="picked_theme")
    label(for="original") Original
  .theme
    input(type="radio" name="theme" id="pikadex" value="pikadex" v-model="picked_theme")
    label(for="pikadex") Pikadex
  .theme
    input(type="radio" name="theme" id="squirtlex" value="squirtlex" v-model="picked_theme")
    label(for="squirtlex") Squirtledex
</template>

<script>

export default {
  data () {
    return {
      picked_theme: 'Default'
    }
  },
  methods: {
    pick_theme (theme) {
      this.$store.dispatch('change_theme', theme)
    }
  },
  computed: {
    current_theme () {
      return this.$store.state.theme
    }
  }
}

</script>

<style lang="scss">
@import '../static/__vars.scss';

.themeswitch {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
}

.theme {
  color: $bg;
}

</style>

<!-- <style lang="scss" scoped>
  input[type="radio"] {
    display: none;
  }
</style> -->
