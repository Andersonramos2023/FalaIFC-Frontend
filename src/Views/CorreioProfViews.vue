<script setup>
import { ref } from 'vue';

const ativo = ref(false)

function toggleConteudo() {
  ativo.value = !ativo.value
}
</script>

<template>
  <section>
    <hr />

    <div class="container" :class="{ ativo: ativo }">
      <div class="seta-toggle" @click="toggleConteudo">
          Conteúdos Salvos   COREIOOONPROFCVVVCVCVCVCV<span class="seta">▶</span>
      </div>

      <div class="conteudo">
        <p>Este é o conteúdo que aparece ao clicar na seta.</p>
        <p>Você pode colocar qualquer informação aqui separadamente.</p>
      </div>
    </div>

    <h1>Opa!</h1>
  </section>
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
  border: 2px solid #6A00FF;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-align: center;
  background-color: transparent;

}

.seta-toggle:hover {
  background-color: #5000cc;
}

.conteudo {
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #5000cc;
  border-radius: 10px;
  color: #f0f0f0;
  display: none;


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
