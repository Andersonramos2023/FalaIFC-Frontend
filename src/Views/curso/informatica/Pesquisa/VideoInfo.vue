
<script setup>
import HomeInfoViews from '../homeInfoViews.vue';
import { ref}  from 'vue';

const ativo = ref(true)

function toggleConteudo(){
  ativo.value
}

const abasAlternativas = ref([

{ nome:'Leitura', rota:'/matrizMatematica'},
{ nome:'Vídeos', rota:'/videosInfo'},
{ nome:'Atividade', rota:'/AtividadeInfo'}
])


</script>

<template>
<HomeInfoViews>

  <div class="matriz-info"><div class="matriz-info">
  <iframe
    width="300"
    height="200"
    src="https://www.youtube.com/embed/lZ9onrdpusA?list=PLEfwqyY2ox868TPa8vjL-QPfQlmtqRGa5"
    title="Playlist de Matemática"
    frameborder="20"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
<iframe
  width="300"
  height="200"
  src="https://www.youtube.com/embed/kDr1CdPuVXo?list=PLGyv8aUrOlzA_xsEveyON086udN6WIga_"
  title="Playlist de Matemática"
  frameborder="20"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
<iframe
  width="300"
  height="200"
  src="https://www.youtube.com/embed/ktr4wfXi9xg?list=PLaKmzX_hXWkKUkIYwKXyg-_pqHe-27FAZ"
  title="Playlist de Matemática"
  frameborder="20"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

<iframe
  width="300"
  height="200"
  src="https://www.youtube.com/embed/HNpSOOhtqkA"
  title="Vídeo de Matemática"
  frameborder="20"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

</div>


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

& iframe {
margin-bottom: 30px;
margin-top: 30px;
}
}.container {
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
