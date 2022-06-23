import Vue from 'vue'

const miMixinGlobal = {
    methods: {
    },
    computed: {
        usuarios() {
            return this.$store.state.usuarios
        }
    }
}

Vue.mixin(miMixinGlobal)