<template>
  <div class="container">
    <h1 class="mt-5">Editando la opinión de: {{ juego }}</h1>
    <form class="text-left">
      <div class="form-group">
        <label for="exampleFormControlInput1">Nombre:</label>
        <input
          type="name"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Pedro Perez"
          v-model="nombre"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Opiniones</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Nueva Opinión sobre el juego "
          rows="3"
          v-model="opinion"
        ></textarea>
      </div>
      <router-link to="/administracion"
        ><button type="button" class="btn btn-primary mr-4">
          Regresar
        </button></router-link
      >
      <button type="button" class="btn btn-info save" @click="editOpinion">
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "component-name",
  props: {
    id: { type: String },
  },
  data: function () {
    return {
      nombre: "",
      opinion: "",
      juego: "",
    };
  },
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    ...mapActions(["edit_opinion"]),

    setData() {
      let opinionEncontrada = this.opinions[this.id];

      this.opinion = opinionEncontrada.opinion;
      this.nombre = opinionEncontrada.name;
      this.juego = opinionEncontrada.nameGame;
    },

    editOpinion() {
      let myOpinion = {
        id: this.id,
        nombre: this.nombre,
        juego: this.juego,
        opinion: this.opinion,
      };

      this.edit_opinion(myOpinion);
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.setData();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>