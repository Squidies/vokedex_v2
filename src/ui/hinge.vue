<template lang="pug">
  .hinge
</template>

<style lang="scss">
  @import '../static/__vars.scss';

  .hinge {
    width: 50px;
    height: 550px;
    background: $hng, $hng, $hng, $hingebg, $dexbg;
    background-size: 50px 50px, 50px 50px, 50px 50px, 100% 100%;
    background-position: 0 100%, 0 100px, 0 0, 0 0;
    background-repeat: no-repeat;
    box-shadow: $shadow;
    z-index: 888;
  }

</style>
