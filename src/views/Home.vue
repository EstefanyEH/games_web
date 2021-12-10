<template>
  <div class="container">
    <h1 class="d-flex justify-content-center pt-5">Lista de Juegos Disponibles</h1>
    <div class="row py-5">
      <div class="col-md-4 col-sm-6 mb-4 " v-for="(juego, i) in juegos" :key="i" >
        <Cards :juego="juego"/>
      </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import {  mapState } from "vuex";
import Cards from '../components/Cards.vue'
export default {
  name: "Home",

  components: {
    Cards
  },
  computed: {
    ...mapState(["juegos"]),
  },
 


};
</script>

