<template lang="pug">
.left
  .topcurve
  .Pwrbttns
    #Pwr.Pwr(title="Power" @click="togglePower" @keyup.enter="togglePower" tabindex="1") Power
      .bttn
    .Pwrlights
      .pwr_low
      .pwr_med
      .pwr_hgh
  .Display
    .screen
      dex-display
    .bttnbars
      .displaybttn
      .speakerbars
        .spkrbrs
        .spkrbrs
  .ControlBttns
    .leftbttn
    .center
      .startselect
        .bttn.start
        .bttn.select
      .pokeid
        .id
          div(v-if="currentPokeID") \#{{currentPokeID}}
    .rightdpad
      .dpad
</template>

<script>
import DexDisplay from '../components/DexDisplay'

export default {
  name: 'LeftPage',
  components: {
    'dex-display': DexDisplay
  },
  methods: {
    togglePower () {
      this.$store.dispatch('toggle_power')
    }
  },
  computed: {
    currentPokeID () {
      return this.$store.state.current_poke.id
    }
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
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: $dexbgalt;
    transform: translate(20px, -5px);
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
