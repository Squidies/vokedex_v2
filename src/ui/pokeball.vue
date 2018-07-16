<template lang="pug">
.pokeball
</template>

<style lang="scss">
@import '../static/__vars.scss';
@import '../static/__mixins.scss';

.pokeball {
  @include flx_cc();
  width: 80px;
  height: 80px;
  margin: 4px;
  border-radius: 50%;
  box-shadow: 0 0 2px $listouter;
  background: $pokeball;
  transform: rotate(15deg);

  &:after {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid $dexbgalt;
    background: white;
    content: '';
  }

  &.searching {
    animation: spin 1.5s ease-out infinite;
  }
}

@keyframes spin {
  from {
    transform: rotate(15deg);
  }
  to {
    transform: rotate(375deg);
  }
}
</style>
