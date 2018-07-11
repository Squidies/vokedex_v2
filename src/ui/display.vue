<template lang="pug">
.Display
  .screen(:class="{'zoom': isZoomed}")
    dex-screen
  .bttnbars
    .displaybttn
    .speakerbars
      .spkrbrs
      .spkrbrs
</template>

<script>
import DexScreen from '../components/DexScreen'

export default {
  name: 'Display',
  components: {
    'dex-screen': DexScreen
  },
  computed: {
    isZoomed () {
      return this.$store.state.zoom
    }
  }
}
</script>

<style scoped lang="scss">
@import '../static/__vars.scss';
@import '../static/__mixins.scss';

.Display {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 325px;
  height: 225px;
  margin: 60px auto 0;
  border-radius: 18px;
  background: $displayouter;

  &:after {
    display: block;
    background: $dexbg;
    width: 75px;
    height: 30px;
    position: absolute;
    left: -25px;
    bottom: 0;
    transform: rotate(45deg);
    content: '';
  }
}

.screen {
  width: 300px;
  height: 150px;
  border: 3px solid $bg;
  border-radius: 18px;
  background: $color;
  margin-bottom: 8px;
  z-index: 1000;

  &.zoom {
    width: 400px;
    height: 200px;
    transform: scale(1.66);
  }
}

.bttnbars {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 275px;
  margin-left: 25px;
}

.displaybttn {
  width: 35px;
  height: 35px;
  background: $dexred;
  border-radius: 50%;
}

.speakerbars {
  display: flex;
}

.spkrbrs {
  width: 30px;
  height: 25px;
  background: $bar, $bar, $bar;
  background-size: 30px 2px, 30px 2px, 30px 2px;
  background-position: 0 20px, 0 10px, 0 0;
  background-repeat: no-repeat;
  margin: 0 8px 0 0;
}
</style>
