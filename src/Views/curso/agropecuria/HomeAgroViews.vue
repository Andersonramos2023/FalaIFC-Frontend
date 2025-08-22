<script setup>
import FooterComponentsAgro from './ComponentAgro/FooterComponentsAgro.vue';
import HeaderComponentsAgro from './ComponentAgro/HeaderComponentsAgro.vue';
import MenuLateralComponentsAgro from './ComponentAgro/MenuLateralComponentsAgro.vue';

</script>

<template>
  <HeaderComponentsAgro />

  <div class="layout-Agro">

    <MenuLateralComponentsAgro />

    <main>
      <slot />
    </main>
  </div>
  <div class="circleFunfoAgro"></div>

  <FooterComponentsAgro />

</template>

<style scoped>
.layout-agro {
  display: flex;
}
main {
  flex: 1;
  padding: 20px;
}




</style>
