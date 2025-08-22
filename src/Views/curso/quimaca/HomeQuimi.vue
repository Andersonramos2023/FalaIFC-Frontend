<script setup>
import MenuLateralComponentsQuimi from '@/Views/curso/quimaca/ComponentQuimi/MenuLateralComponentsQuimi.vue';
import  HeaderComponentsQuimi from '@/Views/curso/quimaca/ComponentQuimi/HeaderComponentsQuimi.vue';
import FooterComponentsQuimi from '@/Views/curso/quimaca/ComponentQuimi/FooterComponentsQuimi.vue';
</script>

<template>


  <HeaderComponentsQuimi />

  <div class="layout-Quimi">

    <MenuLateralComponentsQuimi />

    <main>
      <slot />
    </main>
  </div>
  
  <div class="circleFunfoQuimi"></div>

  <FooterComponentsQuimi />

</template>

<style scoped>
.layout-Quimi {
  display: flex;
}
main {
  flex: 1;
  padding: 20px;
}




</style>
