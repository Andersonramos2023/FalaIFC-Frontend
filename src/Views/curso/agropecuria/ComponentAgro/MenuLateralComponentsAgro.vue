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
<nav :class="['menu-lateral-agro', { expandido: menuExpandido }]">

  <div class="circle-agro"></div>

  <div class="cabecalho-agro">

<div class="btm-expandir-agro" :class="{ ativo: menuExpandido }" @click="toggleMenu">
  <i class="bi bi-list"></i>
</div>


    <div class="logo-agro">
      <h1>Fala<span>IFC</span></h1>
    </div>
  </div>

      <ul class="lista">

        <li class="item-menu-agro" :class="{ ativo: route.path === '/ConteudoSalvoAgro' }">

          <RouterLink to="/ConteudoSalvoAgro">

            <span class="icon"><i class="bi bi-box2-heart-fill"></i></span>
            <span class="txt-link">Conteúdo salvo</span>

          </RouterLink>

        </li>

        <li class="item-menu-agro" :class="{ ativo: route.path === '/CorreioProfAgro' }">

          <RouterLink to="/CorreioProfAgro">

            <span class="icon"><i class="bi bi-envelope-fill"></i></span>
            <span class="txt-link">CorreioProf</span>

          </RouterLink>

       </li>

          <li class="item-menu-agro" :class="{ ativo: route.path === '/VerCursoAgro' }">

          <RouterLink to="/VerCursoAgro">

            <span class="icon"><i class="bi bi-mortarboard"></i></span>

            <span class="txt-link">Ver Curso</span>
          </RouterLink>
        </li>

        <li  class="item-menu-agro" :class="{ ativo: route.path === '/TempoDeEstudo' }">

          <RouterLink to="/TempoDeEstudo">
            <span class="icon"><i class="bi bi-alarm"></i></span>
            <span class="txt-link" id="tempo">Tempo de Estudo</span>
          </RouterLink>
        </li>


        <li  class="item-menu-agro" :class="{ ativo: route.path === '/' }">

          <RouterLink to="/">
            <span class="volt-agro"><ion-icon name="arrow-undo-outline"></ion-icon></span>
            <span class="txt-link" id="">Voltar para o iníco</span>
          </RouterLink>
        </li>
        <hr />
      </ul>

    </nav>
  </section>
</template>
<style setup>
.menu-lateral-agro {
  z-index: 2;
}
.menu-lateral-agro {
  width: 80px;
  height: 100%;
  background-color: #000;
  padding: 40px 0 40px 1%;
  box-shadow: 3px 0 0  #00D95E	;
  transition: all 0.45s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
}


.menu-lateral-agro:hover {
  width: 400px;
  padding-bottom: 10vw;

}

.menu-lateral-agro.expandido {
  width: 400px;
  padding-bottom: 10vw;
}

.btm-expandir-agro {
  padding-left: 10px;
}

.btm-expandir-agro>i {

  color:  #00D95E	;
  font-size: 30px;

  cursor: pointer;
}

.btm-expandir-agro:hover {

  color: #000;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 16px;

  /* transform: rotate(60deg) ; ou outro efeito, faz com que o obj gire o número determina de deg*/


}

.btm-expandir-agro.ativo {

  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 16px;


}

.btm-expandir-agro.ativo > i {
  color: #000;
}
ul {
  list-style-type: none;
  height: 100%;
}

ul li.item-menu-agro a {
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

ul li.item-menu-agro a .txt-link {
  color: #fff;
  margin-left: 10px;
  align-items: center;
}

ul li.item-menu-agro a .icon>i {
  font-size: 30px;
  margin-left: 10px;
}

ul li.item-menu-agro a:hover {
  background-color:  #00D95E	;
  color: #fff;
  border-radius: 10px;
}
.volt-agro{
  font-size: 35px;
  line-height: 40px;
  margin-left: 15px;
}

ul li.item-menu-agro.ativo a {
  background-color:  #00D95E	;


}

.item-menu-agro ul li.ativo {
  background-color:  #00D95E	;
  color: #fff;
}

ul li.item-menu-agro a:hover {
  background-color:  #00D95E	;
  color: #fff;
  border-radius: 10px;

}

hr {

  border-bottom: 2px solid #fff;
}

.cabecalho-agro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  z-index: 1;

  /* Garante que o cabeçalho fique acima do círculo */
  position: relative;
  /* Para posicionar o cabeçalho corretamente */

}

.logo-agro h1 {
  color: #fff;
  font-size: 25px;
  margin: 24px;

}

.logo-agro span {
  color:  #00D95E	;
  font-size: 15px;

}

.circle-agro {
  width: 450px;
  height: 400px;
  border-radius: 50%;
  background-color: #00D95E	;

  -webkit-mask-image: radial-gradient(circle, black 5%, transparent 50%);
  mask-image: radial-gradient(circle, black 5%, transparent 50%);

  transform: scale(4.5);
  position: absolute;
  top: 60%;
  right: 100%;

  bottom: -50%;
}
</style>
