<template>
    <div>
        <com-opiniones></com-opiniones>
    </div>
</template>

<script>
import Adm_opiniones from '@/components/Adm_opiniones.vue'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
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
    components: {
        "com-opiniones":Adm_opiniones
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>