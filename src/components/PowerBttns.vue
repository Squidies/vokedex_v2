<template lang="pug">
.top
  .topcurve
  .Pwrbttns
    button#Pwr.Pwr(title="Power" @click="togglePower") Power
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

.topcurve {
  position: absolute;
  width: 240px;
  height: 125px;
  background: $dexbgdark;
  border-radius: $dexradius 0 120px;
  box-shadow: $shadow;
}

.Pwrbttns {
  position: relative;
  width: 400px;
  height: 85px;
  display: flex;
  background: $dexbgdark;
  border-radius: $dexradius 0 0;

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
  color: $white;

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

// themes
.original {

  .topcurve {
    background: $orgbgdark;
    box-shadow: $orgshadow;
  }

  .Pwrbttns {
    background: $orgbgdark;

    &:after {
      background: linear-gradient(to right, $orgbg 0%, $orgbg 210px, transparent 210px, transparent);
    }
  }

  .Pwr {
    background: radial-gradient(rgb(169, 233, 247), rgb(29, 198, 236));
    color: $bg;
    border-color: white;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 1);
  }
}

.pikadex {

  .topcurve {
    background: $pikabgdark;
    box-shadow: $pikashadow;
  }

  .Pwrbttns {
    background: $pikabgdark;

    &:after {
      background: linear-gradient(to right, $pikabg 0%, $pikabg 210px, transparent 210px, transparent);
    }
  }
}

.squirtlex {

  .topcurve {
    background: $squirtlebgdark;
    box-shadow: $squirtshadow;
  }

  .Pwrbttns {
    background: $squirtlebgdark;

    &:after {
      background: linear-gradient(to right, $squirtlebg 0%, $squirtlebg 210px, transparent 210px, transparent);
    }
  }
}
</style>
