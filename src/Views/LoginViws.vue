<script setup>

import { ref } from 'vue'

const btnPopup = ref()

const btnClose = () => {
  btnPopup.value.classList.remove('active')
}

const fazerLogin = () => {
  alert('Login efetuado com sucesso!')
}

</script>
<template>
  <div class="conteiner"> <!-- AQUI -->
    <div class="icon-close" @click="btnClose"> <!-- AQUI -->

    </div>

    <div class="login">
      <h2>Login</h2>
      <form action="#" @submit.prevent="fazerLogin"> <!-- AQUI -->
        <div class="entrada-caixa">
          <span class="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" required />
          <label>Email</label>
        </div>

        <div class="entrada-caixa">
          <span class="icon"><ion-icon name="eye"></ion-icon></span>
          <input type="password" required />
          <label>Senha</label>
        </div>

        <div class="lenbrar-esquecer">
          <label><input type="checkbox" /> Lembrar de mim</label>
        </div>

        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>

  <Footer-Components />
</template>


<style scoped>
.conteiner {
  position: fixed;
  align-items: center;
  display: flex;
  margin-top:5%;
  margin-bottom: 5%;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(0, 0, 0, .5);
  justify-content: center;
  color: antiquewhite;
  position: relative;
  margin-left: 30%;
  width: 400px;
  height: 440px;
  background-color:transparent ;
  border: 1px solid rgba(255, 255, 255, .5);
  z-index: 1;
}
.conteiner .login{
width: 100%;
padding: 40px;
}

.login h2 {
  text-align: center;
  color: #fff;
  font-size: 2em;
}
.entrada-caixa {
  position: relative;
  width: 100%;
  height: 50px;
  color: #fff;
 border-bottom : 2px solid #fff;
 margin: 30px 0;
}
.entrada-caixa label {
  position: absolute;
  top: 0%;
  left: 5px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1em;
  transition: all .3s ease;
}

.entrada-caixa input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1em;
  transition: .2s;
}
.entrada-caixa input:focus ~ label,
.entrada-caixa input:valid ~ label {
  top: -5px;
}

.entrada-caixa .icon {
  position: absolute;
  right: 8px;
  line-height: 0px;
  font-size: 1.2em;
  cursor: pointer;

}

.lenbrar-esquecer{
  font-size:.9em;
  color: #fff;
  font-weight: 500;
  margin:-15px 0 20px ;
  display: flex;
  justify-content: space-between;
}

.btn {
  width: 100%;
  height: 50px;
  background: #6A00FF;
  border: none;
  top: 0px;
  border-radius: 25px;
  outline: none;
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  transition: .3s;
}
</style>
