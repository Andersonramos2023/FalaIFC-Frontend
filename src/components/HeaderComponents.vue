<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>

  <header class="header">

<RouterLink to="/" class="logo">


  <div>
    <h1 >Fala<span>IFC</span></h1>
  </div>

</RouterLink>

    <div class="pesquisa">
        <i class="bi bi-search"></i>
      <input type="text" placeholder="Pesquisar..." />
    </div>

<nav class="menu">

  <ul>

    <li :class="{ ativo: route.path === '/' }">

  <RouterLink to="/">Início</RouterLink>
</li>

<li :class="{ ativo: route.path === '/DireitosAutorais' }">

  <RouterLink to="/DireitosAutorais">Direitos autorais</RouterLink>
</li>

<li :class="{ ativo: route.path === '/PoliticaDePrivacidade' }">
  <RouterLink to="/PoliticaDePrivacidade">Política de Privacidade</RouterLink>
</li>

  </ul>
</nav>


    <div class="login" >
  <RouterLink to="/Login">Login?</RouterLink></div>

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
    color: #6A00FF;
    font-size: 15px;
  }

}



input {

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

.login a{
  color: #fff;
  padding: 10px 20px;
  border: 2px solid #6A00FF;

  border-radius: 20px;
  text-decoration: none;

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
  background-color: #fff;
  color: #000;
  padding: 10px 10px;


  border-radius: 10px;
}

</style>
