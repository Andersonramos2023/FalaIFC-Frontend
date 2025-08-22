<script setup>
import { ref } from 'vue';
import {  useRoute } from 'vue-route';


const route = useRoute();

const menuExpandido = ref(false)

function toggleMenu() {
  menuExpandido.value = !menuExpandido.value;
}


</script>
<template>

  <section>
<nav :class="['menu-lateral', { expandido: menuExpandido }]">

  <div class="circle"></div>

  <div class="cabecalho">

<div class="btm-expandir" :class="{ ativo: menuExpandido }" @click="toggleMenu">
  <i class="bi bi-list"></i>
</div>


    <div class="logo-ifc">
      <h1>Fala<span>IFC</span></h1>
    </div>
  </div>

      <ul>

        <li class="item-menu" :class="{ ativo: route.path === '/ConteudoSalvo' }">

          <RouterLink to="/ConteudoSalvo">
            <span class="icon"><i class="bi bi-box2-heart-fill"></i></span>
            <span class="txt-link">Conteúdo salvo</span>
          </RouterLink>

        </li>

        <li class="item-menu" :class="{ ativo: route.path === '/CorreioProf' }">

          <RouterLink to="/CorreioProf">
            <span class="icon"><i class="bi bi-envelope-fill"></i></span>
            <span class="txt-link">CorreioProf</span>
          </RouterLink>
        </li>

          <li class="item-menu" :class="{ ativo: route.path === '/VerCurso' }">
          <RouterLink to="/VerCurso">
            <span class="icon"><i class="bi bi-mortarboard"></i></span>
            <span class="txt-link">Ver Curso</span>
          </RouterLink>
        </li>

        <li  class="item-menu" :class="{ ativo: route.path === '/TempoDeEstudo' }">

          <RouterLink to="/TempoDeEstudo">
            <span class="icon"><i class="bi bi-alarm"></i></span>
            <span class="txt-link" id="tempo">Tempo de Estudo</span>
          </RouterLink>
        </li>
        <hr />
      </ul>

    </nav>
  </section>
<!-- </template>
<style setup>
.menu-lateral {
  z-index: 2;
}
.menu-lateral {
  width: 80px;
  height: 100%;
  background-color: #000;
  padding: 40px 0 40px 1%;
  box-shadow: 3px 0 0 #6A00FF;
  transition: all 0.45s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}


.menu-lateral:hover {
  width: 400px;
  padding-bottom: 10vw;

}

.menu-lateral.expandido {
  width: 400px;
  padding-bottom: 10vw;
}

.btm-expandir {
  padding-left: 10px;
}

.btm-expandir>i {

  color: #6A00FF;
  font-size: 30px;

  cursor: pointer;
}

.btm-expandir:hover {

  color: #000;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 16px;

  /* transform: rotate(60deg) ; ou outro efeito, faz com que o obj gire o número determina de deg*/


}

.btm-expandir.ativo {

  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 16px;


}

.btm-expandir.ativo > i {
  color: #000;
}
ul {
  list-style-type: none;
  height: 100%;
}

ul li.item-menu a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  padding: 20px 12%;
  display: flex;
  margin-bottom: 60px;
  line-height: 40px;
  z-index: 1;
  position: relative;
  gap: 10px;
  border-radius: 10px;

}

ul li.item-menu a .txt-link {
  color: #fff;
  margin-left: 10px;
  align-items: center;
}

ul li.item-menu a .icon>i {
  font-size: 30px;
  margin-left: 10px;
}

ul li.item-menu a:hover {
  background-color: #6A00FF;
  color: #fff;
  border-radius: 10px;
}


ul li.ativo a {
  background-color: #6A00FF;


}

.item-menu ul li.ativo {
  background-color: #6A00FF;
  color: #fff;
}

ul li.item-menu a:hover {
  background-color: #6A00FF;
  color: #fff;
  border-radius: 10px;

}

hr {

  border-bottom: 2px solid #fff;
}

.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  z-index: 1;

  /* Garante que o cabeçalho fique acima do círculo */
  position: relative;
  /* Para posicionar o cabeçalho corretamente */

}

.logo-ifc h1 {
  color: #fff;
  font-size: 25px;
  margin: 24px;

}

.logo-ifc span {
  color: #6A00FF;
  font-size: 15px;

}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #6A00FF;

  -webkit-mask-image: radial-gradient(circle, black 5%, transparent 50%);
  mask-image: radial-gradient(circle, black 5%, transparent 50%);

  transform: scale(4);
  position: absolute;
  top: 60%;
  right: 100%;

  bottom: -50%;
}
</style> -->
