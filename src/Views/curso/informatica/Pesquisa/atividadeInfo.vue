
<script setup>
import HomeInfoViews from '../homeInfoViews.vue';
import { ref}  from 'vue';

const ativo = ref(true)

function toggleConteudo(){
  ativo.value
}

const abasAlternativas = ref([

{ nome:'Leitura', rota:'/matrizMatematica'},
{ nome:'Vídeos', rota:'/videoInfo'},
{ nome:'Atividade', rota:'/AtividadeInfo'}
])


</script>

<template>
<HomeInfoViews>

  <div class="matriz-info">
<ul>
  <li>
    <h2> Atividade 1 — Soma de Matrizes
Dadas as matrizes:</h2>
<pre>

A = [2 -1]
    [-2 6]

B = [5 0]
    [4 3]

Calcule: A+BA + BA+B
</pre>
</li>

  <li>
    <h2> 2 — Multiplicação por Escalar:</h2>
<pre>

A=[3 -10]
  [4   3]

Calcule: 2 x A

A = [1 0] e B = [3 4]
    [2 1]       [0 5]

Calcule: A⋅BA  | BA⋅B
</pre>
</li>

  <li>
    <h2>3. Determinante de uma Matriz 2x2 Calcule o determinante da matriz:</h2>
<pre>
D = [4 3 ]
    [2 -1]

C = [4 -3]
    [2  1]
</pre>
</li>
</ul>
  </div>

<div class = "container" :class="{ativo }">

      <div class="seta-togle" @click="toggleConteudo">
         <span>Escolha</span>

      </div>

      <div class="conteudo">
        <ul>
          <li v-for="aba in abasAlternativas" :key="aba.nome">
            <router-link :to="aba.rota">{{  aba.nome }}</router-link>
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
  bottom:80%;
  left: 50%;
}

.matriz-info{
  padding-left: 10%;
  padding-right: 50%;


  & li {
 margin-bottom: 30px;
 border-bottom: 1px solid;
  }
  & pre{
margin-bottom: 30px;

  }
  & h2{
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
