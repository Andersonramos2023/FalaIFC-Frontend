<script setup>
</script>
<template>

  <footer>
    <hr>


    <nav>
      <div class="contatos">
        <h2>Contatos</h2>
        <ul>
          <li>Email:FalaIFC@gmail.com</li>
          <li>Telefone: 99986-7741</li>
          <li>Instagram1:Inst..FalaIFC</li>
        </ul>
      </div>

      <div class="criadores">


        <h2>Criadores</h2>
        <ul>
          <li>Anderson Ramos Silva Anjo</li>
          <li>Daniel Henrique Fernandes</li>
        </ul>
      </div>

      <div class="icons">
        <ul>
          <li><i class="bi bi-facebook"></i></li>
          <li><i class="bi bi-instagram"></i></li>
          <li><i class="bi bi-twitter"></i></li>
        </ul>
      </div>

    </nav>



  </footer>
</template>
<style scoped>

footer {
  color: #fff;
  z-index: 2;

  & nav {

    display: flex;
    flex-direction: row;
    align-items: center;

  }

  & .contatos {

    padding: 20px;
    color: white;
    margin-left: 10vw;
    margin-top: 2vw;
    font-size: 1.5vw;

  }

  & li {
    padding: 2px;

  }

  & h2 {
    font-size: 2vw;
    margin-bottom: 20px;
  }


  & .criadores {

    padding: 20px;
    color: white;
    margin-left: 10vw;
    margin-top: 1px;
    font-size: 1.5vw;
  }

  & li {
    padding: 2px;

  }

  & h2 {
    font-size: 2vw;
    margin-bottom: 20px;

  }

}

.icons {
  padding: 20px;
  display: flex;
  color: #6A00FF;
  margin-left: 10vw;
  margin-top: 7vw;
  font-size: 1.5vw;

  & ul {
    display: flex;
    gap: 20px;


  }
}
</style>
