<template lang="pug">
.left
  power-bttns
  display
  control-bttns
</template>

<script>
import Display from './display'
import PowerBttns from '../components/PowerBttns'
import ControlBttns from '../components/ControlBttns'

export default {
  name: 'LeftPage',
  components: {
    'display': Display,
    'power-bttns': PowerBttns,
    'control-bttns': ControlBttns
  }
}
</script>

<style lang="scss">
@import '../static/__vars.scss';
@import '../static/__mixins.scss';

*:focus {
  box-shadow: 0 0 3px 3px $outline;
}

.closed .Display,
.closed .ControlBttns {
  visibility: hidden;
}

.left {
  position: relative;
  width: 400px;
  height: 550px;
  border-radius: $dexradius 0 0 $dexradius;
  background: $dexbg;
  box-shadow: $shadow;
  // overflow: hidden;
  z-index: 999;
}
</style>
