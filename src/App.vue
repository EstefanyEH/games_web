<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import {mapActions} from "vuex";

export default {
    name: '',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
       ...mapActions(["add_juegos"]),
    },
    // watch: {},
     components: {
       Navbar
     },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    mounted(){
      this.add_juegos();
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
