<script setup>
import HomeInfoViews from '../homeInfoViews.vue';
import { ref } from 'vue';

const ativo = ref(true)

function toggleConteudo() {
  ativo.value
}

const abasAlternativas = ref([

  { nome: 'Leitura', rota: '/FisicaInfo' },
  { nome: 'Vídeos', rota: '/videoInfo' },
  { nome: 'Atividade ', rota: '/FisicaAtividadeInfo' }
])


</script>

<template>
  <HomeInfoViews>

    <div class="matriz-info">

      <p>
        <span>1) Lei de Boyle (T constante) </span>
        Um gás está a P₁ = 2,0 atm ocupando V₁ = 5,0 L. Ele é comprimido para V₂ = 2,0 L (temperatura constante).
        Calcule P₂.
<pre>
        Fórmula:

        Pi Vi = Pf Vf

</pre>
      </p>
      <p>
       <span> 2) Lei de Charles (P constante) </span> <br>
Um balão tem V₁ = 3,0 L a T₁ = 300 K. Ao aquecer, vai para T₂ = 360 K (pressão constante).
Calcule V₂.
<pre>
  Fórmula:

  Vi / Ti = Vf / Tf
</pre>


      </p>
    </div>

    <div class="container" :class="{ ativo }">

      <div class="seta-togle" @click="toggleConteudo">
        <span>Escolha</span>

      </div>

      <div class="conteudo">
        <ul>
          <li v-for="aba in abasAlternativas" :key="aba.nome">
            <router-link :to="aba.rota">{{ aba.nome }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </HomeInfoViews>
</template>

<style scoped>
.container {
  width: 300px;
  margin: 40px auto;
  margin-left: 10vw;
  font-family: Arial, sans-serif;
  position: relative;
  bottom: 80%;
  left: 50%;
}

.matriz-info {
  padding-left: 10%;
  padding-right: 50%;


  & span{
    font-weight: 700;
   }

  & pre {
    margin-bottom: 30px;

  }

  & h2 {
    font-size: 20px;
  }
}

strong {
  color: #fff;
}

.container {
  width: 300px;
  margin: 40px auto;
  margin-left: 10vw;
  font-family: Arial, sans-serif;
}

.seta-togle {
  cursor: pointer;
  font-size: 20px;
  border: 2px solid #0090E3;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-align: center;
  background-color: transparent;

}

.conteudo {
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #0090E3;
  border-radius: 10px;
  display: none;
  font-size: 19px;
}

.conteudo li {
  margin-top: 10px;
  font-size: 19px;
  padding-left: 20px;

}

.conteudo ul li a {
  color: white !important;
  text-decoration: none !important;
  background: none !important;
}


.ativo .conteudo {
  display: block;
}
</style>
