<template>
<div>
    <h1 class="my-5">Administrando la Lista de Opiniones</h1>
  <div class="container" v-if="opinions.length > 0">


    <table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Persona</th>
      <th scope="col">Juego </th>
      <th scope="col">Opinión</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(opinion, i) in opinions"
          :key="i">
      <th scope="row"></th>
      <td>{{opinion.name}}</td>
      <td>{{opinion.nameGame}}</td>
      <td>{{opinion.opinion}}</td>
      <button type="button" @click="remove(i)" class="btn btn-danger btn-sm mr-5">Eliminar</button>
      <router-link :to="`/administracion/${i}`"><button type="button" class="btn btn-info btn-sm">Editar</button>
      </router-link>
    </tr>
  </tbody>
</table>
  </div>
   <div v-else>
      <div class="box my-5">
        <p class="ml-3 my-2"> No existen opiniones por administrar</p>
      </div>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "compon-list-opiniones",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["opinions"]),
    
  },
  methods: {
    remove(i){
      this.delete_opinion(i)
    },
    ...mapActions(['delete_opinion'])
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
.box{
  display: flex;
  align-items: center;
  color:brown;
  background-color: rgba(255, 99, 71, 0.5);
  height: 5rem;
}
</style>