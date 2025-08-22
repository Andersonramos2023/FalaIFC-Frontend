<script setup>
import { ref } from 'vue';
import HomeInfoViews from '../homeInfoViews.vue';
const ativo = ref(false)

function toggleConteudo() {
  ativo.value = !ativo.value
}
</script>

<template>


  <HomeInfoViews>


  <section>
    <hr />

    <div class="container" :class="{ ativo: ativo }">

      <div class="seta-toggle" @click="toggleConteudo">
          Conteúdos Salvos <span class="seta">▶</span>

      </div>

      <div class="conteudo">
        <p>O conteúdo que você salvou aqui no momento.</p>
      </div>
    </div>

    <h1>Opa!</h1>
  </section>
  </HomeInfoViews >
</template>

<style scoped>

.container {
  width: 300px;
  margin: 40px auto;
  margin-left: 10vw;
  font-family: Arial, sans-serif;
}

.seta-toggle {
  cursor: pointer;
  font-size: 20px;
  border: 2px solid #0090E3;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-align: center;
  background-color: transparent;

}

.seta-toggle:hover {
  background-color: #0090E3;
}

.conteudo {
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #0090E3;
  border-radius: 10px;
  color: #f0f0f0;
  display: none;
  font-size: 15px;


}

.ativo .conteudo {
  display: block;
}

.seta {
  display: inline-block;
  transition: transform 0.3s ease;
}

.ativo .seta {
  transform: rotate(90deg);
}
</style>
