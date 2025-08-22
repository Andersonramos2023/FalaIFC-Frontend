<script setup >
import HomeInfoViews from '../homeInfoViews.vue';
</script>
<template>
 <HomeInfoViews>



   <section class="inicio">
     <h1>Opa!</h1>
     <p>O FalaIFC foi criado com o propósito de apoiar os alunos que encontram dificuldades em diferentes áreas do conhecimento, como <strong>matemática</strong>, <strong>física</strong>, <strong>geografia</strong> e até mesmo <strong>informática</strong>. Sabemos que muitas vezes o conteúdo pode parecer desafiador, e é exatamente por isso que o projeto existe: para ser uma ponte entre a dúvida e a compreensão, oferecendo um espaço de aprendizado acessível e colaborativo.</p>


<p>
Na área de <strong>informática</strong>, o FalaIFC busca mostrar que cada obstáculo enfrentado é, na verdade, uma oportunidade de crescimento. Errar faz parte do processo, e cada dúvida esclarecida é um passo em direção à confiança e ao domínio da <strong>tecnologia</strong>.

 Lembre-se: <strong>não importa quão difícil pareça no começo, a persistência é o que transforma esforço em conquista</strong>. Continue acreditando no seu potencial, porque <strong>você é capaz de ir muito além do que imagina</strong>.
      </p>

    </section>
  </HomeInfoViews>
    </template>
<style scoped>


.inicio {
  padding: 20px;
  color: white;
  margin-left: 10vw;
  z-index: 2;

  & h1 {
    font-size: 2.1vw;
    margin-bottom: 40px;

    color: #0090E3;

  }

  & p {
    padding: 0 0.7vw ;
    font-size: 25px;
    margin-right: 50%;
    margin-bottom: 25px;
    color: #ccc;

  }

  & strong {
    color: #fff;



  }

}

</style>
