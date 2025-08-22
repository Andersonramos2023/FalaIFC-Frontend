<script setup>
import { useRoute} from 'vue-router'
import { computed, ref } from 'vue'
import router from '@/router'

const route = useRoute()
const pesquisa = ref("")
const indexAtivo = ref(-1)

const navegacao = ref([
  { id: "1", nome: "Matriz", rota: '/matrizMatematica' },
  { id: "2", nome: "filosofia", rota: '/filosofia' },
  {id:"3", nome:"fisica", rota:'/FisicaInfo'},
])

const resultados = computed(() => {
  const termo = pesquisa.value.trim().toLowerCase()

  if (!termo) return []
  return navegacao.value.filter(o =>
    o.nome.toLowerCase().includes(termo)
  )
})
function abrirNavegacao(navegacao){
  if (!navegacao) return
  router.push(navegacao.rota)
  pesquisa.value = ""
  indexAtivo.value = -1
}
function navegar(e) {
  if (e.key === "ArrowDown") {
    e.preventDefault()
    indexAtivo.value = (indexAtivo.value + 1) % resultados.value.length
  } else if (e.key === "ArrowUp") {
    e.preventDefault()
    indexAtivo.value = (indexAtivo.value - 1 + resultados.value.length) % resultados.value.length
  } else if (e.key === "Enter") {
    e.preventDefault()
    if (indexAtivo.value >= 0) {
      abrirNavegacao(resultados.value[indexAtivo.value])
    } else if (resultados.value.length > 0) {
      abrirNavegacao(resultados.value[0]) // pega o primeiro automaticamente
    }
  }
}
</script>

<template>

  <header class="header">

<RouterLink to="/informatica" class="logo">


  <div>
    <h1 >Fala<span>IFC</span></h1>
  </div>

</RouterLink>

    <div class="pesquisa">
        <i class="bi bi-search"></i>
      <input type="text"
      v-model="pesquisa"
      placeholder="Pesquisar..."
      @keydown="navegar"
       />
    </div>


<div class="resultados" v-if="resultados.length">
  <ul>
    <li v-for="(item, index) in resultados"
        :key="item.id"
        :class="{ ativo: index === indexAtivo }"
        @click="abrirNavegacao(item)">
      {{ item.nome }}
    </li>
  </ul>
</div>
<nav class="menu">

  <ul>

    <li :class="{ ativo: route.path === '/informatica' }">

  <RouterLink to="/informatica">Início</RouterLink>
</li>

<li
:class="{ ativo: route.path === '/DireitosAutoraisInfo' }">

  <RouterLink to="/DireitosAutoraisInfo">
    Direitos autorais
  </RouterLink>

</li>

<li
:class="{ ativo: route.path === '/PoliticaDePrivacidadeInfo' }">

  <RouterLink to="/PoliticaDePrivacidadeInfo">
    Política de Privacidade
  </RouterLink>
</li>

  </ul>
</nav>


  </header>

</template>
<style scoped>


.header {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  height: 70px;
  color: white;
  margin-top: 3vw;
  text-decoration: none;


}

.logo {

  margin-left: 10vw;
  font-size: 17px;
  color: #fff;
  text-decoration: none;

  cursor: pointer;

  & span {
    color: #0090E3;
    font-size: 15px;
  }

}



input {
outline: none; /*remove o contorno padrão do input*/
  padding: 8px 12px;
  border-radius: 8px;
  margin-left: 10vw;
  width: 16.9vw;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: black;
  color: darkgrey;
}
.pesquisa {
  position: relative;
  display: inline-block;
}

.pesquisa i {

  position: absolute;
  left: 26.35vw;
  top: 1.1vw;
  border:2.5px solid #CCC;
  background-color: #000;
  border-radius: 0 8px 8px 0;
  padding: 4px 10px 0px 12px;
  transform: translateY(-50%);
  color: gray;
  cursor: pointer;

}

.menu ul {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 10vw;
  padding: 0;
}

.menu ul li a {

  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: .2s;

}.menu ul li.ativo a {
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  padding: 10px 10px;
}


.menu ul li a:hover {
  display: flex;
  background-color: #fff;
  color: #000;
  padding: 10px 10px;
  font-size: 19px;
  border-radius: 10px;
}
.resultados {
  position: absolute;
  background: black;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 15.9vw;
  margin-left: 415px;
  margin-top:120px;
  color: white;
  z-index: 999;
}

.resultados ul {

  list-style: none;
  margin: 0;
  padding: 0;
}

.resultados li {
  padding: 8px 12px;
  cursor: pointer;
}

.resultados li:hover,
.resultados li.ativo {
  background-color: #0090E3;
  color: black;
}

</style>
