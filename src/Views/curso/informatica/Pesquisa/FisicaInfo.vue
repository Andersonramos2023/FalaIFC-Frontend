
<script setup>
import HomeInfoViews from '../homeInfoViews.vue';
import { ref}  from 'vue';

const ativo = ref(true)

function toggleConteudo(){
  ativo.value
}

const abasAlternativas = ref([

{ nome:'Leitura', rota:'/FisicaInfo'},
{ nome:'Vídeos', rota:'/FisicavideoInfo'},
{ nome:'Atividade', rota:'/FisicaAtividadeInfo'}
])


</script>

<template>
<HomeInfoViews>

  <div class="matriz-info">
    <h2>Física Gases</h2>

    <p>
      Os gases são um dos estados físicos da matéria e possuem características bem diferentes dos sólidos e líquidos. Eles não têm forma nem volume fixos, adaptando-se sempre ao recipiente em que estão armazenados. Suas partículas estão muito afastadas umas das outras e em movimento constante e desordenado, o que explica por que os gases têm baixa densidade e podem ser comprimidos com facilidade.
    </p>
    <p>
O estudo dos gases é explicado pelas leis dos gases, que descrevem como pressão, volume e temperatura se relacionam:

Lei de Boyle: quando a temperatura é constante, se diminuímos o volume, a pressão aumenta (e vice-versa).

Lei de Charles: mantendo a pressão constante, o volume do gás cresce quando a temperatura aumenta.

Lei de Gay-Lussac: se o volume não varia, a pressão aumenta junto com a temperatura.

Essas três leis se unem na Equação Geral dos Gases, que resume o comportamento dos gases em diferentes situações do dia a dia.
    </p>
O estudo dos gases é essencial porque está presente em vários fenômenos da vida real: o funcionamento dos pulmões na respiração, a pressão atmosférica, o clima, o balão de ar quente, e até mesmo o funcionamento de motores e refrigeradores.
<p>
Assim, entender como os gases se comportam é fundamental não só para a Física, mas também para aplicações em Química, Biologia e Engenharia.
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
  bottom:75%;
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
  & p{
    margin-top: 20px;
  }
  & h2{
    font-size: 25px;
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
