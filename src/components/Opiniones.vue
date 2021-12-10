<template>
  <div>
    <h1 class="my-5">Lista de Opiniones</h1>
    <div class="container" v-if="opinions.length > 0">
      <div>
        <div
          class="accordion"
          id="accordionExample"
          v-for="(opinion, i) in opinions"
          :key="i"
        >
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  :data-target="`#collapse${i}`"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Opinión creada por: {{ opinion.name }}
                </button>
              </h2>
            </div>

            <div
              :id="`collapse${i}`"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body text-left">
                Opinión: {{ opinion.opinion }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="box">
        <p class="ml-3 my-2">No existen opiniones por mostrar</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "compon-opiniones",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["opinions"]),
  },
  methods: {
    // -- UI Modification
    // -- Data fetching
    // -- Data handling and transformations
    // -- Validations and Error handling
    // -- Other functions
    // -- Vuex mappings
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
.box {
  display: flex;
  align-items: center;
  color: brown;
  background-color: rgba(255, 99, 71, 0.5);
  height: 5rem;
}
</style>