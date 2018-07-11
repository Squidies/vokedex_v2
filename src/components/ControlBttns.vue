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
@import '../static/__vars.scss';
@import '../static/__mixins.scss';

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
</style>
