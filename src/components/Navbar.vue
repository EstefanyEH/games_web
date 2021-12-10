<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <a class="navbar-brand" href="#">
            <i class="fas fa-headset"></i>
            Games Opinion 
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto" style="font-family: Open Sans, regular; font-size: 16px;">
                <li class="nav-item">
            <router-link to="/"><a class="nav-link">
                    <i class="fas fa-home"></i>
                    Home</a></router-link>  
                </li>
                <li class="nav-item">
                    <router-link to="/opiniones">
                    <a class="nav-link" href="#">
                        <i class="fas fa-comments"></i>
                        Opiniones</a>
                        </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/administracion">
                    <a class="nav-link" id="adm" href="#">
                        <i class="fas fa-users-cog"></i>
                        Administración</a>
                        </router-link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "compon-navbar",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
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
.navFlex{
    display: flex;
    justify-content: flex-end;
}
</style>