<script setup>
import { ref } from "vue";
import HomeInfoViews from "../homeInfoViews.vue";

const tempo = ref("00:00:00");
const marcaLista = ref([]);
const alerta = ref("");
let intervalId = null;
let ms = 0;

function start() {
  if (intervalId) return; // evita múltiplos intervalos
  intervalId = setInterval(() => {
    ms += 10; // aumenta 10ms

    const horas = String(Math.floor(ms / 1000 / 60 / 60)).padStart(2, "0");
    const minutos = String(Math.floor((ms / 1000 / 60) % 60)).padStart(2, "0");
    const segundos = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
    const milisseg = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");

    tempo.value = `${horas}:${minutos}:${segundos}:${milisseg}`

    if (alert && `${horas}:${minutos}:${segundos}` === alerta.value){
      alert("Bora descansar?");
      alerta.value = "";
    }
  }, 10);
}

function pause() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  ms = 0;
  tempo.value = "00:00:00:00";
  marcaLista.value = [];
}

function marcar() {
  marcaLista.value.push(tempo.value);
}
</script>

<template>
  <HomeInfoViews>
    <div id="topo">
    <div id="cronometro">

      <h2 id="tempo">{{ tempo }} </h2>

            <div id="alerta">
              <label>Defina o tempo de estudo </label>
                <input type="text" v-model="alerta" placeholder="00:01:30">
            </div>
      <div id="acoes">
        <button @click="reset"><ion-icon name="reload-circle"></ion-icon></button>
        <button  @click="intervalId ? pause() : start()">
          <ion-icon :name="intervalId ? 'pause' : 'play'"></ion-icon>
        </button>
        <button @click="marcar"><ion-icon name="flag"></ion-icon></button>
      </div>

      <div id="marca-lista">
        <p v-for="(m, i) in marcaLista" :key="i">Volta {{ i+1 }}: {{ m }}</p>
      </div>
    </div>
    </div>
  </HomeInfoViews>
</template>

<style scoped>


#topo{
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

}
#cronometro{
  background-color:transparent;
  border:1px solid #0090E3;
  border-radius: 8px;
  margin: 10px;
  padding: 1.2rem 4rem;
  margin-top: 30px;

}
#alerta input{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 5px 10px;
  margin-left: 15%;
  border-radius: 15px;
  outline: none;
}
#alerta label{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;


}

#acoes {
display: flex;
justify-content: center;
align-items: center;
gap: 15px;
border-bottom: 1px solid ;

}
#acoes button{
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 15px ;
color: #000;
margin-top: 25px;
margin-bottom: 25px;
  background-color: #0090E3;
  border: none;
  border-radius: 8px;

  cursor: pointer;
}
#tempo{

    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
  font-size: 2rem;
  border:1px solid #0090E3;
  padding:2.5rem;
  border-radius: 150%;
}

#marca-lista{
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top:25px ;
}
#acoes button:hover{
  background-color: #0078B8;
}
</style>

