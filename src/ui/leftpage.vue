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

  .topcurve {
    position: absolute;
    width: 240px;
    height: 125px;
    background: $dexbgdark;
    border-radius: $dexradius 0 120px;
    box-shadow: $shadow;
  }

  // -- DISPLAY -- //
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

  // -- CONTROL BUTTONS -- //
  .ControlBttns {
    position: relative;
    display: flex;
    align-items: center;
    width: 380px;
    height: 110px;
    justify-content: space-around;
  }

  .leftbttn {
    @include flx_cc;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $dexbgalt;
    transform: translate(20px, -5px);
    box-shadow: $keyshadow;
    cursor: pointer;

    &:active {
      box-shadow: none;
    }
  }

  .magzoom {
    position: relative;
    width: 16px;
    height: 16px;
    border: 3px solid $color;
    border-radius: 50%;
    transform: translate(0px, -5px);

    &:after {
      display: block;
      width: 4px;
      height: 10px;
      background: $color;
      border-radius: 2px;
      transform: translate(10px, 8px) rotate(135deg);
      content: '';
    }

    &.in:before,
    &.out:before {
      display: block;
      position: absolute;
      font-size: 2rem;
    }

    &.in:before {
      transform: translate(-5px, -2px);
      content: '-'
    }
    &.out:before {
      font-size: 1.33rem;
      transform: translate(-5px, 7px);
      content: '+'
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 75px;
    margin-top: 20px;
  }

  .pokeid {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 60px;
    border-radius: 8px;
    margin-top: 8px;
    background: $dexbgalt;

    .id {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      margin: 16px;
      background: $color;
      color: $bg;
      font-family: $mono;
      font-size: 30px;
    }
  }

  .dpad {
    width: 30px;
    height: 90px;
    background: $bg;
    border-radius: 8px;
    cursor: pointer;

    &:after {
      display: block;
      width: 30px;
      height: 90px;
      background: $bg;
      border-radius: 8px;
      transform: rotate(90deg);
      content: '';
    }
  }
}
</style>
