<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const ativo = ref(false)
const anoSelecionado = ref(null)

function toggleConteudo() {
  ativo.value = !ativo.value
}

function selecionarAno(ano) {
  anoSelecionado.value = ano
}

const fazerLogin = () => {
  alert('Login efetuado com sucesso! Por favor escolha seu curso!')
}

const nome = ref("");
const matricula = ref("");
const senha = ref("");
const router = useRoute();

function enviarCadastro (){
  localStorage.setItem("nome", nome.value);
  localStorage.setItem("senha", senha.value);
  localStorage.setItem("matricula", matricula.value)

router.push({ name: "VerCursoInfo"})
  }
</script>

<template>
  <div class="conteiner">
    <div class="txt">
      <h1>Faça o Cadastro</h1>

      <div class="login">

        <form @submit.prevent="fazerLogin(); enviarCadastro();"
        >
          <div class="entrada-caixa">
            <span class="icon"><ion-icon name="name"></ion-icon></span>
            <input type="nome" v-model="nome" required />
            <label>Nome</label>
          </div>

          <div class="entrada-caixa">
            <span class="icon"><ion-icon name="matricula"></ion-icon></span>
            <input type="#" v-model="matricula" required />
            <label>Matrícula</label>
          </div>

          <div class="entrada-caixa">
            <span class="icon"><ion-icon name="eye"></ion-icon></span>
            <input type="password" v-model="senha" required />
            <label>Senha</label>
          </div>

          <div class="lenbrar-esquecer">
            <label><input type="checkbox" /> Lembrar de mim</label>
          </div>

          <div class="cnt-curso">
            <div class="container" :class="{ ativo: ativo }">
              <div class="seta-toggle" @click="toggleConteudo">
                Em que ano você está? <span class="seta">▶</span>
              </div>

              <div class="conteudo">
                <ul>
                  <li @click="selecionarAno(1)">
                    <span class="seta-ano" :class="{ativo: anoSelecionado === 1}">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </span>
                    <span class="txt-curso">1º ano Química</span>
                  </li>
                  <li @click="selecionarAno(2)">
                    <span class="seta-ano" :class="{ativo: anoSelecionado === 2}">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </span>
                    <span class="txt-curso">2º ano Química</span>
                  </li>
                  <li @click="selecionarAno(3)">
                    <span class="seta-ano" :class="{ativo: anoSelecionado === 3}">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </span>
                    <span class="txt-curso">3º ano Química</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <button type="submit" class="btn">Login</button>
        </form>
      </div>

      <ul class="cursos">
        <RouterLink to="/informatica">
          <li>Informática</li>
        </RouterLink>
        <RouterLink to="/Quimica">
          <li>Química</li>
        </RouterLink>
        <RouterLink to="/agropecuaria">
          <li>Agropecuária</li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.conteiner {
  text-align: center;
  padding: 2rem;
}
.container {
  width: 450px;
  margin: 80px auto;
  font-family: Arial, sans-serif;
}
.txt {
  border: 3px solid #fff;
  background-color: #444;
  padding: 3vw 50px 9vw 60px;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(255, 255, 255, .5);
  color: antiquewhite;
  margin: 8vw;
  border-radius: 25px;
  margin-top: 90px;
}

.entrada-caixa {
  position: relative;
  width: 100%;
  height: 50px;
  color: #fff;
  border-bottom: 2px solid #fff;
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
  font-size: 1.2em;
  cursor: pointer;
}

.lenbrar-esquecer {
  font-size: .9em;
  color: #fff;
  font-weight: 500;
  margin: -15px 0 20px;
  display: flex;
  justify-content: space-between;
}

.btn {
  width: 50%;
  height: 50px;
  background: transparent;
  border: 1px solid #fff;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 25px;
  outline: none;
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  transition: .3s;
}

.btn:hover {
  background-color: #fff;
  color: black;
}

ul.cursos {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}


li {
  padding: 1rem 2rem;
  background: #333;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background 0.3s;
}

li:hover {
  border: 2px solid #fff;
}

.seta-toggle {
  cursor: pointer;
  font-size: 20px;
  border: 2px solid #fff;
  color: white;
  padding: 10px 5px;
  border-radius: 8px;
  text-align: center;
  background-color: transparent;
}

.seta-toggle:hover {
  background-color: #fff;
  color: #000;
}

.conteudo {
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px ;
  border: 2px solid #ffff;
  border-radius: 10px;
  color: #f0f0f0;
  display: none;
  box-shadow: 0 0 30px rgba(0, 0, 0, .5);
  cursor: pointer;
  gap: 20px;
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

.seta-ano {
  color: #f0f0f0;
  transition: 0.2s ease;
  margin: 10px;
}

.seta-ano.ativo {
  color: #000;
}

.txt-curso {
  transition: 0.8s ease-in-out;
  padding: 5px;

}

.txt-curso:hover {
    padding: 5px;

  border-bottom: 2px solid #fff;
  border-radius: 20px;
}
</style>
