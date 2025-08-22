<script setup>

import { ref } from 'vue';
import HomeAgroViews from '../HomeAgroViews.vue';

const ativo = ref(false)
const anoSelecionado = ref (null)
const confirmado = ref()



function toggleConteudo() {
ativo.value = !ativo.value
}

function selecionarAno(ano){
anoSelecionado.value = ano
}
function confirmarTudo(tudo){
  confirmado.value = tudo

   setTimeout(() => {
    confirmado.value = false
  }, 60000)
}
</script>

<template>

<HomeAgroViews>

  <main>
    <section>
      <nav>
        <div class="bloco-geral">
            <div class="curso">
          <form action="#">
            <label>Matrícula:</label>

            <div class="mtr">
              <input type="text" placeholder="Informe seu Matrícula" />
            </div>
            <label>Turma:</label>
            <div class="turma"> <input type="text" placeholder="Informe sua Turma" /> </div>

             <label>Nome:</label>
            <div class="name-aluno">
              <input type="text" placeholder="Informe seu Nome" />
              </div>
                  </form>
                   </div>

                   <div class="cnt-curso">
                     <div class="container" :class="{ ativo: ativo }">
            <div class="seta-toggle" @click="toggleConteudo">
              Em que ano você esta? <span class="seta">▶</span>
      </div>

        <div class="conteudo" >
          <ul>
            <li @click="selecionarAno(1)">
              <span class="seta-ano"
              :class="{ativo: anoSelecionado === 1}">
              <ion-icon name="chevron-forward-outline">
                </ion-icon></span>

                <span class="txt-curso">1º ano Quimíca</span></li>

            <li @click="selecionarAno(2)"><span class="seta-ano"
              :class="{ativo: anoSelecionado === 2}"><ion-icon name="chevron-forward-outline"></ion-icon></span><span class="txt-curso">2º ano Quimíca</span></li>

            <li @click="selecionarAno(3)"><span class="seta-ano"
              :class="{ativo:anoSelecionado === 3}"><ion-icon name="chevron-forward-outline"></ion-icon></span><span class="txt-curso">3º ano Quimíca</span></li>
          </ul>
      </div>

    </div>
</div>
  </div>

  </nav>

   <button type="submit" @click="confirmarTudo(true)">
   {{ confirmado ? 'Confirmado!' : 'Confirmar?' }}
  </button>
  </section>
  </main>

  </HomeAgroViews>

</template>
<style scoped>

.bloco-geral{
  display: flex;
}
.curso {
  margin-top:3vw;
  margin-left: 11%;

  & input{
    margin-top: 10px;
  }

}

input{
  width: 160%;
  height: 45px;
  background: transparent;
  border: 1px solid #fff;
  padding: 15px;
  border-radius: 20px;
  color: #fff;
  margin-bottom:20px;
  }

  label{
    color: #fff;
    font-weight: 500;
    font-size: 1.3vw;
    margin-right: 70px;
  }


.container {
  width: 300px;
  margin: 80px auto;
  margin-left: 40vw;
  font-family: Arial, sans-serif;
}

.seta-toggle {
  cursor: pointer;
  font-size: 20px;
  border: 2px solid #00D95E	;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-align: center;
  background-color: transparent;

}

.seta-toggle:hover {
  background-color: #00D95E	;
}

.conteudo {
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px 20px 20px 20px ;
  border: 2px solid #00D95E	;
  border-radius: 10px;
  color: #f0f0f0;
  display: none;
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);


}
.txt-curso{
  transition: .8s ease-in-out;
}
 .txt-curso:hover {
border-bottom: 2px solid #00D95E	;
border-radius: 20px;
}
.ativo .conteudo {
  display: block;
}

.seta {
  display: inline-block;
  transition: transform 0.3s ease;
}

.ativo .seta {
  transform: rotate(90deg);
}
.conteudo{
  cursor: pointer;
}
.seta-ano {
  color: #aaa;
  transition:  .2s ease;
}

.seta-ano.ativo{
  color:#00D95E	;
}
.conteudo li{
  margin-top: 20px;
  align-items: center;
  padding-left: 20px;

  & span{
    padding: 10px;
  }
}
button{
  background: transparent;
  color: #fff;
  font-size:20px;
  border:2px solid #ccc;
  margin-left: 66%;
  position:relative;
  margin-top:10px;
  margin-bottom:30px;
  border-radius: 15px;
  height: 45px;
  width: 15%;
  cursor: pointer;
}

</style>
