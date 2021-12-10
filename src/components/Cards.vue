<template>
  <div>
    <div class="card-deck">
      <div class="card w-100" style="width: 18rem">
        <img :src="juego.background_image" class="card-img-top" alt="..." style="height:15rem" />
        <div class="card-body">
          <h5 class="card-title">{{ juego.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Rating: {{ juego.rating }}</li>
          <li class="list-group-item">Released {{ juego.released }}</li>
          <li class="list-group-item">Update: {{ juego.updated }}</li>
        </ul>
        <div class="card-body">
          <button
            type="button"
            class="btn btn-primary"
            @click="setGame(juego.name)"
            data-toggle="modal"
            :data-target="`#staticBackdrop${juego.id}`"
          >
            Opinar
          </button>
        </div>
      </div>
    </div>
    
    <!-- Modal -->
    <div
      class="modal fade"
      :id="`staticBackdrop${juego.id}`"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title font-weight-bolder" id="staticBackdropLabel">
              Escribe tu opinion para el juego:{{nameJuego}}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group text-left" action="">
              <label for="" class="font-weight-bolder">Nombre:</label>
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Pedro Perez"
                v-model="name"
              />
            </form>
            <form action="">
              <div class="form-group text-left">
                <label
                  for="exampleFormControlTextarea1"
                  class="font-weight-bolder"
                  >Opiniones</label
                >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Nueva Opinión sobre el juego "
                  rows="3"
                  v-model="opinion"
                ></textarea>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  @click="addOpinion"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "card-comp",
  props: ["juego"],

  data: function () {
    return {
      name: "",
      opinion: "",
      nameJuego: "",
    };
  },
  computed: {
    ...mapState(["juegos", "opinions"]),
  },
  methods: {
    ...mapActions(["add_juegos", "add_opinion"]),

    addOpinion() {
      let opinion = {
        name: this.name,
        opinion: this.opinion,
        nameGame: this.nameJuego,
      };
      this.add_opinion(opinion);
    },

    setGame(nombre) {
      this.nameJuego = nombre;
      console.log(nombre)
      console.log(this.nameJuego)
    },
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
</style>