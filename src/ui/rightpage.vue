<template lang="pug">
.right
  .topcurve
  .infoDisplay
    dex-list
  .keyboard
    //- generate 10 keys for keyboard
    - for(var i = 10; i > 0; i--)
      .key
  .ctrlbttns
    .topbttns
      .dots
        .dot
        .dot
      .startselect
        .bttn.start
        .bttn.select
    .centerbttns
      .dirbttns
        .lft.bttn
        .rgt.bttn
      .cbttn
    .bottombttns
      .bttn
      .bttn
</template>

<script>
import DexList from '../components/DexList'

export default {
  name: 'RightPage',
  components: {
    'dex-list': DexList
  }
}
</script>

<style lang="scss">
@import '../static/__vars.scss';

.closed .right {
  visibility: hidden;
}

.right {
  position: relative;
  width: 350px;
  height: 450px;
  border-radius: 0 0 $dexradius 0;
  background: $dexbg;
  box-shadow: $shadow;
  z-index: 777;

  .topcurve {
    position: absolute;
    top: -50px;
    left: 0;
    width: 250px;
    height: 150px;
    background: $dexbg;
    border-radius: 0 160px 0 0;

    &:after {
      position: absolute;
      right: -165px;
      top: -35px;
      display: block;
      width: 250px;
      height: 100px;
      background: $color;
      border-radius: 0 0 0 $dexradius_lg;
      content: '';

    }
  }

  // -- INFO DISPLAY -- //
  .infoDisplay {
    position: relative;
    margin: 45px auto 0;
  }

  // -- KEYBOARD -- //
  .keyboard {
    display: flex;
    flex-wrap: wrap;
    width: 275px;
    margin: 20px auto;
  }

  .key {
    width: 50px;
    height: 35px;
    background: $dexbgalt;
    border-radius: 4px;
    margin: 2px;
    box-shadow: $keyshadow;

    &:active {
      box-shadow: none;
    }
  }

  // -- CTRL BTTNS -- //
  .ctrlbttns {
    width: 250px;
    margin: auto;
  }

  .topbttns {
    display: flex;
    justify-content: space-between;
  }

  .dots {
    display: flex;
    justify-content: space-between;
    width: 50px;
  }

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: $dexbgdark;
  }

  .centerbttns {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .dirbttns {
    display: flex;

    .bttn {
      width: 40px;
      height: 30px;
      border-radius: 8px;
      margin-right: 2px;
      background: $displayouter;
    }
  }

  .cbttn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: $dexyellow;
  }

  .bottombttns {
    display: flex;
    justify-content: center;
    margin-top: 18px;

    .bttn {
      width: 100px;
      height: 45px;
      border-radius: 8px;
      background: $dexbgalt;

      &:nth-of-type(1) {
        transform: translateX(-8px);
      }

      &:nth-of-type(2) {
        transform: translateX(8px);
      }
    }
  }
}

.original .right {
  background: $orgbg;
  box-shadow: $orgshadow;

  .topcurve {
    background: $orgbg;
  }
}

.pikadex .right {}

.squirtlex .right {}

</style>
