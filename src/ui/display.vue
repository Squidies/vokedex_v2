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

</style>
