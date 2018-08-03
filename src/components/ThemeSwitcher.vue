<template lang="pug">
form.themeswitch
  .theme
    input(checked type="radio" name="theme" id="default" value="default" @click="change_theme")
    label(for="default") Default
  .theme
    input(type="radio" name="theme" id="original" value="original" @click="change_theme")
    label(for="original") Original
  .theme
    input(type="radio" name="theme" id="pikadex" value="pikadex" @click="change_theme")
    label(for="pikadex") Pikadex
  .theme
    input(type="radio" name="theme" id="squirtlex" value="squirtlex" @click="change_theme")
    label(for="squirtlex") Squirtledex
</template>

<script>

export default {
  methods: {
    change_theme (val) {
      this.$store.dispatch('change_theme', val.target.value)
    },
    current_theme (val) {
      console.log(val)
      return this.$store.state.theme === val.target.value
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
  color: $bg;
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
