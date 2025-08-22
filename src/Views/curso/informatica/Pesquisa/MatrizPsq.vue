
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
  <h1>Matriz</h1>

<p>O que é uma Matriz?
<strong>Uma matriz é uma forma organizada de representar números em linhas e colunas.</strong> Imagine uma tabela com várias "caixinhas", onde cada número ocupa uma posição específica. Essa disposição ajuda a resolver problemas de matemática e também <strong> é muito usada em áreas como física, economia, estatística e programação.</strong>
Estrutura de uma Matriz
As matrizes são representadas com colchetes e têm um formato específico:  <br> |123 ||456|  1 & 2 & 3 \\ 4 & 5 & 6 |142||789|
Nesse exemplo,<strong>temos uma matriz com 2 linhas e 3 colunas. Dizemos que é uma matriz 2x3 (lê-se "duas por três").</strong>

</p>
<p>

Os números dentro da matriz são chamados de elementos.
A posição de cada elemento é determinada pela linha e pela coluna em que ele se encontra.

Tipos de Matrizes
Existem vários tipos de matrizes, entre eles:

<strong>Matriz linha: possui apenas uma linha (ex: 1x3).

Matriz coluna: possui apenas uma coluna (ex: 3x1).

Matriz quadrada: possui o mesmo número de linhas e colunas (ex: 3x3).</strong><br>

Matriz identidade: é uma matriz quadrada em que os elementos da diagonal principal são 1, e os outros são 0.

<br>
Matriz nula: todos os elementos são zero.

</p>
<p>
Operações com Matrizes
Algumas operações básicas que podem ser feitas com matrizes incluem:

Adição e Subtração: só podem ser feitas entre matrizes do mesmo tamanho, somando ou subtraindo os elementos correspondentes.
Multiplicação por número (escalar): cada elemento da matriz é multiplicado por esse número.
Multiplicação de matrizes: é possível multiplicar duas matrizes, mas existe uma regra: o número de colunas da primeira deve ser igual ao número de linhas da segunda.

Para que servem as Matrizes?
As matrizes são ferramentas matemáticas muito poderosas. Elas são usadas em:

Resolução de sistemas lineares
Transformações geométricas
Programação de computadores
Análise de dados
Criptografia
Gráficos em 3D e jogos digitais
</p>
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


  & p {

    font-size: 1.2vw;
    margin-bottom: 20px;
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
