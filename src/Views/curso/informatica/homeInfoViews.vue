<script setup>
import HeaderComponentsInfo from './ComponentsInfo/HeaderComponentsInfo.vue'
import FooterComponentsInfo from './ComponentsInfo/FooterComponentsInfo.vue'
import MenuLateralComponentsInfo from '@/Views/curso/informatica/ComponentsInfo/MenuLateralComponentsInfo.vue'
</script>

<template>
  <HeaderComponentsInfo />

  <div class="layout-info">

    <MenuLateralComponentsInfo />

    <main>
      <slot />
    </main>
  </div>
  <div class="circleFundoInfo"></div>

  <FooterComponentsInfo />

</template>

<style scoped>
.layout-info {
  display: flex;
}
main {
  flex: 1;
  padding: 20px;
}




</style>
