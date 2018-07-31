<template lang="pug">
.themeswitch
  .theme
    input(type="radio" id="voketheme" name="theme")
    label Vokédex
  .theme
    input(type="radio" id="originredtheme" name="theme")
    label Original Red
  .theme
    input(type="radio" id="pikadex" name="theme")
    label Pikadex
  .theme
    input(type="radio" id="squirtletheme" name="theme")
    label Squirtadex
</template>

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
