<script setup>
import { ref } from 'vue';
import {  useRoute } from 'vue-router';

const route = useRoute();

const menuExpandido = ref(false)

function toggleMenu() {
  menuExpandido.value = !menuExpandido.value;
}


</script>
<template>

  <section>
<nav :class="['menu-lateral-info', { expandido: menuExpandido }]">

  <div class="circle-info"></div>

  <div class="cabecalho-info">

<div class="btm-expandir-info" :class="{ ativo: menuExpandido }" @click="toggleMenu">
  <i class="bi bi-list"></i>
</div>


    <div class="logo-info">
      <h1>Fala<span>IFC</span></h1>
    </div>
  </div>

      <ul>

        <li class="item-menu-info" :class="{ ativo: route.path === '/ConteudoSalvoInfo' }">

          <RouterLink to="/ConteudoSalvoInfo">

            <span class="icon"><i class="bi bi-box2-heart-fill"></i></span>
            <span class="txt-link">Conteúdo salvo</span>

          </RouterLink>

        </li>

        <li class="item-menu-info" :class="{ ativo: route.path === '/CorreioProfInfo' }">

          <RouterLink to="/CorreioProfInfo">

            <span class="icon"><i class="bi bi-envelope-fill"></i></span>
            <span class="txt-link">CorreioProf</span>

          </RouterLink>

       </li>

          <li class="item-menu-info" :class="{ ativo: route.path === '/VerCursoInfo' }">

          <RouterLink to="/VerCursoInfo">

            <span class="icon"><i class="bi bi-mortarboard"></i></span>

            <span class="txt-link">Ver Curso</span>
          </RouterLink>
        </li>

        <li  class="item-menu-info" :class="{ ativo: route.path === '/TempoDeEstudoInfo' }">

          <RouterLink to="/TempoDeEstudoInfo">
            <span class="icon"><i class="bi bi-alarm"></i></span>
            <span class="txt-link" id="tempo">Tempo de Estudo</span>
          </RouterLink>
        </li>


        <li  class="item-menu-info" :class="{ ativo: route.path === '/' }">

          <RouterLink to="/">
            <span class="volt-info"><ion-icon name="arrow-undo-outline"></ion-icon></span>
            <span class="txt-link" id="">Voltar para o iníco</span>
          </RouterLink>
        </li>
        <hr />
      </ul>

    </nav>
  </section>
</template>
<style setup>
.menu-lateral-info {
  z-index: 2;
}
.menu-lateral-info {
  width: 80px;
  height: 100%;
  background-color: #000;
  padding: 40px 0 40px 1%;
  box-shadow: 3px 0 0  #0090E3;
  transition: all 0.45s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}


.menu-lateral-info:hover {
  width: 400px;
  padding-bottom: 10vw;

}

.menu-lateral-info.expandido {
  width: 400px;
  padding-bottom: 10vw;
}

.btm-expandir-info {
  padding-left: 10px;
}

.btm-expandir-info>i {

  color:  #0090E3;
  font-size: 30px;

  cursor: pointer;
}

.btm-expandir-info:hover {

  color: #000;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 16px;

  /* transform: rotate(60deg) ; ou outro efeito, faz com que o obj gire o número determina de deg*/


}

.btm-expandir-info.ativo {

  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 16px;


}

.btm-expandir-info.ativo > i {
  color: #000;
}
ul {
  list-style-type: none;
  height: 100%;
}

ul li.item-menu-info a {
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  padding: 20px 12%;
  display: flex;
  margin-bottom: 40px;
  line-height: 40px;
  z-index: 1;
  position: relative;
  gap: 10px;
  border-radius: 10px;

}

ul li.item-menu-info a .txt-link {
  color: #fff;
  margin-left: 10px;
  align-items: center;
}

ul li.item-menu-info a .icon>i {
  font-size: 30px;
  margin-left: 10px;
}

ul li.item-menu-info a:hover {
  background-color:  #0090E3;
  color: #fff;
  border-radius: 10px;
}
.volt-info{
  font-size: 35px;
  line-height: 40px;
  margin-left: 15px;
}

ul li.item-menu-info.ativo a {
  background-color:  #0090E3;


}

.item-menu-info ul li.ativo {
  background-color:  #0090E3;
  color: #fff;
}

ul li.item-menu-info a:hover {
  background-color:  #0090E3;
  color: #fff;
  border-radius: 10px;

}

hr {

  border-bottom: 2px solid #fff;
}

.cabecalho-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  z-index: 1;

  /* Garante que o cabeçalho fique acima do círculo */
  position: relative;
  /* Para posicionar o cabeçalho corretamente */

}

.logo-info h1 {
  color: #fff;
  font-size: 25px;
  margin: 24px;

}

.logo-info span {
  color:  #0090E3;
  font-size: 15px;

}

.circle-info {
  width: 450px;
  height: 400px;
  border-radius: 50%;
  background-color: #0090E3;

  -webkit-mask-image: radial-gradient(circle, black 5%, transparent 50%);
  mask-image: radial-gradient(circle, black 5%, transparent 50%);

  transform: scale(4.5);
  position: absolute;
  top: 60%;
  right: 100%;

  bottom: -50%;
}
</style>
