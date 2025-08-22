<script setup>
import { ref } from 'vue'
import HomeInfoViews from '../homeInfoViews.vue';

const verStatus = ref(false)
function toggleConteudo(){
 verStatus.value = !verStatus.value
}

</script>
<template>
  <HomeInfoViews>
    <section class="correioProf">


      <nav>

          <ul class="lista-prof">


              <li class="prof-item">            <span class="icon">
              <ion-icon name="person-circle"></ion-icon>
            </span>

            <div class="info">
              <p class="email">Eail do professor/a</p>
              <p class="nome">Nome do Professor/a</p>
            </div>


                </li>




          <li class="prof-item">
            <span class="icon">
              <ion-icon name="person-circle"></ion-icon>
            </span>
            <div class="info">
              <p class="email">Email do professor/a</p>
              <p class="nome">Nome do Professor/a</p>
            </div>
          </li>

          <li class="prof-item">
            <span class="icon">
              <ion-icon name="person-circle"></ion-icon>
            </span>
            <div class="info">
              <p class="email">Email do professor/a</p>
              <p class="nome">Nome do Professor/a</p>
            </div>
          </li>
        </ul>

      </nav>
    </section>
  </HomeInfoViews>
</template>

<style scoped>
.correioProf {
  padding-left: 11%;
  padding-top: 5%;
}

.verStatus-toggl{

  cursor: pointer;
  font-size: 20px;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-align: center;
  background-color: transparent;
}

.conteudo {
  margin-top: 10px;
  padding: 15px 0px 30px 50px;
  border: 2.1px solid #0090E3;
  border-radius: 10px;
  color: #f0f0f0;
  font-size: 15px;
  width: 30%;
  display: flex;



}

.verStatus .conteudo {
  display: block;
}

.lista-prof {
  list-style: none;
  padding: 0;
  margin: 0;
}

.prof-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}

.email {
  display: inline-block;
  border-bottom: 1px solid #fff;
  width: 250px;
}

.icon {
  font-size: 3.5vw;

}

.info {
  display: flex;
  flex-direction: column;

}

.email, .nome {
  font-size: 1.4vw;
  margin: 0; 
}

</style>
