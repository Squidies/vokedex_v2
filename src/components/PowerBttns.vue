<template lang="pug">
.top
  .topcurve
  .Pwrbttns
    #Pwr.Pwr(title="Power" @click="togglePower" @keyup.enter="togglePower" tabindex="1") Power
      .bttn
    .Pwrlights
      .pwr_low
      .pwr_med
      .pwr_hgh
</template>

<script>
export default {
  name: 'PowerBttns',
  methods: {
    togglePower () {
      this.$store.dispatch('toggle_power')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../static/__vars.scss';
@import '../static/__mixins.scss';
// -- PWR BUTTONS -- //
.Pwrbttns {
  position: relative;
  width: 400px;
  height: 85px;
  display: flex;
  background: $dexbgdark;
  border-radius: $dexradius 0 0;
  // overflow: hidden;

  .Pwrlights {
    display: flex;
    margin-top: 15px;
  }

  // other part of topcurve
  &:after {
    display: block;
    width: 240px;
    height: 100px;
    background: $dexbg;
    background: linear-gradient(to right, $dexbg 0%, $dexbg 210px, transparent 210px, transparent);
    content: '';
    right: -30px;
    position: absolute;
    top: 50px;
    border-radius: $dexradius_lg 0 0 0;
  }
}

.Pwr {
  @include flx_cc;
  width: 80px;
  height: 80px;
  background: linear-gradient(145deg, rgb(53, 73, 94), rgb(28, 38, 49)), $dexbgalt;
  border: 4px solid $white;
  border-radius: 50%;
  margin: 15px;
  font-family: $mono;
  cursor: pointer;
  outline: none;

  &:active {
    background: $dexbgalt;
  }
}

[class*="pwr"] {
  width: 20px;
  height: 20px;
  background: green;
  border-radius: 50%;
  margin-right: 8px;

  &[class*="low"] {
    background: $dexred;
  }

  &[class*="med"] {
    background: $dexyellow;
  }

  &[class*="hgh"] {
    background: $dexgreen;
  }
}
</style>
